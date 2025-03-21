import BarcodeScanner from "@/components/custom/barcode-scanner";

export default function ScanPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex items-center justify-center w-full max-w-md">
        <BarcodeScanner/>
      </div>
    </div>
  );
}
