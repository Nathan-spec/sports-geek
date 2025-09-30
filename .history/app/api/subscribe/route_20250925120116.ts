import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const Body = z.object({
    email: z.string().email(),
    source: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const json = await req.json();
        const { email, source } = Body.parse(json);

        // upsert so repeat signups don't crash
        await prisma.subscriber.upsert({
            where: { email },
            update: {source},
            create: { email, source },
        });

        // send welcome email
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            reply_to: process.env.EMAIL_REPLY_TO!,
            subject: "🏉 Welcome to SportsGeek! - Kenyan Rugby Updates!",