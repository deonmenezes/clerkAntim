import { NextRequest, NextResponse } from "next/server";

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
    
    // Here you would typically add the email to your newsletter database or service
    // For example using Mailchimp, SendGrid, or your own database
    
    // This is a placeholder for the actual implementation
    console.log("Subscription email received:", email);
    console.log("Subscription will be sent to: sales@smoothtts.com");
    
    // In a production environment, you would set up email forwarding to this address
    const recipientEmail = "sales@smoothtts.com";
    
    // Return success response
    return NextResponse.json(
      { success: true, message: "Subscription successful" },
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