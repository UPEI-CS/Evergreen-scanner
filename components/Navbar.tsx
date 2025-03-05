// components/Navbar.js

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, ScanBarcodeIcon, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter(); // Initialize useRouter

  const handleScanIconClick = () => {
    router.push("/"); // Navigate to the main page
  };

  return (
    <header className="bg-white dark:bg-slate-950 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ScanBarcodeIcon
          className="h-10 w-10 text-blue-700 cursor-pointer"
          onClick={handleScanIconClick}
        />
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
          Evergreen Book Scanner
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-8 w-8" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" /> Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
