"use client";

import { useReducer, useEffect } from "react";
import { format } from "date-fns";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import { itemDisplayReducer, LibraryItem } from "./item-display-reducer";
import {
  ALL_ITEM_STATUSES,
  ItemStatus,
  MANUAL_ITEM_STATUSES,
  SYSTEM_ITEM_STATUSES,
  SystemItemStatus,
} from "@/lib/eg-client/src/types";
import { useRouter } from "next/navigation";
import { updateItem } from "@/app/actions";
const formatDate = (date: Date | "N/A", formatString: string): string => {
  if (date === "N/A") {
    return "N/A";
  }
  return format(date, formatString);
};

export function ItemDisplay({ itemInfo }: { itemInfo: LibraryItem }) {
  const router = useRouter();
  const [state, dispatch] = useReducer(itemDisplayReducer, {
    step: 1,
    item: itemInfo,
    updatedItem: itemInfo,
    showConfirmation: false,
    hasUpdated: false,
  });

  useEffect(() => {
    if (state.hasUpdated) {
      toast.success("Item information updated successfully!", {
        position: "top-center",
        duration: 3000,
      });
      dispatch({ type: "CLEAR_UPDATE_NOTIFICATION" });
    }
  }, [state.hasUpdated]);

  // Render different content based on the current step
  const renderStepContent = () => {
    switch (state.step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">{state.item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div>
                  <Label>Call Number</Label>
                  <div className="font-medium">{state.item.callNumber}</div>
                </div>
                <div>
                  <Label>Status</Label>
                  <div className="font-medium capitalize">
                    {state.item.status}
                  </div>
                </div>
                <div>
                  <Label>Shelving Location</Label>
                  <div className="font-medium">
                    {state.item.shelvingLocation}
                  </div>
                </div>
                <div>
                  <Label>Circ Modifier</Label>
                  <div className="font-medium">{state.item.circModifier}</div>
                </div>
                <div className="col-span-2">
                  <Label>Org Unit</Label>
                  <div className="font-medium">
                    {state.item.orgUnitLocation}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => router.push("/")}
                className="w-full"
              >
                Scan new item
              </Button>
              <Button
                onClick={() => dispatch({ type: "CONFIRM_ITEM" })}
                className="w-full"
              >
                Confirm item
              </Button>
            </CardFooter>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">{state.item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div>
                  <Label>In-house Use Count</Label>
                  <div className="font-medium">
                    {state.item.inHouseUseCount}
                  </div>
                </div>
                <div>
                  <Label>Inventory Date/Time </Label>
                  <div className="font-medium">
                    {state.item.inventoryDateTime === "N/A"
                      ? "N/A"
                      : formatDate(state.item.inventoryDateTime, "PPP p")}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => dispatch({ type: "GO_BACK" })}
                className="w-full"
              >
                Back
              </Button>
              <Button
                onClick={() => dispatch({ type: "UPDATE_INFO" })}
                className="w-full"
              >
                Next
              </Button>
            </CardFooter>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">{state.item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inHouseUseCount">In-house Use Count</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="inHouseUseCount"
                      value={state.updatedItem.inHouseUseCount}
                      readOnly
                      className="w-full focus:outline-none focus:ring-0"
                    />
                    <Button
                      onClick={() => dispatch({ type: "INCREMENT_USE_COUNT" })}
                      disabled={
                        state.updatedItem.inHouseUseCount >
                        state.item.inHouseUseCount
                      }
                      className="whitespace-nowrap"
                    >
                      Add one
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={state.updatedItem.status}
                    onValueChange={(value: ItemStatus) =>
                      dispatch({ type: "UPDATE_STATUS", payload: value })
                    }
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Show current system status if applicable */}
                      {SYSTEM_ITEM_STATUSES.includes(
                        state.updatedItem.status as SystemItemStatus
                      ) && (
                        <SelectItem
                          key={state.updatedItem.status}
                          value={state.updatedItem.status}
                          disabled
                        >
                          {state.updatedItem.status}
                        </SelectItem>
                      )}

                      {SYSTEM_ITEM_STATUSES.includes(
                        state.updatedItem.status as SystemItemStatus
                      ) && <SelectSeparator />}

                      {MANUAL_ITEM_STATUSES.map((status) => (
                        <SelectItem key={status} value={status.toLowerCase()}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inventoryDate">
                    Inventory Date/Time (mm/dd/yyyy)
                  </Label>
                  <div className="flex gap-2">
                    {state.updatedItem.inventoryDateTime === "N/A" ? (
                      <Input
                        id="inventoryDate"
                        readOnly
                        value="N/A"
                        className="flex-1"
                      />
                    ) : (
                      <Input
                        id="inventoryDate"
                        readOnly
                        type="datetime-local"
                        value={formatDate(
                          state.updatedItem.inventoryDateTime,
                          "yyyy-MM-dd HH:mm"
                        )}
                        onChange={(e) => {
                          const date = e.target.value
                            ? new Date(e.target.value)
                            : new Date();
                          dispatch({
                            type: "UPDATE_INVENTORY_DATE",
                            payload: date,
                          });
                        }}
                        className="flex-1"
                      />
                    )}
                    <Button
                      onClick={() =>
                        dispatch({
                          type: "UPDATE_INVENTORY_DATE",
                          payload: new Date(),
                        })
                      }
                      className="whitespace-nowrap"
                    >
                      update
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                variant="outline"
                onClick={() => dispatch({ type: "GO_BACK" })}
                className="w-full"
              >
                Back
              </Button>
              <Button
                onClick={() => dispatch({ type: "SHOW_CONFIRMATION" })}
                className="w-full"
              >
                Next
              </Button>
            </CardFooter>
          </>
        );
      default:
        return null;
    }
  };
  const renderConfirmationDialog = () => {
    return (
      <Dialog
        open={state.showConfirmation}
        onOpenChange={(open) =>
          dispatch({ type: open ? "SHOW_CONFIRMATION" : "HIDE_CONFIRMATION" })
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Changes</DialogTitle>
            <DialogDescription>
              Please review the changes before saving.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <h3 className="font-semibold col-span-2">Previous Values</h3>
              <div>
                <Label>Status</Label>
                <div className="capitalize">{state.item.status}</div>
              </div>
              <div>
                <Label>In-house Use Count</Label>
                <div>{state.item.inHouseUseCount}</div>
              </div>
              <div className="col-span-2">
                <Label>Inventory Date/Time</Label>
                <div>
                  {state.item.inventoryDateTime === "N/A"
                    ? "N/A"
                    : formatDate(state.item.inventoryDateTime, "PPP p")}
                </div>
              </div>

              <h3 className="font-semibold col-span-2 mt-4">New Values</h3>
              <div>
                <Label>Status</Label>
                <div className="capitalize">{state.updatedItem.status}</div>
              </div>
              <div>
                <Label>In-house Use Count</Label>
                <div>{state.updatedItem.inHouseUseCount}</div>
              </div>
              <div className="col-span-2">
                <Label>Inventory Date/Time</Label>
                <div>
                  {state.updatedItem.inventoryDateTime === "N/A"
                    ? "N/A"
                    : formatDate(state.updatedItem.inventoryDateTime, "PPP p")}
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => dispatch({ type: "HIDE_CONFIRMATION" })}
            >
              Back
            </Button>
            <Button onClick={async() => {
              try {
                await updateItem(state.item, state.updatedItem);
                dispatch({ type: "SAVE_CHANGES" });
              } catch (error) {
                toast.error(error as string, {
                  position: "top-center",
                  duration: 3000,
                });
                dispatch({type: "SCAN_NEW_ITEM"})
              }finally {
                router.refresh();
              }
            }}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
      <Card>{renderStepContent()}</Card>
      {renderConfirmationDialog()}
    </>
  );
}
