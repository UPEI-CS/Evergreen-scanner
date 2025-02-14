import { NextResponse } from "next/server";
import { HttpTranslator } from "@/lib/eg-client/src/gateways/http-translator";
export async function POST(request: Request) {
  const { username, password } = await request.json();
  const baseUrl = process.env.EG_BASE_URL;
  if (!baseUrl) {
    return NextResponse.json({
      message: "could not find EG_BASE_URL",
      status: 500,
    });
  }
  const httpTranslator = new HttpTranslator({
    baseUrl,
  });
  const [result] = await httpTranslator.auth.login({
    username,
    password,
    type: "staff",
  });
  try {
    const resultStatus = result.__p.payload.__p.status;
    if (resultStatus !== "OK") {
      throw new Error(resultStatus);
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error: " + error,
      status: 500,
    });
  }
  const payload = result.__p.payload.__p.content.payload;
  const response = NextResponse.json({
    message: "success",
    status: 200,
  });
  response.cookies.set("EG_AUTH_TOKEN", payload.authtoken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: payload.authtime,
  });
  response.cookies.set("EG_AUTH_TIME", payload.authtime.toString(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: payload.authtime,
  });
  return response;
}
