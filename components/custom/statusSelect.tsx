"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Toaster } from "@/components/ui/sonner"
  import { toast } from "sonner"

  export default function statusSelect({ status }: { status: string }) {

    const [selectedStatus, setSelectedStatus] = useState(status)

    const [isLoading, setIsLoading] = React.useState(false)


    const updateItem = () => {
        
        setIsLoading(true)
        //fake loading time for now
        setTimeout(() => {setIsLoading(false)}, 2000);
        //update book status api function here
  
        //Success / fail messages
        toast("Item Status Updated Successfully!")
        toast("Item Status Update Failed!")     
  }

    

    return (
        
    <div className=" space-y-5 grid">

        
        <Button disabled={isLoading } onClick={updateItem} className="shadow-md bg-emerald-700 text-white font-semibold rounded-full w-[350px]" variant="default">Update Item Status<Toaster></Toaster></Button>
        
        <div className="w-[350px]">
        <Select   onValueChange={setSelectedStatus}>
            <SelectTrigger disabled={ isLoading } className="text-center shadow-md bg-emerald-700 text-white font-semibold rounded-full">
            
            <SelectValue  placeholder=" Change Status..." />
            </SelectTrigger> 
              <SelectContent className="rounded-xl bg-emerald-700 text-white font-semibold">
                <SelectItem value="Available">Available</SelectItem>
                <SelectItem value="Lost">Lost</SelectItem>
                <SelectItem value="Damaged">Damaged</SelectItem>
                <SelectItem value="Missing">Missing</SelectItem>
                <SelectItem value="Discard/Weed">Discard/Weed</SelectItem>
                <SelectItem value="Checked Out">Checked Out</SelectItem>
              </SelectContent>
            </Select>
        </div>
    </div>
    )
  }