import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "יש להזין שם מלא").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^0\d{1,2}-?\d{7}$/, "מספר טלפון לא תקין"),
  email: z.string().trim().email("כתובת מייל לא תקינה").optional().or(z.literal("")),
  product: z.string().trim().min(1, "יש לבחור מוצר"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  source: z.string().trim().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
