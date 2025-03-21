"use client";

import * as React from "react";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MANUAL_ITEM_STATUSES } from "@/lib/eg-client/src/types";
import { useSettings } from "@/hooks/use-settings";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";

// Shared settings content component that can be used in both Dialog and Drawer
function SettingsContent() {
  const {
    enableManualItemEntry,
    setEnableManualItemEntry,
    recordInHouseUse,
    setRecordInHouseUse,
    updateInventoryDateTime,
    setUpdateInventoryDateTime,
    enableCheckIn,
    setEnableCheckIn,
    isStatusChangeEnabled,
    toggleStatusChange,
  } = useSettings();
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6 pl-2">
      <div className="space-y-4">
        <h3 className="font-semibold">Appearance</h3>
        <div className="flex items-center justify-between pl-2">
          <Label>{theme === "dark" ? "Dark mode" : "Light mode"}</Label>
          <Switch
            id="theme"
            checked={theme === "dark"}
            onCheckedChange={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">Scanning options</h3>
        <div className="flex items-center justify-between pl-2">
          <Label>Allow typing barcode</Label>
          <Switch
            id="manual-item-entry"
            checked={enableManualItemEntry}
            onCheckedChange={setEnableManualItemEntry}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Circulation options</h3>
        <div className="space-y-2 pl-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="in-house-use">Record In-House Use</Label>
            <Switch
              id="in-house-use"
              checked={recordInHouseUse}
              onCheckedChange={setRecordInHouseUse}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="check-in-item">Check in item</Label>
            <Switch
              id="check-in-item"
              checked={enableCheckIn}
              onCheckedChange={setEnableCheckIn}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="update-inventory">
                Update Inventory Date/Time
              </Label>
            </div>
            <Switch
              id="update-inventory"
              checked={updateInventoryDateTime}
              onCheckedChange={setUpdateInventoryDateTime}
            />
          </div>

          <div className="space-y-4">
            <Label>Allowed to change status to: </Label>
            <div className="grid grid-cols-2 gap-4 pl-2">
              {MANUAL_ITEM_STATUSES.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={isStatusChangeEnabled(status)}
                    onCheckedChange={() => toggleStatusChange(status)}
                  />
                  <Label htmlFor={`status-${status}`}>{status}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SettingsDialog() {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
        </DrawerTrigger>
        <DrawerContent className="pb-2">
          <DrawerHeader className="pb-2">
            <DrawerTitle className="text-2xl font-bold">Settings</DrawerTitle>
          </DrawerHeader>
          <div className="overflow-y-auto max-h-[70vh] px-4 pb-4">
            <SettingsContent />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-4 md:max-h-[600px] md:max-w-[900px] lg:max-w-[1000px]">
        <DialogTitle className="text-2xl font-bold">Settings</DialogTitle>
        <SettingsContent />
      </DialogContent>
    </Dialog>
  );
}
