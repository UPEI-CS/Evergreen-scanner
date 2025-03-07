"use client";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { useState } from "react";
import { toast } from "sonner";

export default function StatusSelect({
  status,
  disabled = false,
}: {
  status: string;
  disabled?: boolean;
}) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [isLoading, setIsLoading] = React.useState(false);

  const updateItem = () => {
    setIsLoading(true);
    //fake loading time for now
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    toast.success(`Status updated to ${value}`);
  };

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "Available":
        return "success";
    }
  };

  return (
    <Select
      onValueChange={handleStatusChange}
      disabled={disabled || isLoading}
      value={selectedStatus}
    >
      <SelectTrigger className="focus:ring-0">
        <SelectValue>{selectedStatus}</SelectValue>
      </SelectTrigger>
      <SelectContent className="rounded-xl bg-white text-blue-600 font-semibold">
        <SelectItem value="Available">
          <div className="flex items-center gap-2">
            <Badge variant="success" className="h-3 w-3"></Badge>
            <div>Available</div>
          </div>
        </SelectItem>
        <SelectItem value="Checked Out">
          <div className="flex items-center gap-2">
            <Badge variant="checkedout" className="h-3 w-3"></Badge>
            <div>Checked Out</div>
          </div>
        </SelectItem>
        <SelectItem value="Discard/Weed">
          <div className="flex items-center gap-2">
            <Badge variant="discard" className="h-3 w-3"></Badge>
            <div>Discard/Weed</div>
          </div>
        </SelectItem>
        <SelectItem value="Missing">
          <div className="flex items-center gap-2">
            <Badge variant="missing" className="h-3 w-3"></Badge>
            <div>Missing</div>
          </div>
        </SelectItem>
        <SelectItem value="Damaged">
          <div className="flex items-center gap-2">
            <Badge variant="damaged" className="h-3 w-3"></Badge>
            <div>Damaged</div>
          </div>
        </SelectItem>
        <SelectItem value="Lost">
          <div className="flex items-center gap-2">
            <Badge variant="lost" className="h-3 w-3"></Badge>
            <div>Lost</div>
          </div>
        </SelectItem>
        <SelectItem value="Unknown">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="h-3 w-3 "></Badge>
            <div>Unknown</div>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
