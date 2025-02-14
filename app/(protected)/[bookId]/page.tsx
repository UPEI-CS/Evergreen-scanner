import {GET} from "@/app/api/[barcode]/route"
import { Button } from "@/components/ui/button"
import StatusTable from "@/components/custom/statusTable";
import Link from "next/link";


export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const itemID = (await params).bookId;
  //Only work with localhost 3000 currently
  const itemData = await GET(new Request("http://localhost:3000/"),{ params: { barcode: itemID } });
  const itemInfo = await itemData.json();
  
  return (
    <main>
      
      <div className = "grid justify-center space-y-5">
      
      <StatusTable iteminfo={itemInfo}></StatusTable>
          
          <div className=" grid justify-center">
            <Link href="/scan"><Button className="w-[350px] shadow-md bg-emerald-700 text-white font-semibold rounded-full" variant="default">Scan New Barcode</Button></Link>
          </div>

          <div className=" grid justify-center">
            <Link href={{pathname: "/status",query: { title:itemInfo.title, barcode:itemInfo.barcode, status:itemInfo.status }}} ><Button className="w-[350px] shadow-md bg-emerald-700 text-white font-semibold rounded-full" variant="default">Confirm Item</Button></Link>
          </div>
          
        </div>
    </main>
  );
} 

