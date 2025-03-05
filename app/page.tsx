"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Camera, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Quagga from "quagga";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export default function ScanPage() {
  const [barcode, setBarcode] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const [inputBarcode, setInputBarcode] = useState(""); // Temporary state for the input field
  const [error, setError] = useState("");
  const [cameraPermissionDenied, setCameraPermissionDenied] = useState(false);
  const webcamRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (barcode) {
      router.push(`/${barcode}`);
    }
  }, [barcode]);

  useEffect(() => {
    if (webcamRef.current) {
      checkCameraPermission();
    }
  }, []);

  const checkCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop()); // Stop the stream after checking
      startBarcodeScanner();
    } catch (err) {
      setCameraPermissionDenied(true);
      console.error("Camera permission denied:", err);
    }
  };

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
          top: "40%",
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
      if (data.codeResult && data.codeResult.code) {
        console.log("✅ Barcode detected:", data.codeResult.code);
        setBarcode(data.codeResult.code);
        Quagga.stop();
      }
    });
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevent form default submit behavior
    if (!inputBarcode) {
      setError("Please enter a barcode."); // Handle empty input
      return;
    }
    setBarcode(inputBarcode); // Set the barcode only when form is submitted
    setError(""); // Reset any previous errors

    try {
      console.log(`Fetching details for barcode: ${inputBarcode}`);
      router.push(`/${inputBarcode}`); // Navigate to book details page or wherever
    } catch (err) {
      setError("Failed to fetch book details.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <header className="bg-white dark:bg-slate-950 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">
            Evergreen Book Scanner
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        {cameraPermissionDenied ? (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md mb-4">
            <p className="text-center">
              Please enable camera access to use the barcode scanner.
            </p>
          </div>
        ) : (
          <Card className="w-full max-w-md mx-auto mb-6">
            <CardContent className="p-0 relative overflow-hidden rounded-lg aspect-[4/3]">
              <Webcam
                ref={webcamRef}
                className="w-full h-full"
                screenshotFormat="image/jpeg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-16 border-4 border-red-500 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        )}

        <p className="text-center text-gray-600 dark:text-slate-400 my-2">Or</p>

        <form
          onSubmit={handleSearchSubmit}
          className="w-full max-w-md mx-auto flex flex-col items-center mb-6"
        >
          <input
            type="text"
            value={inputBarcode}
            onChange={(e) => setInputBarcode(e.target.value)}
            placeholder="Enter Barcode"
            className="w-full p-2 border rounded-lg text-center mb-2"
          />
          {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
          <Button
            type="submit"
            className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <Camera className="mr-2 h-5 w-5" />
            Search
          </Button>
        </form>

        {bookDetails && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-lg font-bold">{bookDetails.title}</h2>
            <p className="text-sm text-gray-600">
              <strong>Barcode:</strong> {bookDetails.barcode}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Call Number:</strong> {bookDetails.callnumber}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {bookDetails.location}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Status:</strong> {bookDetails.status}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
