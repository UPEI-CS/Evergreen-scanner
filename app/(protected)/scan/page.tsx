"use client";

import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/navigation";
export default function ScanPage() {
  const [barcode, setBarcode] = useState(""); 
  const [error, setError] = useState(""); 
  const webcamRef = useRef(null); 
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    router.push(`/scan/${barcode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 text-center">Evergreen Book Scanner</h1>
      
      <div className="relative w-full max-w-md aspect-square bg-black rounded-lg overflow-hidden shadow-lg mb-4">
        <Webcam 
          ref={webcamRef} 
          className="w-full h-full"
          screenshotFormat="image/jpeg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-20 border-4 border-red-500 rounded-lg"></div>
        </div>
      </div>
      
      <p className="text-gray-600 my-2">Or</p>
      
      <form onSubmit={handleSearch} className="flex flex-col items-center w-full max-w-md">
        <input 
          type="text" 
          value={barcode} 
          onChange={(e) => setBarcode(e.target.value)} 
          placeholder="Enter Barcode"
          className="w-full p-2 border rounded-lg text-center mb-2"
        />
        
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        
        <button 
          type="submit" 
          className="bg-green-800 text-white px-6 py-2 rounded-lg shadow-md w-full max-w-xs"
        >
          Search
        </button>
      </form>
    </div>
  );
}
