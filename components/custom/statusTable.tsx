

  export default function statusTable({ iteminfo }: { iteminfo: any }) {

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
                  LC Call Number :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.lcCallNumber || "N/A"}
                </th>
              </tr>

              <tr className="bg-white">
                <th scope="row" className="px-6 py-3">
                  Barcode :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.barcode || "N/A"}
                </th>
              </tr>

              <tr className="bg-gray-50">
                <th scope="row" className="px-6 py-3">
                  Shelving Location :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.shelvingLocation || "N/A"}
                </th>
              </tr>

              <tr className="bg-white">
                <th scope="row" className="px-6 py-3">
                  Circulation Modifier :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.circulationModifier || "N/A"}
                </th>
              </tr>

              <tr className="bg-gray-50">
                <th scope="row" className="px-6 py-3">
                  Status :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.status || "N/A"}
                </th>
              </tr>

              <tr className="bg-white">
                <th scope="row" className="px-6 py-3">
                  Location :
                </th>
                <th scope="row" className="px-6 py-3">
                  {iteminfo.location || "N/A"}
                </th>
              </tr>

            </tbody>
          </table>
    </div>
    )
  }