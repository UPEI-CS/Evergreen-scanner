"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Table, TableRow, TableBody, TableCell } from "../ui/table";
import { useState } from "react";
import StatusSelect from "@/components/custom/statusSelect";
export interface ItemInfo {
  title?: string | null;
  barcode?: string | null;
  lcCallNumber?: string | null;
  shelvingLocation?: string | null;
  circulationModifier?: string | null;
  status?: string | null;
}

const itemLabels: Record<keyof ItemInfo, string> = {
  title: "Title",
  lcCallNumber: "LC Call Number",
  barcode: "Barcode",
  shelvingLocation: "Shelving Location",
  circulationModifier: "Circulation Modifier",
  status: "Status",
} as const;

export default function ItemDisplay({ iteminfo }: { iteminfo: ItemInfo }) {
  const [displayState, setDisplayState] = useState<"item" | "status">("item");
  return (
    <div className="flex flex-col items-center gap-4">
      {displayState === "item" ? (
        <div className="rounded-md border">
          <Table>
            <TableBody>
              {(Object.entries(itemLabels) as [keyof ItemInfo, string][]).map(
                ([key, label], idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{label}:</TableCell>
                    <TableCell>{iteminfo[key]}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableBody>
              {(["title", "barcode", "status"] as const).map((key) => (
                <TableRow key={key}>
                  <TableCell className="font-medium">
                    {itemLabels[key]}:
                  </TableCell>
                  <TableCell>{iteminfo[key]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <div className="flex flex-col gap-2 w-full px-8">
        <Button
          className="shadow-md bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-full"
          variant="default"
          asChild
        >
          <Link href="/scan">Scan New Barcode</Link>
        </Button>
        {displayState === "item" ? (
          <Button
            className="shadow-md bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-full"
            onClick={() => setDisplayState("status")}
          >
            Confirm Item
          </Button>
        ) : (
          <>
            {/** TODO: make sure barcode and status are always defined */}
            <Button className="shadow-md bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-full">
              Mark In-House Use
            </Button>
            <StatusSelect status={iteminfo.status || ""} />
          </>
        )}
      </div>
    </div>
  );
}
