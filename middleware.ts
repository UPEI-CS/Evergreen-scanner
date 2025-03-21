import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * 
 * @param request 
 * @returns 
 * 
 * @description 
 * Middleware that ensures the user is authenticated before accessing protected pages.
 * Redirects unauthenticated users to /login and prevents logged-in users from accessing 
 * any other page until succesfully logged in
 */
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("EG_AUTH_TOKEN")?.value;
  const { pathname } = request.nextUrl;

  const isAuthenticated = !!authToken;

  if (!isAuthenticated && pathname !== "/login") {
    console.log("User not authenticated. Redirecting to login...");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && pathname === "/login") {
    console.log(
      "Authenticated user trying to access login. Redirecting to home..."
    );
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
