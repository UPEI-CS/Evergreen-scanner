import { HttpTranslator } from "@/lib/eg-client/src/adapters/http-translator";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        const cookieStore = await cookies();
        const authToken = cookieStore.get("EG_AUTH_TOKEN")?.value;
        const egServer = cookieStore.get("EG_SERVER")?.value;
        if (!authToken || !egServer) {
          redirect("/login");
        }
        const client = new HttpTranslator({
          baseUrl: egServer,
        });
        cookieStore.delete("EG_AUTH_TOKEN");
        authToken && (await client.auth.session.delete({ authToken }));
        redirect("/login");
      }}
    >
      <Button variant="ghost" className="w-full justify-start" type="submit">
        <LogOut className="mr-2 h-4 w-4" /> Log Out
      </Button>
    </form>
  );
}
