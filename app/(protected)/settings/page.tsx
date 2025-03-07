"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [scanMode, setScanMode] = useState("Auto");
  const [soundEffects, setSoundEffects] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      {/* User Information */}
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <p className="text-gray-500">Your account details</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
          <p>
            <strong>Role:</strong> Librarian
          </p>
          <p>
            <strong>Library:</strong> Central Library
          </p>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <p className="text-gray-500">Customize how the app looks</p>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <span>Dark Mode</span>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </CardContent>
      </Card>

      {/* Scanner Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Scanner Settings</CardTitle>
          <p className="text-gray-500">Configure how the scanner works</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Scan Mode</span>
            <Select onValueChange={setScanMode} value={scanMode}>
              <SelectTrigger className="w-32">
                <SelectValue>{scanMode}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Auto">Auto</SelectItem>
                <SelectItem value="Manual">Manual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <span>Sound Effects</span>
            <Switch checked={soundEffects} onCheckedChange={setSoundEffects} />
          </div>
          <div className="flex justify-between items-center">
            <span>Vibration</span>
            <Switch checked={vibration} onCheckedChange={setVibration} />
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Library Book Scanner</strong>
          </p>
          <p>Version 1.0.0</p>
          <p className="text-gray-500">
            A tool for library staff to scan, track, and reshelve books
            efficiently.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
