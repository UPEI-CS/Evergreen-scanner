import { ItemDisplay } from "@/components/custom/item-display";
import { LibraryItem } from "@/components/custom/item-display-reducer";
import { client } from "@/lib/eg-client";
import { ItemStatus } from "@/lib/eg-client/src/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";

const getItemInfo = cache(async (itemID: string, authToken: string) => {
  const { data: dataArray, error } = await client
    .pcrud(authToken)
    .from("acp")
    .where({
      barcode: itemID,
    })
    .flesh(3)
    .fleshFields({
      acp: ["location", "status", "call_number", "circ_lib", "latest_inventory"],
      acn: ["record"],
      bre: ["simple_record"],
    })
    .select();
  if (!dataArray || error) {
    throw new Error("Failed to fetch data");
  }
  const itemId = dataArray[0].id();
  console.log("ITEM ID", itemId);

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
  console.log("INHOUSE USES", inHouseUses);
  const data = dataArray[0];
  const barcode = data.barcode();

  const callnumber = data.call_number()?.label();
  const title = data.call_number()?.record()?.simple_record()?.title();
  const location = data.location()?.name();
  const status = data.status()?.name();
  const circulationModifier = data.circ_modifier()?.name();
  const orgUnitLocation = data.circ_lib()?.shortname();
  const orgUnitId = data.circ_lib()?.id();
  const copyInventory = data.latest_inventory()?.inventory_date();
  console.log("COPY INVENTORY", copyInventory);
  const itemInfo: LibraryItem = {
    id: itemId!,
    title: title || "N/A",
    barcode: barcode!,
    callNumber: callnumber || "N/A",
    shelvingLocation: location || "N/A",
    circModifier: circulationModifier || "N/A",
    status: (status as ItemStatus) || "N/A",
    inHouseUseCount: inHouseUses.length || 0,
    orgUnitLocation: orgUnitLocation || "N/A",
    orgUnitId: orgUnitId || -1,
    inventoryDateTime: copyInventory ? new Date(copyInventory) : "N/A",
  };
  console.log(itemInfo);
  return itemInfo;
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const resolvedParams = await params;
  const itemID = resolvedParams.bookId;
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
  if (!authToken) {
    throw new Error("Unauthorized");
  }
  const itemInfo = await getItemInfo(itemID, authToken);
  return {
    title: `Item Title: ${itemInfo.title}`,
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const resolvedParams = await params;
  const itemID = resolvedParams.bookId;
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;

  if (!authToken) {
    redirect("/");
  }
  const itemInfo = await getItemInfo(itemID, authToken);
  return (
    <div className="max-w-xl mx-2 sm:mx-auto mt-10">
      <ItemDisplay itemInfo={itemInfo} />
    </div>
  );
}
