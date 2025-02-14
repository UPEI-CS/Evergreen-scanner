import StatusSelect from "@/components/custom/statusSelect";
import StatusUpdateTable from "@/components/custom/statusUpdateTable";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import React from "react";
import MarkInHouseUse from "@/components/custom/markInHouseUse";

export default async function StatusPage({ searchParams }: { searchParams: { title: string, barcode: string, status: string,  } }){
    const title = (await searchParams).title
    const barcode = (await searchParams).barcode
    const status = (await searchParams).status
    
    return (

      <main>
        <div className="grid justify-center space-y-5">
        <StatusUpdateTable iteminfo={{title: title, barcode: barcode, status: status}}></StatusUpdateTable>
        <Link href="/scan"><Button className="w-[350px] shadow-md bg-emerald-700 text-white font-semibold rounded-full" variant="default">Scan New Barcode</Button></Link>
        <MarkInHouseUse barcode={barcode}></MarkInHouseUse>
        <StatusSelect status={status}></StatusSelect>
        </div>
      </main>

    )

  }