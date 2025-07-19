import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message, company, recipient } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Set the recipient email - use the provided one or default to sales@smoothtts.com
    const toEmail = recipient || "sales@smoothtts.com"
    
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please set EMAIL_USER and EMAIL_PASSWORD." },
        { status: 500 }
      );
    }
    
    // Log the submission (for development)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      recipient: toEmail
    })

    // Create transporter with better error handling
    let transporter;
    
    try {
      if (process.env.EMAIL_HOST) {
        // Custom SMTP configuration
        transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT || '587'),
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
      } else {
        // Gmail configuration
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
      }
    } catch (error) {
      console.error("Failed to create email transporter:", error);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Email transporter verification failed:", error);
      return NextResponse.json(
        { error: "Email service authentication failed. Please check email credentials." },
        { status: 500 }
      );
    }

    // Create email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><em>This message was sent from the contact form on smoothtts.com</em></p>
    `

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
        replyTo: email,
      });

      console.log("Email sent successfully to:", toEmail);

      return NextResponse.json(
        { 
          message: "Contact form submitted successfully",
          sentTo: toEmail 
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please check your email configuration." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
