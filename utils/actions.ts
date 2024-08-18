'use server';
import { NextRequest, NextResponse } from 'next/server';
import EmailTemplate from '@/emails/emailTemplate';
import { Resend } from 'resend';
import { emailSchema, validateWithZodSchema } from './schemas';

const resend = new Resend(`${process.env.RESEND_API_KEY}`);

export const sendEmailAction = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData);
  const validatedFields = validateWithZodSchema(emailSchema, rawData);

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['baileyafrye@comcast.net'],
    cc: ['bailey@fryegroupnashville.com'],
    subject: 'Hello world',
    react: EmailTemplate({ ...validatedFields }),
  });
};
