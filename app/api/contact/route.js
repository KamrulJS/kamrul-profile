import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Email, and Message are required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
    const formattedSubject = subject ? subject : "New Portfolio Project Inquiry";
    const recipientEmail = process.env.RECIPIENT_EMAIL || "kamrulmk2016@gmail.com";

    let supabaseSaved = false;

    // 1. Store in Supabase Database Table: contact_messages
    if (isSupabaseConfigured && supabase) {
      try {
        const { error: sbError } = await supabase.from("contact_messages").insert([
          {
            name,
            email,
            subject: formattedSubject,
            message,
            status: "new",
          },
        ]);

        if (!sbError) {
          supabaseSaved = true;
        } else {
          console.warn("Supabase contact save warning:", sbError.message);
        }
      } catch (sbErr) {
        console.warn("Supabase contact insert exception:", sbErr);
      }
    }

    // Clean Swiss Retro HTML Email Template for Kamrul (Recipient)
    const recipientHtml = `
      <div style="font-family: 'JetBrains Mono', 'Courier New', monospace, sans-serif; background-color: #F4F4F0; padding: 24px; color: #111111;">
        <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 2px solid #111111; padding: 24px; box-shadow: 4px 4px 0px #111111; border-radius: 6px;">
          <div style="background: #E63946; color: #FFFFFF; padding: 6px 12px; font-weight: 800; display: inline-block; font-size: 12px; margin-bottom: 16px; border: 1px solid #111111;">
            NEW WEBSITE INQUIRY TRANSMITTED
          </div>
          <h2 style="margin-top: 0; font-size: 20px; text-transform: uppercase; color: #111111;">Inquiry Specifications</h2>
          <hr style="border: none; border-top: 2px solid #111111; margin: 16px 0;" />
          <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #E63946; font-weight: bold;">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject / Scope:</strong> ${formattedSubject}</p>
          <p style="margin: 8px 0;"><strong>Timestamp:</strong> ${timestamp} (Dhaka Time)</p>
          <p style="margin: 8px 0;"><strong>Database Status:</strong> ${supabaseSaved ? "✓ Saved in Supabase (contact_messages)" : "Email delivery only"}</p>
          <hr style="border: none; border-top: 2px solid #111111; margin: 16px 0;" />
          <p style="margin-bottom: 8px;"><strong>Message Content:</strong></p>
          <div style="background: #F4F4F0; padding: 16px; border: 1.5px solid #111111; font-family: sans-serif; white-space: pre-wrap; line-height: 1.6; color: #111111; border-radius: 4px;">${message}</div>
          <hr style="border: none; border-top: 1px solid #E0E0E0; margin: 20px 0 10px 0;" />
          <p style="font-size: 11px; color: #666666; text-align: center; margin: 0;">Sent directly from Portfolio Contact Form to ${recipientEmail}</p>
        </div>
      </div>
    `;

    // Clean Confirmation Email Template for Sender (Client)
    const senderHtml = `
      <div style="font-family: 'JetBrains Mono', 'Courier New', monospace, sans-serif; background-color: #F4F4F0; padding: 24px; color: #111111;">
        <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border: 2px solid #111111; padding: 24px; box-shadow: 4px 4px 0px #111111; border-radius: 6px;">
          <div style="background: #111111; color: #FFFFFF; padding: 6px 12px; font-weight: 800; display: inline-block; font-size: 12px; margin-bottom: 16px;">
            INQUIRY RECEIVED
          </div>
          <h2 style="margin-top: 0; font-size: 18px; color: #111111;">Hello ${name},</h2>
          <p style="line-height: 1.6; color: #111111;">Thank you for getting in touch. Your message regarding <strong>"${formattedSubject}"</strong> has been received and routed directly to my inbox (<strong>${recipientEmail}</strong>).</p>
          <p style="line-height: 1.6; color: #111111;">I will review your project requirements and respond to you at <strong>${email}</strong> within 24 hours.</p>
          <hr style="border: none; border-top: 2px solid #111111; margin: 16px 0;" />
          <p style="font-size: 12px; color: #666666; margin: 0;">Kamrul Islam — Application & Web Developer</p>
        </div>
      </div>
    `;

    const smtpPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;
    const smtpUser = process.env.GMAIL_USER || process.env.SMTP_USER || recipientEmail;

    let emailDelivered = false;

    // 2. Try Nodemailer Gmail SMTP if credentials exist
    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // Send Email to Kamrul
        await transporter.sendMail({
          from: `"${name} (Portfolio Contact)" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `[INQUIRY] ${formattedSubject} — ${name}`,
          html: recipientHtml,
        });

        // Send Auto-Confirmation to Visitor
        await transporter.sendMail({
          from: `"Kamrul Islam" <${smtpUser}>`,
          to: email,
          subject: `[CONFIRMATION] Inquiry Received — Kamrul Islam`,
          html: senderHtml,
        });

        emailDelivered = true;
      } catch (smtpErr) {
        console.error("Nodemailer SMTP Error:", smtpErr);
      }
    }

    // Always log to server terminal for instant verification
    console.log("==========================================");
    console.log(`[CONTACT INQUIRY RECEIVED FOR ${recipientEmail}]`);
    console.log(`Timestamp: ${timestamp}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${formattedSubject}`);
    console.log(`Supabase Saved: ${supabaseSaved ? "YES (public.contact_messages)" : "NO"}`);
    console.log(`Email Delivery Status: ${emailDelivered ? "SUCCESSFULLY SENT VIA EMAIL" : "LOGGED IN CONSOLE"}`);
    console.log("==========================================");

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully submitted and transmitted.",
        emailDelivered,
        supabaseSaved,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact inquiry." },
      { status: 500 }
    );
  }
}
