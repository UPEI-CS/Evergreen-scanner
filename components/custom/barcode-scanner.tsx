"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Quagga from "quagga";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, SendHorizonal , Search, Camera, CameraIcon, Loader } from "lucide-react";
import { useSettings } from "@/hooks/use-settings";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function BarcodeScannerCard({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const router = useRouter();
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    const timeoutId = setTimeout(() => {
      try {
        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              target: scannerRef.current,
              constraints: {
                facingMode: "environment",
              },
            },
            decoder: {
              readers: ["code_39_reader", "i2of5_reader", "codabar_reader"],
            },
          },
          function (err: any) {
            if (err) {
              console.error("Quagga initialization error:", err);
              setCameraError("Failed to initialize barcode scanner");
              return;
            }
            console.log("Quagga initialized successfully");
            Quagga.start();
          }
        );

        Quagga.onDetected((result: any) => {
          if (result.codeResult?.code) {
            setLoading(true);
            Quagga.stop();
            router.push(`/${result.codeResult.code}`);
          }
        });
      } catch (error) {
        console.error("Error setting up Quagga:", error);
        setCameraError("Failed to set up barcode scanner");
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      try {
        Quagga.stop();
      } catch (e) {
        console.log("Error stopping Quagga:", e);
      }
    };
  }, [router]);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-0 relative overflow-hidden rounded-lg aspect-[4/3]">
        <Button
          variant="outline"
          size="sm"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90"
          onClick={onClose}
        >
          Close
        </Button>

        {cameraError ? (
          <div className="w-full h-full flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
            {cameraError}
          </div>
        ) : (
          <div className="relative w-full h-full">
            <div ref={scannerRef} className="w-full h-full"></div>
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-gray-800">
                <Loader2 className="animate-spin h-16 w-16 text-white" />
                <p className="text-white mt-2">Processing...</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function BarcodeScanner() {
  const { enableManualItemEntry, loading } = useSettings();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [inputBarcode, setInputBarcode] = useState("");

  const handleManualEntry = (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    if (inputBarcode.trim()) {
      router.push(`/${inputBarcode}`);
    }
    setPending(false);
  };
  if (loading) {
    return <div className="h-10 w-full animate-pulse bg-gray-200 dark:bg-gray-800 rounded-md" />;
  }
  if (enableManualItemEntry) {
    return (
      <div className="w-full">
        {open ? (
          <BarcodeScannerCard onClose={() => setOpen(false)} />
        ) : (
          <form onSubmit={handleManualEntry} className="flex items-center justify-center gap-2 w-full">
            <div className="relative flex-1">
              <Input
                className="w-full pr-10 border border-gray-700 "
                placeholder="Barcode"
                value={inputBarcode}
                onChange={(e) => setInputBarcode(e.target.value)}
              />
              <Button
                type="button"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setOpen(true)}
              >
                <Camera className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
            <Button type="submit" size="sm" disabled={pending}> 
              {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendHorizonal className="w-4 h-4 text-muted-foreground" />}
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {open ? (
        <BarcodeScannerCard onClose={() => setOpen(false)} />
      ) : (
        <Button onClick={() => setOpen(true)} className="w-full">
          <CameraIcon className="w-4 h-4 mr-2" />
          Scan Barcode
        </Button>
      )}
    </div>
  );
}
