import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Email credentials not configured for subscription");
      return NextResponse.json(
        { success: true, message: "Subscription received" },
        { status: 200 }
      );
    }
    
    // Create transporter
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
      console.error("Failed to create email transporter for subscription:", error);
      return NextResponse.json(
        { success: true, message: "Subscription received" },
        { status: 200 }
      );
    }

    // Create email content
    const emailHtml = `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email Address:</strong> ${email}</p>
      <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
      
      <hr>
      <p><em>This subscription was made from the newsletter form on smoothtts.com</em></p>
    `;

    // Send notification email
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "sales@smoothtts.com",
        subject: `New Newsletter Subscription`,
        html: emailHtml,
        replyTo: email,
      });

      console.log("Subscription notification sent to: sales@smoothtts.com");
    } catch (emailError) {
      console.error("Failed to send subscription notification:", emailError);
      // Still return success to user, but log the error
    }
    
    // Return success response
    return NextResponse.json(
      { success: true, message: "Thank you for subscribing to our newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}