import { NextResponse } from "next/server";

// Optional: integrate with email service like Resend
// Set RESEND_API_KEY in Vercel environment variables
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    
    if (!body || !body.name || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" }, 
        { status: 400 }
      );
    }

    // Log the submission (in production, send email via Resend or similar)
    console.log("New contact submission:", {
      name: body.name,
      email: body.email,
      phone: body.phone || "N/A",
      message: body.message,
      timestamp: new Date().toISOString()
    });

    /* 
    // Example Resend integration (uncomment when ready):
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'website@dejaysbigbite.com',
      to: 'Chefronaldsmith12@gmail.com',
      subject: `New inquiry from ${body.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `
    });
    */

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Internal server error" }, 
      { status: 500 }
    );
  }
}
