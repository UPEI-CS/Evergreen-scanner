import ItemDisplay, { ItemInfo } from "@/components/custom/itemDisplay";
import { client } from "@/lib/eg-client";
import { cookies } from "next/headers";
import { cache } from "react";

const getItemInfo = cache(async (itemID: string, authToken: string) => {

  const { data, error } = await client
    .pcrud(authToken)
    .from("acp")
    .where({
      barcode: itemID,
    })
    .flesh(3)
    .fleshFields({
      acp: ["location", "status", "call_number"],
      acn: ["record"],
      bre: ["simple_record"],
    })
    .select();
  if (!data || error) {
    throw new Error("Failed to fetch data");
  }
  const barcode = data.barcode();
  const callnumber = data.call_number()?.label();
  const title = data.call_number()?.record()?.simple_record()?.title();
  const location = data.location()?.name();
  const status = data.status()?.name();
  const circulationModifier = data.circ_modifier()?.name();
  const itemInfo: ItemInfo = {
    title: title,
    barcode: barcode,
    lcCallNumber: callnumber,
    shelvingLocation: location,
    circulationModifier: circulationModifier,
    status: status,
  };
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
    throw new Error("Unauthorized");
  }
  const itemInfo = await getItemInfo(itemID, authToken);
  return <ItemDisplay iteminfo={itemInfo} />;
}
