import { NextResponse } from "next/server";
import { client } from "@/lib/eg-client";
export async function POST(request: Request) {
  const { username, password } = await request.json();
  const baseUrl = process.env.EG_BASE_URL;
  if (!baseUrl) {
    return NextResponse.json(
      { error: "could not find EG_BASE_URL" },
      { status: 500 }
    );
  }
  const { data, error } = await client.auth.login({
    username,
    password,
    type: "staff",
  });
  console.log(data, error);
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
  response.cookies.set("EG_AUTH_TIME", data.authtime.toString(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: data.authtime,
  });
  return response;
}
