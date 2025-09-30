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
        await prisma.subsciber.upsert({
            where: { email },
            update: {source},
            create: { email, source },
        });

        // send welcome email
        await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            replyTo: process.env.EMAIL_REPLY_TO!,
            subject: "🏉 Welcome to SportsGeek! - Kenyan Rugby Updates!",
            html: getWelcomeHtml(email),
        });

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("subscribe error:", err);
        const msg = err?.message ?? "Invalid request";
        return NextResponse.json({ ok: false, error: msg}, {status: 400})
    }
}

function getWelcomeHtml(email: string) {
    return `
    <table width="100%" style="max-width:600px;margin:auto;font-family:Arial,sans-serif">
    <tr>
      <td style="padding:20px;text-align:center;color:#fff;background:linear-gradient(90deg,#2e7d32,#c62828)">
        <h1 style="margin:0">Welcome to SportsGeek Family</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:20px;color:#333">
        <p>Hi ${email},</p>
        <p>Thanks for joining <b>SportsGeek</b> – your home for Kenyan Rugby! 🎉</p>
        <ul>
          <li>🔥 New designs & merch drops</li>
          <li>🏉 Match highlights & stories</li>
          <li>💸 Special offers for fans</li>
        </ul>
        <p>Talk soon,<br><b>The SportsGeek Team</b></p>
      </td>
    </tr>
    <tr>
      <td style="padding:14px;text-align:center;background:#f1f1f1;color:#555;font-size:12px">
        You’re receiving this because you subscribed at SportsGeek.
        <br/>If this wasn’t you, ignore this email.
      </td>
    </tr>
  </table>`;
}