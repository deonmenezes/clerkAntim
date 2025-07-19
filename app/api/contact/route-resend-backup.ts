import { NextResponse } from "next/server"
import { Resend } from 'resend'

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
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
      <p><em>This message was sent from the contact form on your website.</em></p>
    `

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}

Message:
${message}

---
This message was sent from the contact form on your website.
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <noreply@smoothtts.com>', // You'll need to verify this domain with Resend
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
      text: emailText,
      replyTo: email, // Set reply-to as the sender's email
    })

    console.log("Email sent successfully:", data)

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
      { error: "Failed to process contact form" },
      { status: 500 }
    )
  }
}