// components/Navbar.js

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarcodeIcon,
  LogOut,
  ScanBarcodeIcon,
  Settings,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleScanIconClick = () => {
    router.push("/");
  };

  return (
    <header className="bg-white dark:bg-slate-950 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex rounded-full p-0">
          <ScanBarcodeIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 flex-grow text-center cursor-pointer">
          Evergreen Book Scanner
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-10 w-10" /> {/* Increased size */}
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
