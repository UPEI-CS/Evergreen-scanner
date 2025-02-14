

  export default function statusUpdateTable({ iteminfo }: { iteminfo: { title: string, barcode: string, status: string,  } }) {

    return (
        
    <div className=" space-y-5 grid">
      <table className="rounded-xl table-fixed text-left shadow-lg">
            <tbody className="divide-y divide-gray-100 ">

              <tr className="bg-white">
                <th scope="row" className="px-6 py-3">
                  Title :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.title || "N/A"}
                </th>
              </tr>

              <tr className="bg-gray-50">
                <th scope="row" className="px-6 py-3">
                  Barcode :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.barcode || "N/A"}
                </th>
              </tr>

              <tr className="bg-white">
                <th scope="row" className="px-6 py-3">
                  Status :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.status || "N/A"}
                </th>
              </tr>

            </tbody>
          </table>
    </div>
    )
  }