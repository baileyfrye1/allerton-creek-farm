import { z, ZodSchema } from 'zod';

export const emailSchema = z.object({
  first: z
    .string()
    .min(1, { message: 'First name must be at least 1 character' }),
  last: z
    .string()
    .min(1, { message: 'Last name must be at least 1 character' }),
  phone: z.string(),
  email: z.string().email(),
  desc: z.string(),
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
