import { ItemDisplay } from "@/components/custom/item-display";
import { LibraryItem } from "@/components/custom/item-display-reducer";
import { HttpTranslator } from "@/lib/eg-client/src/adapters/http-translator";
import { ItemStatus } from "@/lib/eg-client/src/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

const getItemInfo = cache(async (itemBarcode: string, authToken: string) => {
  try{
    const cookieStore = await cookies();
    const egServer = cookieStore.get("EG_SERVER")?.value;
    if (!egServer) {
      throw new Error("Evergreen server is not set");
    }
    const client = new HttpTranslator({
      baseUrl: egServer,
    });
    const { data: dataArray, error } = await client
      .pcrud(authToken)
      .from("acp")
      .where({
        barcode: itemBarcode,
      })  
    .flesh(3)
    .fleshFields({
      acp: ["location", "status", "call_number", "circ_lib", "latest_inventory"],
      acn: ["record"],
      bre: ["simple_record"],
    })
    .select();
  if (!dataArray || error) {
    throw new Error("Failed to fetch item information for barcode: " + itemBarcode);
  }
  const itemId = dataArray[0].id();

  const { data: inHouseUses, error: inhouseUsesError } = await client
    .pcrud(authToken)
    .from("aihu")
    .where({
      item: itemId,
    })
    .select({
      idlist: true,
      atomic: true,
    });

  if (inhouseUsesError || !inHouseUses) {
    console.error(inhouseUsesError);
    throw new Error("Failed to fetch inhouse use count");
  }
  const data = dataArray[0];

  const callnumber = data.call_number()?.label();
  const title = data.call_number()?.record()?.simple_record()?.title();
  const location = data.location()?.name();
  const status = data.status()?.name();
  // circulationModifier may become problematic as it can be a string on some evergreen instances or an object from the CCM class on others
  const circulationModifier = data.circ_modifier() as unknown as string;
  const orgUnitLocation = data.circ_lib()?.shortname();
  const orgUnitId = data.circ_lib()?.id();
  const copyInventory = data.latest_inventory()?.inventory_date();
  const itemInfo: LibraryItem = {
    id: itemId!,
    title: title || "N/A",
    barcode: itemBarcode,
    callNumber: callnumber || "N/A",
    shelvingLocation: location || "N/A",
    circModifier: circulationModifier || "N/A",
    status: (status as ItemStatus) || "N/A",
    inHouseUseCount: inHouseUses.length || 0,
    orgUnitLocation: orgUnitLocation || "N/A",
    orgUnitId: orgUnitId || -1,
    inventoryDateTime: copyInventory ? new Date(copyInventory) : "N/A",
  };
  
  return itemInfo;
  } catch (error) {
    console.error(error);
    throw new Error(error instanceof Error ? error.message : "Failed to fetch item information for barcode: " + itemBarcode);
  }
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ barcode: string }>;
}) {
  const resolvedParams = await params;
  const barcode = resolvedParams.barcode;
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
  if (!authToken) {
    throw new Error("Unauthorized");
  }
  const itemInfo = await getItemInfo(barcode, authToken);
  return {
    title: `Item Title: ${itemInfo.title}`,
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ barcode: string }>;
}) {
  const resolvedParams = await params;
  const barcode = resolvedParams.barcode;
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;

  if (!authToken) {
    redirect("/");
  }
  const itemInfo = await getItemInfo(barcode, authToken);
  return (
    <div className="max-w-xl mx-2 sm:mx-auto mt-10">
      <ItemDisplay itemInfo={itemInfo} />
    </div>
  );
}
