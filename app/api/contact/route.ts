import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    const formattedSubject = subject ? subject : "New Website Inquiry";
    const recipientEmail = process.env.RECIPIENT_EMAIL || "kamrulmk2016@gmail.com";

    // Clean minimal template for Recipient (Portfolio Owner / Kamrul)
    const recipientHtml = `
      <div style="font-family: 'JetBrains Mono', monospace, sans-serif; background-color: #F4F4F0; padding: 24px; color: #111111;">
        <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #111111; padding: 24px; box-shadow: 2px 2px 0px #111111;">
          <div style="background: #E63946; color: #FFFFFF; padding: 6px 12px; font-weight: 800; display: inline-block; font-size: 12px; margin-bottom: 16px;">
            NEW WEBSITE INQUIRY TRANSMITTED
          </div>
          <h2 style="margin-top: 0; font-size: 20px; text-transform: uppercase;">Inquiry Specifications</h2>
          <hr style="border: none; border-top: 1px solid #111111; margin: 16px 0;" />
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #E63946;">${email}</a></p>
          <p><strong>Subject:</strong> ${formattedSubject}</p>
          <p><strong>Timestamp:</strong> ${timestamp} (Asia/Dhaka)</p>
          <hr style="border: none; border-top: 1px solid #111111; margin: 16px 0;" />
          <p><strong>Message Details:</strong></p>
          <div style="background: #F4F4F0; padding: 16px; border: 1px solid #111111; font-family: sans-serif; white-space: pre-wrap; line-height: 1.6;">${message}</div>
        </div>
      </div>
    `;

    // Clean minimal template for Provider (Sender / Client Acknowledgment)
    const senderHtml = `
      <div style="font-family: 'JetBrains Mono', monospace, sans-serif; background-color: #F4F4F0; padding: 24px; color: #111111;">
        <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 1px solid #111111; padding: 24px; box-shadow: 2px 2px 0px #111111;">
          <div style="background: #111111; color: #FFFFFF; padding: 6px 12px; font-weight: 800; display: inline-block; font-size: 12px; margin-bottom: 16px;">
            INQUIRY ACKNOWLEDGMENT
          </div>
          <h2 style="margin-top: 0; font-size: 18px;">Hello ${name},</h2>
          <p style="line-height: 1.6;">Thank you for getting in touch. Your inquiry regarding <strong>"${formattedSubject}"</strong> has been routed to Kamrul Islam's inbox.</p>
          <p style="line-height: 1.6;">I will review your project requirements and get back to you at <strong>${email}</strong> within 24 hours.</p>
          <hr style="border: none; border-top: 1px solid #111111; margin: 16px 0;" />
          <p style="font-size: 12px; color: #666666;">Kamrul Islam — Application & Web Developer</p>
        </div>
      </div>
    `;

    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER || "kamrulmk2016@gmail.com";

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Number(process.env.SMTP_PORT) === 587 ? false : true,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Send to Kamrul
      await transporter.sendMail({
        from: `"${name} (Portfolio Contact)" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `[INQUIRY] ${formattedSubject} — ${name}`,
        html: recipientHtml,
      });

      // Send confirmation to Sender
      await transporter.sendMail({
        from: `"Kamrul Islam" <${smtpUser}>`,
        to: email,
        subject: `[CONFIRMATION] Inquiry Received — Kamrul Islam`,
        html: senderHtml,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully transmitted to both provider and recipient.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to process contact inquiry submission." },
      { status: 500 }
    );
  }
}
