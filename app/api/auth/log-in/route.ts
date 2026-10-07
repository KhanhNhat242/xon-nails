import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import bcrypt from "bcryptjs";
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    if (!process.env.JWT_SECRET) {
        return NextResponse.json(
            { message: "Server configuration error: JWT_SECRET is missing" },
            { status: 500 }
        );
    }

    const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

    const { username, password } = await req.json()

    const account = await prisma.account.findFirst({
        where: { username },
    });

    // console.log(account)

    if (!account || !account.password || !(await bcrypt.compare(password, account.password))) {
        return NextResponse.json(
            { message: "Sai tài khoản hoặc mật khẩu" },
            { status: 401 }
        );
    }

    const token = await new SignJWT({ id: account.id, username: account.username, role: account.role })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1d")
        .sign(JWT_SECRET);

    const staff = account.staff_id &&
        await prisma.staff.findUnique({
            where: { id: account.staff_id },
        })

    const censor = account.censor_id &&
        await prisma.censor.findUnique({
            where: { id: account.censor_id },
        })

    const response = NextResponse.json({ message: "Đăng nhập thành công", acc: account, staff, censor });

    response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
    });

    return response;
}