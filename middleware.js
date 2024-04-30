

import { NextResponse } from "next/server";

const protectedRoutes = ["/client"];

export default function middleware(req, res) {
  const access_token = req.cookies.get('access_token');
  if (!access_token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/sign-in", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}