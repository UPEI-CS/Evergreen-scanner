"use client";

import { useRouter } from "next/navigation";
import Quagga from "quagga";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function ScanPage() {
  const [barcode, setBarcode] = useState("");
  const [error, setError] = useState("");
  const webcamRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (webcamRef.current) {
      startBarcodeScanner();
    }
  }, []);

  const startBarcodeScanner = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: webcamRef.current.video,
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
        },
        decoder: {
          readers: ["ean_reader", "code_128_reader", "upc_reader"],
          multiple: false,
        },
        locator: {
          halfSample: false,
          patchSize: "medium",
        },
        locate: true,
        area: {
          // Define a smaller scanning area within the red box
          top: "40%", // Reduce scanning area to focus on the red box
          right: "20%",
          left: "20%",
          bottom: "60%",
        },
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      if (
        data.codeResult &&
        data.codeResult.code &&
        data.codeResult.decodedCodes.length > 5
      ) {
        console.log("Barcode detected:", data.codeResult.code);
        setBarcode(data.codeResult.code);
        Quagga.stop();
      }
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/${barcode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 text-center">
        Evergreen Book Scanner
      </h1>

      <div className="relative w-full max-w-sm aspect-[4/3] bg-black rounded-lg overflow-hidden shadow-lg mb-4">
        <Webcam
          ref={webcamRef}
          className="w-full h-full"
          screenshotFormat="image/jpeg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-16 border-4 border-red-500 rounded-lg"></div>
        </div>
      </div>

      <p className="text-gray-600 my-2">Or</p>

      <form
        onSubmit={handleSearch}
        className="flex flex-col items-center w-full max-w-md"
      >
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
