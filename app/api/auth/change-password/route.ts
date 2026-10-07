import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { id, oldPassword, newPassword } = await request.json()
        const account = await prisma.account.findUnique({
            where: { id },
        })

        if (!(await bcrypt.compare(oldPassword, account?.password || ''))) {
            return NextResponse.json({
                success: false,
                error: "Mật khẩu cũ không chính xsác",
            },
                { status: 400 })
        }

        const updatedAccount = await prisma.account.update({
            where: { id },
            data: { password: await bcrypt.hash(newPassword, 10) },
        })

        return NextResponse.json({
            success: true,
            data: updatedAccount,
        })
    }
    catch (error) {
        console.error("Change password failed", error);
        return NextResponse.json({
            success: false,
            error: "Change password failed",
        },
            { status: 500 })
    }
}