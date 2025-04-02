import { NextResponse, NextRequest } from "next/server";
import { HttpTranslator } from "@/lib/eg-client/src/adapters/http-translator";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const egServer = request.cookies.get("EG_SERVER");
  console.log("EG_SERVER", egServer);
  if (!egServer) {
    return NextResponse.json({ error: "Evergreen server is not set" }, { status: 400 });
  }
  const client = new HttpTranslator({
    baseUrl: egServer.value,
  });
  const { data, error } = await client.auth.login({
    username,
    password,
    type: "staff",
  });

  if (error || !data) {
    return NextResponse.json({ error: error }, { status: 401 });
  }

  const response = NextResponse.json({
    message: "success",
    status: 200,
  });
  response.cookies.set("EG_AUTH_TOKEN", data.authtoken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: data.authtime,
  });
  return response;
}
