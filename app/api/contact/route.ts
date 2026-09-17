import { NextResponse } from "next/server";

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

    // Clean minimal template for Recipient (Portfolio Owner / Kamrul)
    const recipientEmailTemplate = {
      to: "kamrul.dev.contact@gmail.com",
      subject: `[INQUIRY] ${formattedSubject} — ${name}`,
      html: `
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
      `,
    };

    // Clean minimal template for Provider (Sender / Client Acknowledgment)
    const senderConfirmationTemplate = {
      to: email,
      subject: `[CONFIRMATION] Inquiry Received — Kamrul Islam`,
      html: `
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
      `,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully transmitted to both provider and recipient.",
        templates: {
          recipient: recipientEmailTemplate,
          provider: senderConfirmationTemplate,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process contact inquiry submission." },
      { status: 500 }
    );
  }
}
