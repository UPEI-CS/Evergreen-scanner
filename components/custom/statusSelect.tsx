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

  export default function statusSelect({ bookinfo }: { bookinfo: any }) {

    const [selectedStatus, setSelectedStatus] = useState(bookinfo.status)

    const [isLoading, setIsLoading] = React.useState(false)


    const updateBook = () => {
        
        setIsLoading(true)
        //fake loading time
        setTimeout(() => {setIsLoading(false)}, 2000);
        //update book status api function here
  
        //Success / fail messages
        toast("Book Status Updated Successfully!")
        toast("Book Status Update Failed!")     
  }

    

    return (
        
    <div>

        <div className="py-2 ">
            <Button disabled={isLoading || bookinfo.error =="Book not found" } onClick={updateBook} className="w-[200px] bg-green-200" variant="outline">Update Book Status<Toaster></Toaster></Button>
        </div>
        
        <Select onValueChange={setSelectedStatus}>
            <h1>New Status: {selectedStatus}</h1>
            <SelectTrigger disabled={ isLoading || bookinfo.error =="Book not found" } className="w-[200px] justify-center bg-green-200">
            <SelectValue placeholder=" Change Status..." />
            </SelectTrigger> 
              <SelectContent>
                <SelectItem value="Available">Available</SelectItem>
                <SelectItem value="Lost">Lost</SelectItem>
                <SelectItem value="Damaged">Damaged</SelectItem>
                <SelectItem value="Missing">Missing</SelectItem>
                <SelectItem value="Discard/Weed">Discard/Weed</SelectItem>
                <SelectItem value="Checked Out">Checked Out</SelectItem>
              </SelectContent>
            </Select>
    </div>
    )
  }