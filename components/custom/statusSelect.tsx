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

export default function StatusSelect({ status, disabled = false }: { status: string, disabled?: boolean }) {
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
  }

  return (
    <Select onValueChange={handleStatusChange} disabled={disabled || isLoading} value={selectedStatus}>
      <SelectTrigger className ="focus:ring-0">
        <SelectValue >{selectedStatus}</SelectValue>
      </SelectTrigger>
      <SelectContent className="rounded-xl bg-white text-blue-600 font-semibold">
        <SelectItem value="Available">
          <Badge variant="success">Available</Badge>
        </SelectItem>
        <SelectItem value="Checked Out">
          <Badge variant="checkedout">Checked Out</Badge>
        </SelectItem>
        <SelectItem value="Discard/Weed">
          <Badge variant="discard">Discard/Weed</Badge>
        </SelectItem>
        <SelectItem value="Missing">
          <Badge variant="missing">Missing</Badge>
        </SelectItem>
        <SelectItem value="Damaged">
          <Badge variant="damaged">Damaged</Badge>
        </SelectItem>
        <SelectItem value="Lost">
          <Badge variant="lost">Lost</Badge>
        </SelectItem>
        <SelectItem value="Unknown">
          <Badge variant="default">Unknown</Badge>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
