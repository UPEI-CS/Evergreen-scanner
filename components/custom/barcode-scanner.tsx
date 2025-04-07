"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Quagga from '@ericblade/quagga2'
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, SendHorizonal , Camera, CameraIcon } from "lucide-react";
import { useSettings } from "@/hooks/use-settings";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function BarcodeScannerCard({ onClose }: { onClose: () => void }) {
  const [isDected, setIsDetected] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState("");
  const router = useRouter();
  const scannerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async () => {
    setPending(true);
    if (result) {
      router.push(`/${result}`);
    }
    setIsDetected(false);
    setPending(false);
  }
  useEffect(() => {
    if (!scannerRef.current) return;

    const timeoutId = setTimeout(() => {
      try {
        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              target: scannerRef.current as HTMLElement,
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
            setTimeout(() => {
              Quagga.start();
            }, 1000);
          }
        );

        Quagga.onDetected((result: any) => {
          if (result.codeResult?.code) {
            setIsDetected(true);
            setResult(result.codeResult.code);
            Quagga.stop();
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
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-0 relative overflow-hidden rounded-lg aspect-[4/3]">
        <Button
          size="sm"
          className="absolute top-2 right-2 z-10"
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
            {isDected && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-100 bg-primary-foreground">
                <p className=" mt-2">Processed barcode: {result}</p>
                <Button disabled={pending} onClick={handleSubmit} className="mt-4 w-48">
                  {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit"}
                </Button>
               

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

  const handleManualEntry = async(e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    if (inputBarcode.trim()) {
      router.push(`/${inputBarcode}`);
    }
    setPending(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleManualEntry(e);
    }
  }
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
                onKeyDown={onKeyDown}
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
              {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendHorizonal className="w-4 h-4" />}
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
