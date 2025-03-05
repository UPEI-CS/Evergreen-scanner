"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
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
  const webcamRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (barcode) {
      router.push(`/${barcode}`);
    }
  }, [barcode]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(() => startBarcodeScanner())
      .catch(() =>
        setCameraError("Camera access denied. Please allow camera permissions.")
      );
  }, []);

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

    Quagga.onDetected((data) => {
      if (data.codeResult?.code) {
        setBarcode(data.codeResult.code);
        Quagga.stop();
      }
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!inputBarcode) {
      setError("Please enter a barcode.");
      return;
    }
    setBarcode(inputBarcode);
    router.push(`/${inputBarcode}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Profile & Settings Dropdown */}
      <header className="bg-white dark:bg-slate-950 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700 dark:text-blue-400">
            Evergreen Book Scanner
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" /> Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col items-center">
        <Card className="w-full max-w-md mx-auto mb-6">
          <CardContent className="p-0 relative overflow-hidden rounded-lg aspect-[4/3]">
            {cameraError ? (
              <div className="w-full h-full flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                {cameraError}
              </div>
            ) : (
              <Webcam ref={webcamRef} className="w-full h-full" />
            )}
          </CardContent>
        </Card>

        <p className="text-gray-600 dark:text-gray-300 my-2">Or</p>

        {/* Barcode Input Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col items-center w-full max-w-md"
        >
          <input
            type="text"
            value={inputBarcode}
            onChange={(e) => setInputBarcode(e.target.value)}
            placeholder="Enter Barcode"
            className="w-full p-2 border rounded-lg text-center mb-2 dark:bg-gray-800 dark:text-white"
          />
          {error && (
            <p className="text-red-600 dark:text-red-400 text-sm mb-2">
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Search
          </Button>
        </form>
      </main>
    </div>
  );
}
