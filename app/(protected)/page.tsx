"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import Quagga from "quagga";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function ScanPage() {
  const [barcode, setBarcode] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const [inputBarcode, setInputBarcode] = useState("");
  const [error, setError] = useState("");
  const [cameraError, setCameraError] = useState("");
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null);
  const router = useRouter();

  // Navigate to book details page on barcode scan
  useEffect(() => {
    if (barcode) {
      setLoading(true);
      router.push(`/${barcode}`);
    }
  }, [barcode, router]);

  // Request camera access and start barcode scanner
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(() => startBarcodeScanner())
      .catch(() =>
        setCameraError("Camera access denied. Please allow camera permissions.")
      );
  });

  // Initialize and start Quagga barcode scanner
  const startBarcodeScanner = () => {
    if (!webcamRef.current) return;
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
        locate: true,
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data: any) => {
      if (data.codeResult?.code) {
        setBarcode(data.codeResult.code);
        setLoading(true);
        Quagga.stop();
        router.push(`/${data.codeResult.code}`);
      }
    });
  };

  // Handle manual barcode input submission
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputBarcode) {
      setError("Please enter a barcode.");
      return;
    }
    setLoading(true);
    setBarcode(inputBarcode);
    router.push(`/${inputBarcode}`);
  };

  return (
    // Main container
    <div className="flex flex-col h-full">

      <div className="flex-1 flex flex-col items-center justify-center py-6 px-4">
        {/* Webcam card */}
        <Card className="w-full max-w-md mx-auto mb-6">
          <CardContent className="p-0 relative overflow-hidden rounded-lg aspect-[4/3]">
            {cameraError ? (
              // Camera error message
              <div className="w-full h-full flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                {cameraError}
              </div>
            ) : (
              // Webcam feed and loading indicator
              <div className="relative w-full h-full">
                <Webcam ref={webcamRef} className="w-full h-full" />
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-gray-800">
                    <Loader2 className="animate-spin h-16 w-16 text-white" />
                    <p className="text-white mt-2">Processing...</p>{" "}
                    {/* Added "Processing..." text */}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
        {/* Separator */}
        <p className="text-gray-600 dark:text-gray-300 my-2 font-semibold">
          Or
        </p>
        {/* Manual barcode input form */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col items-center w-full max-w-md"
        >
          <Input
            type="text"
            value={inputBarcode}
            onChange={(e) => setInputBarcode(e.target.value)}
            placeholder="Enter Barcode"
            className="w-full p-2 border rounded-lg text-center mb-2 dark:bg-gray-800 dark:text-white font-semibold"
          />
          {/* Error message */}
          {error && (
            <p className="text-red-600 dark:text-red-400 text-sm mb-2">
              {error}
            </p>
          )}
          {/* Submit button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 font-semibold"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Search
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
