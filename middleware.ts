import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("admin_token")?.value;

    const isLoggedIn = token
        ? await jwtVerify(token, JWT_SECRET).then(() => true).catch(() => false)
        : false;

    // Đã đăng nhập mà vào trang login → redirect về dashboard
    if (pathname === "/" && isLoggedIn) {
        return NextResponse.redirect(new URL("/account", req.url));
    }

    // Bảo vệ các route /dashboard/*
    if (pathname.startsWith("/dashboard") && !isLoggedIn) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/dashboard/:path*',
        '/review/:path*',
        '/submission/:path*',
        '/account/:path*',
    ],
};