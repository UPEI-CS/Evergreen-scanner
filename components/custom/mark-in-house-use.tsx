"use client"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { useEffect } from "react"
import { toast } from "sonner"

export default function markInHouseUse({ barcode }: { barcode: string }) {
  return (
        
    <div className=" space-y-5 grid">
      <Button className="shadow-md bg-emerald-700 text-white font-semibold rounded-full w-[350px]" variant="default">Mark In-House Use<Toaster></Toaster></Button>
    </div>
    )
  }