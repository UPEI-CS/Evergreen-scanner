"use client";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import * as React from "react";
import { useState } from "react";
import { toast } from "sonner";

export default function StatusSelect({ status }: { status: string }) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [isLoading, setIsLoading] = React.useState(false);

  const updateItem = () => {
    setIsLoading(true);
    //fake loading time for now
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    //update book status api function here
  };

  return (
    <div className="text-white space-y-5 grid">
      <div className="w-full flex items-center space-x-2">
        <label className="text-sm text-blue-600 dark:text-white font-semibold">
          Change Status:
        </label>
        <Select onValueChange={setSelectedStatus}>
          <SelectTrigger
            disabled={isLoading}
            className="flex-1 font-semibold text-blue-600 bg-white-100 border border-blue-600"
          >
            <SelectValue placeholder=" Select Status" />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-white text-blue-600 font-semibold">
            <SelectItem value="Available">
              <Badge variant="success">Available</Badge>
            </SelectItem>
            <SelectItem value="Checked Out">
              <Badge variant="checkedout">Checked Out</Badge>
            </SelectItem>
            <SelectItem value="Discard/Weed">
              <Badge variant="discard">Discard/Weed</Badge>{" "}
              {/* Using outline variant */}
            </SelectItem>
            <SelectItem value="Missing">
              <Badge variant="missing">Missing</Badge>{" "}
              {/* Using outline variant */}
            </SelectItem>
            <SelectItem value="Damaged">
              <Badge variant="damaged">Damaged</Badge>
            </SelectItem>
            <SelectItem value="Lost">
              <Badge variant="lost">Lost</Badge>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
