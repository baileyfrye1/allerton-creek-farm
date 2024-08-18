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
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new Error('Something went wrong. Please try again later');
  }
  return result.data;
}
