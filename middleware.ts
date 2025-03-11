import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * @param request
 * @returns req
 *
 * @description
 * Middleware that ensures the user is authenticated before accessing protected pages.
 * Redirects unauthenticated users to /login and prevents logged-in users from accessing /login by redirecting them to /.
 */

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("EG_AUTH_TOKEN")?.value;
  const { pathname } = request.nextUrl;

  console.log(`Requesting: ${pathname}`);
  console.log(`Auth Token: ${authToken ? "Exists" : "Not Found"}`);

  if (!authToken && pathname !== "/login") {
    // Redirect unauthenticated users to login
    console.log("User not authenticated. Redirecting to login...");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (authToken && pathname === "/login") {
    // Redirect authenticated users away from /login
    console.log("User already logged in. Redirecting to /...");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow request to proceed if none of the conditions match
  return NextResponse.next();
}

// Middleware applies to all routes except for assets and API routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
