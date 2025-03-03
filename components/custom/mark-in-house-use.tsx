"use client"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { useEffect } from "react"
import { toast } from "sonner"

export default function markInHouseUse({ barcode }: { barcode: string }) {
  const markUse = () => 
  
    toast("Mark In-house Use Successfull!")
    toast("Mark In-house Use Failed!")     
  return (
        
    <div className=" space-y-5 grid">
      <Button  onClick={markUse} className="shadow-md bg-emerald-700 text-white font-semibold rounded-full w-[350px]" variant="default">Mark In-House Use<Toaster></Toaster></Button>
    </div>
    )
  }