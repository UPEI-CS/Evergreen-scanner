import LoginForm from "@/components/custom/login-form";
import { Card, CardContent } from "@/components/ui/card";
import EgServerInput from "@/components/custom/eg-server-input";
import { cookies } from "next/headers";
export default async function Login() {
  const cookieStore = await cookies();
  const server = cookieStore.get("EG_SERVER");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4 sm:max-w-lg">
        <Card className="w-full">
          <CardContent className="py-4 space-y-2">
            <EgServerInput server={server?.value} /> 
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
