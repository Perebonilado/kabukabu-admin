import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN } from "./constants";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const storedCookie = req.cookies.get(ACCESS_TOKEN);

  if (pathname.startsWith("/_next")) return NextResponse.next();

  if (storedCookie) {
    const parsedCookie = JSON.parse(storedCookie.value);
    const parsedVerifiedCookie = JSON.parse(parsedCookie.auth)
    const verifiedCookie = parsedVerifiedCookie.accessToken

    if (!(String(verifiedCookie).length > 2)) {
      if (!req.nextUrl.pathname.startsWith("/auth")) {
        req.nextUrl.pathname = "/auth/login";
        return NextResponse.redirect(req.nextUrl);
      }
    } else if (
      String(verifiedCookie).length > 2 &&
      (req.nextUrl.pathname.startsWith("/auth"))
    ) {
      req.nextUrl.pathname = "/";
      return NextResponse.redirect(req.nextUrl);
    }

  }
}

export const config = {
  matcher: [
    "/",
    "/auth/login",
    "/auth/forgot-password",
    "/drivers",
    "/fare-prices",
    "/hubs",
    "/inspectors",
    "/riders",
    "/settings",
    "/sharp-cars",
    "/sos",
    "/staffs",
    "/transactions",
    "/trips",
  ],
};
