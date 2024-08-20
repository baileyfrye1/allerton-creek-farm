import { z, ZodSchema } from 'zod';

export const emailSchema = z.object({
  first: z.string().min(1, { message: 'First name can not be empty' }),
  last: z.string().min(1, { message: 'Last name can not be empty' }),
  phone: z.string(),
  email: z
    .string()
    .email()
    .refine(
      (email) => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return email.match(pattern);
      },
      { message: 'Please enter a valid email address' },
    ),
  desc: z.string().min(10, { message: 'Please enter a message' }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown,
): { data: T; error?: undefined } | { error: Error; data?: undefined } {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    return { error: new Error(errors.join('. ')) };
  } else {
    return { data: result.data };
  }
}
