import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, ScanBarcodeIcon, Settings, User } from "lucide-react";
import Link from "next/link";
import { SettingsDialog } from "./custom/settings";
import { client } from "@/lib/eg-client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "./custom/logout-button";
import { Separator } from "@/components/ui/separator";
export default async function Navbar() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
  if (!authToken) {
    redirect("/login");
  }
  const { data, error } = await client.auth.session.retrieve({
    authToken: authToken,
    returnTime: true,
  });
  if (error || !data) {
    redirect("/login");
  }
  const name = data.userobj.first_given_name() || "";
  const lastname = data.userobj.family_name() || "";
  const email = data.userobj.email() || "";
  return (
    <header className=" shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-10 w-10" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-fit p-2">
            <div className="grid gap-2">
              <div className="flex items-center gap-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col px-2">
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-sm font-medium">{lastname}</p>
                  <p className="text-xs text-muted-foreground">{email}</p>
                </div>
              </div>
                <Separator orientation="horizontal" className="w-full" />
              <SettingsDialog />
              <LogoutButton />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
