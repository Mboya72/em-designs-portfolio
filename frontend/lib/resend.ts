// lib/resend.ts
"use server";
import { Resend } from 'resend';

// Initialize Resend API with the API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Send email function
export const sendEmail = async ({
  to,
  subject,
  name,
  email,
  message,
}: {
  to: string;
  subject: string;
  name: string;
  email: string;
  message: string;
}) => {
  try {
    // Sending email using the Resend API
    const data = await resend.emails.send({
      from: 'EMDesigns <onboarding@resend.dev>',
      to,
      subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error: unknown) {  // Catching error as 'unknown'
    if (error instanceof Error) {
      return { success: false, error: error.message }; // if it's an instance of Error
    }
    // For other error types
    return { success: false, error: 'Unknown error occurred' };
  }
};

