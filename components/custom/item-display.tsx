"use client"

import { useEffect, useReducer, useState } from "react"
import { format } from "date-fns"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectSeparator } from "@/components/ui/select"
import { itemDisplayReducer, type LibraryItem } from "./item-display-reducer"
import {
  type ItemStatus,
  MANUAL_ITEM_STATUSES,
  SYSTEM_ITEM_STATUSES,
  type SystemItemStatus,
} from "@/lib/eg-client/src/types/index"
import { useRouter, useSearchParams } from "next/navigation"
import { updateItem } from "@/app/actions"
import { useSettings } from "@/hooks/use-settings"

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
  const searchParams = useSearchParams()  
  const {
    recordInHouseUse,
    updateInventoryDateTime,
    enableCheckIn,
    enabledStatusChanges,
    isStatusChangeEnabled,
  } = useSettings()
  const [submitting, setSubmitting] = useState(false)
  const initialItem = itemInfo || defaultItem
  const [state, dispatch] = useReducer(itemDisplayReducer, {
    step: 1,
    item: initialItem,
    updatedItem: initialItem,
    hasUpdated: false,
  })

  const handleSaveChanges = async (change: "status" | "inHouseUseCount" | "inventoryDateTime" | "checkIn") => {
    try {
      setSubmitting(true)
      await updateItem(change, state.updatedItem)
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href)
        url.searchParams.set('message', 'success')
        window.location.replace(url.toString())
      }
    } catch (error) {
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href)
        url.searchParams.set('message', 'error')
        window.location.replace(url.toString())
      }
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    const message = searchParams.get("message")
    if (message === "success") {
      toast.success("Item information updated successfully!", {
        position: "top-center", 
        duration: 3000,
      })
      router.replace(window.location.pathname)
    } else if (message === "error") {
      toast.error("Failed to update item information", {
        position: "top-center",
        duration: 3000,
      })
      router.replace(window.location.pathname)
    }
  }, [router, searchParams])

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
      
      case 2:
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
      
      case 3:
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
              <Button onClick={() => handleSaveChanges("inHouseUseCount")} className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                
                  </>
                ) : (
                  "Save change"
                )}
              </Button>
            </CardFooter>
          </>
        )
      case 4:
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
              <Button onClick={() => handleSaveChanges("inventoryDateTime")} className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
               
                  </>
                ) : (
                  "Save change"
                )}
              </Button>
            </CardFooter>
          </>
        )
      case 5:
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
              <Button onClick={() => handleSaveChanges("status")} className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                  
                  </>
                ) : (
                  "Save change"
                )}
              </Button>
            </CardFooter>
          </>
        )
      case 6:
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
                  <p className="text-sm">This action will check in the item and set its status to &quot;Available&quot;.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button variant="outline" onClick={() => dispatch({ type: "GO_BACK" })} className="w-full">
                Back
              </Button>
              <Button onClick={() => handleSaveChanges("checkIn")} className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  "Save change"
                )}
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

