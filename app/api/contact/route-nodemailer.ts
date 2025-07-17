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
    
    // Log the submission (for development)
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      recipient: toEmail
    })

    // Create transporter (you can use Gmail SMTP or other services)
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // or use your email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASSWORD, // your app password
      },
    })

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
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      replyTo: email,
    })

    console.log("Email sent successfully to:", toEmail)

    return NextResponse.json(
      { 
        message: "Contact form submitted successfully",
        sentTo: toEmail 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    )
  }
}
