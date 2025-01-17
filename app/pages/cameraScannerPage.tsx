"use client";

import BarcodeScanner from "../components/barcodeScanner";
import { useState } from "react";

export default function CameraScannerPage() {
  const [isbn, setIsbn] = useState(""); // Shared state for the ISBN

  return (
    <div className="flex flex-col items-center pt-10">
      <p className="font-bold text-green-800 text-lg">Evergreen Book Scanner</p>
      {/* Pass setIsbn to the BarcodeScanner */}
      <BarcodeScanner setIsbn={setIsbn} />
      <p className="font-bold text-xl">Or</p>
      <div className="flex justify-center flex-row items-center">
        <form action={""} className="p-5  rounded-lg bg-white">
          <input
            name="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)} // Allow manual input as well
            className="w-full px-4 py-2 border shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter ISBN"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-green-700 py-2 mt-3 w-full text-white font-bold rounded-md hover:bg-green-800"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
