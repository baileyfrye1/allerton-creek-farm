'use server';
import EmailTemplate from '@/emails/emailTemplate';
import { Resend } from 'resend';
import { emailSchema } from './schemas';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export const sendEmailAction = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const rawData = Object.fromEntries(formData);
  const validatedFields = emailSchema.safeParse(rawData);

  if (!validatedFields.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(rawData)) {
      fields[key] = rawData[key].toString();
    }
    return {
      message: 'Invalid form data',
      fields,
      issues: validatedFields.error.issues.map((issue) => issue.message),
    };
  }

  try {
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
        message: error.message,
        fields: validatedFields.data,
      };
    }
  }
  return {
    message: 'Thank you for submitting! We will contact you shortly.',
  };
};
