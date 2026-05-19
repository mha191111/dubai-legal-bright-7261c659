import { z } from "zod";

// Single source of truth for contact info
export const CONTACT = {
  name: "Mohammad Moslem",
  phoneE164: "+989125796803",
  phoneDisplay: "+98 912 579 6803",
  whatsappNumber: "989125796803", // wa.me format, no +
  email: "mha1911111@gmail.com",
  city: "Dubai, UAE",
} as const;

export const telHref = `tel:${CONTACT.phoneE164}`;

export const waHref = (message?: string) => {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const mailHref = `mailto:${CONTACT.email}`;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone")
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Only digits, spaces and + are allowed"),
  package: z.enum(["standard", "pro", "premium", "custom"]),
  message: z.string().trim().max(600).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
