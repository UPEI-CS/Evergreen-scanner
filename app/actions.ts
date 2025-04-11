"use server";

import { LibraryItem } from "@/components/custom/item-display-reducer";
import { HttpTranslator } from "@/lib/eg-client/src/adapters/http-translator";
import { ManualItemStatus } from "@/lib/eg-client/src/types";
import { cookies } from "next/headers";
export async function updateItem(
  change: "status" | "inHouseUseCount" | "inventoryDateTime" | "checkIn",
  newLibraryItem: LibraryItem
) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
  const egServer = cookieStore.get("EG_SERVER")?.value;
  if (!authToken || !egServer) {
    throw new Error("Unauthorized");
  }
  const client = new HttpTranslator({
    baseUrl: egServer,
  });
  try {
    switch (change) {
      case "status":
        const { data, error } = await client
          .circ(authToken)
          .markItem(
            newLibraryItem.id,
            newLibraryItem.status as ManualItemStatus
          );
        if (error || !data) {
          throw new Error(error || "Failed to update item status");
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
          throw new Error(
            inHouseUseError || "Failed to update in-house use count"
          );
        }
        break;
      case "inventoryDateTime":
        const { data: inventoryDateTimeData, error: inventoryDateTimeError } =
          await client.circ(authToken).updateItemInventory([newLibraryItem.id]);
        if (inventoryDateTimeError || !inventoryDateTimeData) {
          throw new Error(
            inventoryDateTimeError || "Failed to update inventory date time"
          );
        }
        if (
          inventoryDateTimeData?.failureCount &&
          inventoryDateTimeData?.failureCount > 0
        ) {
          throw new Error(
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
          throw new Error(checkInError || "Failed to check in item");
        }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function validateServer(server: string) {
  try {
    const client = new HttpTranslator({
      baseUrl: server,
    });
    const { data, error } = await client.health.ping(server);
    
    if (error || !data) {
      return {
        success: false,
        message: "Failed to validate server",
        error: error || "No response from server"
      };
    }

    const cookieStore = await cookies();
    cookieStore.set("EG_SERVER", server, {
      maxAge: 60 * 60 * 24 * 365 * 2,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
    
    return {
      success: true,
      message: "Successfully connected to server"
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Failed to connect to server",
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
}

export async function disconnectServer() {
  const cookieStore = await cookies();
  cookieStore.delete("EG_SERVER");
}


