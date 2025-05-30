import { NextResponse } from "next/server";
import { HttpTranslator } from "@/lib/eg-client/src/adapters/http-translator";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("EG_AUTH_TOKEN")?.value;
  const egServer = request.cookies.get("EG_SERVER")?.value;
  const { pathname } = request.nextUrl;

  if ((!authToken || !egServer) && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const client = new HttpTranslator({
    baseUrl: egServer,
  });

  if (authToken && pathname === "/login") {


    const { data, error } = await client.auth.session.resetTimeout({ authToken });

    if (error || !data) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("EG_AUTH_TOKEN");
      return response;
    }
    const response = NextResponse.redirect(new URL("/", request.url));
    
    if (data) {
      response.cookies.set({
        name: "EG_AUTH_TOKEN",
        value: authToken,
        maxAge: data,
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
      });
    }

    return response;
  }

  if (authToken && pathname !== "/login") {
    const { data, error } = await client.auth.session.resetTimeout({ authToken });
    
    if (!error && data) {
      const response = NextResponse.next();
      response.cookies.set({
        name: "EG_AUTH_TOKEN",
        value: authToken,
        maxAge: data,
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
      });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};