"use server";

import { LibraryItem } from "@/components/custom/item-display-reducer";
import { client } from "@/lib/eg-client";
import { ManualItemStatus } from "@/lib/eg-client/src/types";
import { cookies } from "next/headers";
export async function updateItem(
  change: "status" | "inHouseUseCount" | "inventoryDateTime" | "checkIn",
  newLibraryItem: LibraryItem
) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
  if (!authToken) {
    throw new Error("Unauthorized");
  }
  const errors: string[] = [];
  switch (change) {
    case "status":
      const { data, error } = await client
        .circ(authToken)
        .markItem(newLibraryItem.id, newLibraryItem.status as ManualItemStatus);
      if (error || !data) {
        errors.push(error || "Failed to update item status");
      }

      break;
    case "inHouseUseCount":
      const { data: inHouseUseData, error: inHouseUseError } = await client
        .circ(authToken)
        .createInHouseUse({
          copyid: newLibraryItem.id,
          location: newLibraryItem.orgUnitId,
          count: 1,
        });
      if (inHouseUseError || !inHouseUseData) {
        errors.push(inHouseUseError || "Failed to update in house use count");
      }
      break;
    case "inventoryDateTime":
      const { data: inventoryDateTimeData, error: inventoryDateTimeError } =
        await client.circ(authToken).updateItemInventory([newLibraryItem.id]);
      if (inventoryDateTimeError || !inventoryDateTimeData) {
        errors.push(
          inventoryDateTimeError || "Failed to update inventory date time"
        );
      }
      if (
        inventoryDateTimeData?.failureCount &&
        inventoryDateTimeData?.failureCount > 0
      ) {
        errors.push(
          inventoryDateTimeData?.failureCount.toString() ||
            "Failed to update inventory date time"
        );
      }
      break;
    case "checkIn":
      const { data: checkInData, error: checkInError } = await client
        .circ(authToken)
        .checkIn({
            copy_id: newLibraryItem.id,
            circ_lib: newLibraryItem.orgUnitId,
        });
      if (checkInError || !checkInData) {
        errors.push(checkInError || "Failed to check in item");
      }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}
