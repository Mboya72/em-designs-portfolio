// lib/resend.ts
"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
  } catch (error) {
    return { success: false, error };
  }
};
