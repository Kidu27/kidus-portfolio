import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "kidusyared455@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0f0e0d; color: #f2ede8; border-radius: 12px;">
          <h2 style="color: #e8c547; margin-bottom: 24px;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8a8070; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8a8070;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #e8c547;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8a8070; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <p style="margin-top: 32px; font-size: 12px; color: #8a8070;">
            Sent from dev-kidus.vercel.app · ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
