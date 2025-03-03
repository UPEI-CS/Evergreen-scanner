import { Button } from "@/components/ui/button";
import ItemDisplay, { ItemInfo } from "@/components/custom/itemDisplay";
import Link from "next/link";
import { client } from "@/lib/eg-client";
import { cookies } from "next/headers";

export default async function BookPage({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const itemID = (await params).bookId;
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
  if (!authToken) {
    throw new Error("Unauthorized");
  }
  const { data, error } = await client
    .pcrud(authToken)
    .from("acp")
    .where({
      id: itemID,
    })
    .flesh(2)
    .fleshFields({
      acp: ["location", "status", "call_number"],
      acn: ["record"],
    })
    .select();
  if (!data || error) {
    throw new Error("Failed to fetch data");
  }
  const barcode = data.barcode();
  const callnumber = data.call_number()?.label();
  const title = data.call_number()?.record()?.fingerprint();
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
  return (
    <section className="h-dvh flex justify-center mt-10">
      <ItemDisplay iteminfo={itemInfo}/>
    </section>
  );
}
