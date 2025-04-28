import { NextResponse } from "next/server"

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

    // Here you would implement actual email sending logic
    // Example with a service like Nodemailer or SendGrid would go here
    // This is where you'd configure the email to be sent to sales@smoothtts.com
    
    // For demonstration purposes, we're just returning success
    // In production, replace this with actual email sending code

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