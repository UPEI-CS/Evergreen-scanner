"use client";

import React, { useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

export default function ScanPage() {
  const [barcode, setBarcode] = useState(""); // State to store the barcode input
  const [error, setError] = useState(""); // State to store validation error
  const webcamRef = useRef(null); // Reference to the webcam component

  // Function to validate barcode input
  const validateBarcode = (code) => {
    const barcodeRegex = /^[0-9]{10,13}$/; // Validates 10 or 13 digit numeric barcode
    return barcodeRegex.test(code);
  };

  // Function to handle barcode search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!validateBarcode(barcode)) {
      setError("Invalid barcode. Please enter a 10 or 13-digit numeric barcode.");
      return;
    }
    setError("");
    alert(`Searching for barcode: ${barcode}`);
    // TODO: Implement API call to search for book details
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 text-center">Evergreen Book Scanner</h1>
      
      {/* Camera View with Barcode Guide Box */}
      <div className="relative w-full max-w-md aspect-square bg-black rounded-lg overflow-hidden shadow-lg mb-4">
        <Webcam 
          ref={webcamRef} 
          className="w-full h-full"
          screenshotFormat="image/jpeg"
        />
        {/* Barcode Guide Box */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-20 border-4 border-red-500 rounded-lg"></div>
        </div>
      </div>
      
      {/* Separator */}
      <p className="text-gray-600 my-2">Or</p>
      
      {/* Barcode Input Form */}
      <form onSubmit={handleSearch} className="flex flex-col items-center w-full max-w-md">
        <input 
          type="text" 
          value={barcode} 
          onChange={(e) => setBarcode(e.target.value)} // Updates barcode state on input change
          placeholder="Enter Barcode"
          className="w-full p-2 border rounded-lg text-center mb-2"
        />
        
        {/* Error Message */}
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        
        {/* Search Button */}
        <button 
          type="submit" // Allows Enter key submission
          className="bg-green-800 text-white px-6 py-2 rounded-lg shadow-md w-full max-w-xs"
        >
          Search
        </button>
      </form>
    </div>
  );
}
