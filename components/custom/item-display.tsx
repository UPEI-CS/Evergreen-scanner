"use client"

import { useReducer, useEffect } from "react"
import { format } from "date-fns"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select"
import { itemDisplayReducer, type LibraryItem } from "./item-display-reducer"
import {
  type ItemStatus,
  MANUAL_ITEM_STATUSES,
  SYSTEM_ITEM_STATUSES,
  type SystemItemStatus,
} from "@/lib/eg-client/src/types/index"
import { useRouter } from "next/navigation"
import { updateItem } from "@/app/actions"
import { useSettings } from "@/hooks/use-settings"

// Default empty item to use if itemInfo is undefined
const defaultItem: LibraryItem = {
  id: 0,
  title: "N/A",
  barcode: "",
  callNumber: "N/A",
  status: "Available" as ItemStatus,
  shelvingLocation: "N/A",
  orgUnitLocation: "N/A",
  inHouseUseCount: 0,
  inventoryDateTime: "N/A",
  circModifier: "N/A",
  orgUnitId: 0,
}

const formatDate = (date: Date | "N/A", formatString: string): string => {
  if (date === "N/A") {
    return "N/A"
  }
  return format(date, formatString)
}

export function ItemDisplay({ itemInfo }: { itemInfo?: LibraryItem }) {
  const router = useRouter()
  const {
    recordInHouseUse,
    updateInventoryDateTime,
    enableCheckIn,
    enabledStatusChanges,
    isStatusChangeEnabled,
  } = useSettings()

  // Use the provided itemInfo or fall back to the default item
  const initialItem = itemInfo || defaultItem

  const [state, dispatch] = useReducer(itemDisplayReducer, {
    step: 1,
    item: initialItem,
    updatedItem: initialItem,
    hasUpdated: false,
  })

  // Handle item updates
  const handleSaveChanges = async (change: "status" | "inHouseUseCount" | "inventoryDateTime" | "checkIn") => {
    try {
      await updateItem(change, state.updatedItem)
      toast.success("Item information updated successfully!", {
        position: "top-center",
        duration: 3000,
      })
      router.refresh()
    } catch (error) {
      toast.error(error as string, {
        position: "top-center",
        duration: 3000,
      })
    }
  }

  // If there's no item, show a message
  if (!state.item) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Item Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No item information available. Please scan an item or go back to the main page.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/")} className="w-full">
            Go to Main Page
          </Button>
        </CardFooter>
      </Card>
    )
  }

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
                  <div className="font-medium capitalize">{state.item.status}</div>
                </div>
                <div>
                  <Label>Shelving Location</Label>
                  <div className="font-medium">{state.item.shelvingLocation}</div>
                </div>
                <div>
                  <Label>Circ Modifier</Label>
                  <div className="font-medium">{state.item.circModifier}</div>
                </div>
                <div>
                  <Label>In-house Use Count</Label>
                  <div className="font-medium">{state.item.inHouseUseCount}</div>
                </div>
                <div>
                  <Label>Inventory Date/Time </Label>
                  <div className="font-medium">
                    {state.item.inventoryDateTime === "N/A" ? "N/A" : formatDate(state.item.inventoryDateTime, "PPP p")}
                  </div>
                </div>
                <div className="col-span-2">
                  <Label>Org Unit</Label>
                  <div className="font-medium">{state.item.orgUnitLocation}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => router.push("/")} className="w-full">
                Scan new item
              </Button>
              <Button onClick={() => dispatch({ type: "CONFIRM_ITEM" })} className="w-full">
                Change item in hand
              </Button>
            </CardFooter>
          </>
        )
      
      case 2.5:
        // Check if any actions are available
        const noActionsAvailable = !recordInHouseUse && !updateInventoryDateTime && !enableCheckIn && enabledStatusChanges.length === 0;
        
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">Select an Action</CardTitle>
              <CardDescription> 
                Please select an action to perform on the item.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {noActionsAvailable ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground text-center">
                    No actions are available. Please enable features in Settings.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <div className="pt-2">
                    <div className="flex flex-col gap-3">
                      {recordInHouseUse && (
                        <Button
                          onClick={() => dispatch({ type: "RECORD_IN_HOUSE_USE" })}
                          className="w-full justify-start h-10 py-3 px-4"
                        >
                          Record In-house Use
                        </Button>
                      )}
                      
                      {enableCheckIn && (
                        <Button
                          onClick={() => dispatch({ type: "CHECK_IN_ITEM" })}
                          className="w-full justify-start h-10 py-3 px-4"
                        >
                          Check In Item
                        </Button>
                      )}
                      
                      {updateInventoryDateTime && (
                        <Button
                          onClick={() => dispatch({ type: "UPDATE_INVENTORY" })}
                          className="w-full justify-start h-10 py-3 px-4"
                        >
                          Update Inventory Date
                        </Button>
                      )}
                      
                      {enabledStatusChanges.length > 0 && (
                        <Button
                          onClick={() => dispatch({ type: "CHANGE_STATUS" })}
                          className="w-full justify-start h-10 py-3 px-4"
                        >
                          Change Item Status
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button 
                variant="outline" 
                onClick={() => dispatch({ type: "GO_BACK" })} 
                className="w-full"
              >
                Back
              </Button>
            </CardFooter>
          </>
        )
      
      // Record In-house Use - Modified to directly save changes
      case 3.1:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">Record In-house Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div className="space-y-2">
                  <Label>Current In-house Use Count</Label>
                  <div className="font-medium">{state.item.inHouseUseCount}</div>
                </div>
                <div className="space-y-2">
                  <Label>New In-house Use Count</Label>
                  <div className="font-extrabold">{state.updatedItem.inHouseUseCount}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => dispatch({ type: "GO_BACK" })} className="w-full">
                Back
              </Button>
              <Button onClick={() => handleSaveChanges("inHouseUseCount")} className="w-full">
                Save change
              </Button>
            </CardFooter>
          </>
        )
      // Update Inventory Date - Modified to directly save changes
      case 3.3:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">Update Inventory Date</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div className="space-y-2">
                  <Label>Current Inventory Date/Time</Label>
                  <div className="font-medium">
                    {state.item.inventoryDateTime === "N/A" ? "N/A" : formatDate(state.item.inventoryDateTime, "PPP p")}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>New Inventory Date/Time</Label>
                  <div className="font-extrabold">
                    {formatDate(state.updatedItem.inventoryDateTime, "PPP p")}
                  </div>
                </div>
                <div className="bg-muted p-4 rounded-md mt-2">
                  <p className="text-sm">This action will update the inventory date to the current date and time.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => dispatch({ type: "GO_BACK" })} className="w-full">
                Back
              </Button>
              <Button onClick={() => handleSaveChanges("inventoryDateTime")} className="w-full">
                Save change
              </Button>
            </CardFooter>
          </>
        )
      // Change Status - Modified to directly save changes
      case 3.4:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">Change Item Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div className="space-y-2">
                  <Label>Current Status</Label>
                  <div className="font-medium capitalize">{state.item.status}</div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">New Status</Label>
                  <Select
                    value={state.updatedItem.status}
                    onValueChange={(value: ItemStatus) => dispatch({ type: "UPDATE_STATUS", payload: value })}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {SYSTEM_ITEM_STATUSES.includes(state.updatedItem.status as SystemItemStatus) && (
                        <SelectItem key={state.updatedItem.status} value={state.updatedItem.status} disabled>
                          {state.updatedItem.status}
                        </SelectItem>
                      )}

                      {SYSTEM_ITEM_STATUSES.includes(state.updatedItem.status as SystemItemStatus) && (
                        <SelectSeparator />
                      )}

                      {MANUAL_ITEM_STATUSES.filter(status => isStatusChangeEnabled(status)).map((status) => (
                        <SelectItem key={status} value={status.toLowerCase()}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => dispatch({ type: "GO_BACK" })} className="w-full">
                Back
              </Button>
              <Button onClick={() => handleSaveChanges("status")} className="w-full">
                Save change
              </Button>
            </CardFooter>
          </>
        )
      // Check In Item - Shows the current status and new "Available" status
      case 3.5:
        return (
          <>
            <CardHeader>
              <CardTitle className="break-words">Check In Item</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label>Barcode</Label>
                  <div className="font-medium">{state.item.barcode}</div>
                </div>
                <div className="space-y-2">
                  <Label>Current Status</Label>
                  <div className="font-medium capitalize">{state.item.status}</div>
                </div>
                <div className="space-y-2">
                  <Label>New Status</Label>
                  <div className="font-extrabold ">Available</div>
                </div>
                <div className="bg-muted p-4 rounded-md mt-2">
                  <p className="text-sm">This action will check in the item and set its status to "Available".</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => dispatch({ type: "GO_BACK" })} className="w-full">
                Back
              </Button>
              <Button onClick={() => handleSaveChanges("checkIn")} className="w-full">
                Save change
              </Button>
            </CardFooter>
          </>
        )
      default:
        return null
    }
  }

  return (
    <Card>{renderStepContent()}</Card>
  )
}

