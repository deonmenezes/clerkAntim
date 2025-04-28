import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Define a safety setting that blocks harmful content
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export async function getGeminiResponse(userMessage: string): Promise<string> {
  try {
    // Create a chat model
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-1.5-pro',
      safetySettings
    });

    // Define the context for the AI to have knowledge about your website
    const systemPrompt = `You are a helpful customer service chatbot named "Smooth Bot" for a Industrial Equipment Catalogue website called Smooth.
    
    Key website information:
    - We sell various fashion collections and products
    - Contact email: sales@smoothtts.com
    - For specific product details, redirect users to the appropriate product page
    - For collection information, suggest users visit the collections page
    
    Important rules:
    1. If asked about specific products or collections, suggest the user to visit that product/collection page
    2. If unable to answer a specific question about products or pricing, direct them to browse our collections
    3. For any customer service issues, provide the contact email: sales@smoothtts.com
    4. Always be helpful, concise and friendly
    5. If asked for contact information, provide the email: sales@smoothtts.com phone:+971545417801
    6. Never make up information about products or collections you don't know about
    7. Your responses should be brief and to the point, under 100 words when possible`;

    // Start a chat session
    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: 'Who are you?' }] },
        { role: 'model', parts: [{ text: 'I am Smooth Bot, your virtual assistant for SMOOOOTH boutique. How can I help you today?' }] },
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    // Generate a response
    const result = await chat.sendMessage(systemPrompt + '\n\nUser question: ' + userMessage);
    const response = result.response.text();
    
    return response;
  } catch (error) {
    console.error('Error with Gemini API:', error);
    return 'Sorry, I encountered an error. Please try again or contact us at sales@smoothtts.com for assistance.';
  }
}