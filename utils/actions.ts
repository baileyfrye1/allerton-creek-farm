'use server';
import EmailTemplate from '@/emails/emailTemplate';
import { Resend } from 'resend';
import { emailSchema, validateWithZodSchema } from './schemas';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export const sendEmailAction = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData);
  const validatedFields = validateWithZodSchema(emailSchema, rawData);

  try {
    if (validatedFields.error) {
      throw new Error(validatedFields.error.message);
    }

    await resend.emails.send({
      from: 'Allerton Creek Farm Form Submission <onboarding@resend.dev>',
      to: ['baileyafrye@comcast.net'],
      cc: ['bailey@fryegroupnashville.com'],
      subject: 'New Knife Sharpening Request',
      react: EmailTemplate({ ...validatedFields.data }),
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
  }
};
