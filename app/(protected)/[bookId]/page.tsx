import {GET} from "@/app/api/[barcode]/route"
import { Button } from "@/components/ui/button"
import StatusSelect from "@/components/custom/statusSelect";
import Link from "next/link";

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const bookId = (await params).bookId;
  //Only work with localhost 3000 currently
  const bookData = await GET(new Request("http://localhost:3000/"),{ params: { barcode: bookId } });
  const bookInfo = await bookData.json();
  
  return (
    <main>
      
      <div className = "justify-center grid place-items-center" >
      <table className="bg-gray-100 rounded-lg">
            <tbody>
              <tr>
                <th scope="row" className="px-6 py-3">
                  Title :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.title || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                  LC Call Number :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.lcCallNumber || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                  Barcode :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.barcode || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                  Shelving Location :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.shelvingLocation || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                  Circulation Modifier :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.circulationModifier || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                  Status :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.status || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                  Location :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.location || "N/A"}
                </th>
              </tr>
              <tr>
                <th scope="row" className="px-6 py-3">
                   :
                </th>
                <th scope="row" className="px-6 py-3">
                  {bookInfo.error || "Book found"}
                </th>
              </tr>
            </tbody>
          </table>
          
          <div className=" py-2 ">
            <Link href="/scan"><Button className="w-[200px] bg-green-200" variant="outline">Scan New Barcode</Button></Link>
          </div>

          <div className="px-20 py-2">
          <StatusSelect bookinfo={bookInfo}></StatusSelect>
          </div>
        </div>
    </main>
  );
} 

