import { z } from "zod";

/**
 *initial book schema infered from More info/specs
 */
export const BookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  lcCallNumber: z.string().min(1, "LC Call Number is required"),
  barcode: z.string().min(1, "Barcode is required"),
  shelvingLocation: z.string().min(1, "Shelving location is required"),
  circulationModifier: z.string().min(1, "Circulation modifier is required"),
  status: z.enum([
    "Available",
    "Checked Out",
    "Lost",
    "Missing",
    "Damaged",
    "Discard/Weed",
  ]),
  location: z.string().optional(),
});

export const UpdateBookSchema = BookSchema.partial().omit({
  barcode: true,
});

export type Book = z.infer<typeof BookSchema>;
export type BookUpdate = z.infer<typeof UpdateBookSchema>;
