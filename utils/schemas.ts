import { z, ZodSchema } from 'zod';

const phoneRegex = new RegExp(
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
);

export const emailSchema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'Last name is required' }),
  phone: z.string().regex(phoneRegex, 'Invalid phone number'),
  email: z.string().trim().email(),
  desc: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' }),
});

export type FormFields = z.infer<typeof emailSchema>;

//* NOT NEEDED RIGHT NOW, MAY INTEGRATE LATER WHEN SITE HAS PRODUCTS
// export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown) {
//   const result = schema.safeParse(data);
//   if (!result.success) {
//     const errors = result.error.errors.map((error) => error.message);
//     return { message: new Error(errors.join('. ')), fields: result.data };
//   } else {
//     return { data: result.data };
//   }
// }
