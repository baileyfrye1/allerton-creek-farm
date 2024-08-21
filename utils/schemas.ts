import { z, ZodSchema } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const emailSchema = z.object({
  first: z.string().trim().min(1, { message: 'First name is required' }),
  last: z.string().trim().min(1, { message: 'Last name is required' }),
  phone: z.string().regex(phoneRegex, 'Invalid number'),
  email: z.string().trim().email(),
  desc: z.string().trim().min(10, { message: 'Please enter a message' }),
});

export type FormFields = z.infer<typeof emailSchema>;

// NOT NEEDED RIGHT NOW, MAY INTEGRATE LATER WHEN SITE HAS PRODUCTS
// export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown) {
//   const result = schema.safeParse(data);
//   if (!result.success) {
//     const errors = result.error.errors.map((error) => error.message);
//     return { message: new Error(errors.join('. ')), fields: result.data };
//   } else {
//     return { data: result.data };
//   }
// }
