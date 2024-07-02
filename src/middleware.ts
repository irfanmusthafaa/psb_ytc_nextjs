import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = cookies();
  const token = cookie.get("TokenUser");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/psb/profil",
    "/psb/infaq",
    // "/psb/dokumen",
    "/psb/hasil-seleksi",
    "/psb/test-seleksi",
    "/psb/edit-profil",
  ],
};
