"use client";

import Link from "next/link";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import Navbar from "../Navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import StatusSelect from "./statusSelect";

export interface ItemInfo {
  title?: string | null;
  lcCallNumber?: string | null;
  shelvingLocation?: string | null;
  status?: string | null;
  barcode?: string | null;
}

export default function ItemDisplay({ iteminfo }: { iteminfo: ItemInfo }) {
  const [showConfirmation, setShowConfirmation] = useState(true);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <Navbar />
      <div className="flex flex-col items-center jutify-center flex-1">
        <Card className="w-full max-w-md">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <Badge
                variant={
                  iteminfo.status === "Available" ? "success" : "secondary"
                }
                className="mb-2"
              >
                {iteminfo.status || "Available"}
              </Badge>
              {/* Empty div to maintain spacing */}
              <div></div>
            </div>
            <CardTitle className="text-xl font-bold">
              {iteminfo.title}
            </CardTitle>
            {/* Empty div to maintain spacing */}
            <div></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 py-2">
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Call Number:
                </div>
                <div className="font-">{iteminfo.lcCallNumber}</div>
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Barcode:
                </div>
                <div className="font-medium">{iteminfo.barcode}</div>
              </div>
            </div>
            <Separator />
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-center">
              <MdLocationOn className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
              <div>
                <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                  Shelf Location
                </div>
                <div className="text-blue-800 dark:text-blue-200 font-bold">
                  {iteminfo.shelvingLocation}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full px-4">
              {showConfirmation ? (
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 font-semibold"
                  onClick={() => setShowConfirmation(false)}
                >
                  Confirm Item
                </Button>
              ) : (
                <>
                  <StatusSelect status={iteminfo.status || ""} />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 font-semibold">
                    Record In-House Use
                  </Button>
                </>
              )}
              <Button
                className="w-full text-blue-600 bg-white border border-blue-600 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-semibold"
                variant="default"
                asChild
              >
                <Link href="/">Scan Another Book</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
