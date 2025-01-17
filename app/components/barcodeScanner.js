"use client";

import { useEffect, useRef } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";

/* Passing parameter "setISBN" */
const BarcodeScanner = ({ setIsbn }) => {
  /* 
  Allows us to capture and interact with video feed 
  */
  const videoRef = useRef(null);

  /* 
   Access and Capture and store scanned barcode with camera 
  */
  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    let selectedDeviceId;

    const startScanner = async () => {
      try {
        /**
         * Access Devices Camera
         */
        const devices = await codeReader.listVideoInputDevices();
        if (devices.length > 0) {
          selectedDeviceId = devices[0].deviceId;
          /**
           * Needs 3 parameters, [Device Being Used, A video reference, Variable to store scanned barcode]
           */
          codeReader.decodeFromVideoDevice(
            selectedDeviceId,
            videoRef.current,
            (result) => {
              if (result) setIsbn(result.getText()); // Pass scanned ISBN to parent
            }
          );
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    };

    /**
     * Gets called last once everything is initialized
     */
    startScanner();
    return () => codeReader.reset();
    /**
     * This is where ISBN actually gets updated and only runs when a change has occurred
     */
  }, [setIsbn]);

  return (
    <div>
      <video
        ref={videoRef}
        className="border-2 border-gray-300 rounded-lg mx-auto object-cover 
        w-[300px] h-[400px] 
        sm:w-[200px] sm:h-[300px] 
        md:w-[300px] md:h-[400px] 
        lg:w-[400px] lg:h-[500px]"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default BarcodeScanner;
