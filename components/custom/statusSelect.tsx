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
    // Fake loading time for now
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
      case "Checked Out":
        return "checkedout";
      case "Discard/Weed":
        return "discard";
      case "Missing":
        return "missing";
      case "Damaged":
        return "damaged";
      case "Lost":
        return "lost";
      default:
        return "default";
    }
  };

  return (
    <Select
      onValueChange={handleStatusChange}
      disabled={disabled || isLoading}
      value={selectedStatus}
    >
      <SelectTrigger className="focus:ring-0 flex items-center gap-2">
        {/* Custom SelectValue with Badge */}
        <Badge variant={getBadgeVariant(selectedStatus)} className="h-3 w-3" />
        <SelectValue>{selectedStatus}</SelectValue>
      </SelectTrigger>
      <SelectContent className="rounded-xl bg-white">
        <SelectItem value="Available">
          <div className="flex items-center gap-2">
            <Badge variant="success" className="h-3 w-3" />
            <div>Available</div>
          </div>
        </SelectItem>
        <SelectItem value="Checked Out">
          <div className="flex items-center gap-2">
            <Badge variant="checkedout" className="h-3 w-3" />
            <div>Checked Out</div>
          </div>
        </SelectItem>
        <SelectItem value="Discard/Weed">
          <div className="flex items-center gap-2">
            <Badge variant="discard" className="h-3 w-3" />
            <div>Discard/Weed</div>
          </div>
        </SelectItem>
        <SelectItem value="Missing">
          <div className="flex items-center gap-2">
            <Badge variant="missing" className="h-3 w-3" />
            <div>Missing</div>
          </div>
        </SelectItem>
        <SelectItem value="Damaged">
          <div className="flex items-center gap-2">
            <Badge variant="damaged" className="h-3 w-3" />
            <div>Damaged</div>
          </div>
        </SelectItem>
        <SelectItem value="Lost">
          <div className="flex items-center gap-2">
            <Badge variant="lost" className="h-3 w-3" />
            <div>Lost</div>
          </div>
        </SelectItem>
        <SelectItem value="Unknown">
          <div className="flex items-center gap-2">
            <Badge variant="default" className="h-3 w-3" />
            <div>Unknown</div>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
