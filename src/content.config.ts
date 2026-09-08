import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const linkState = z.union([
  z.object({ url: z.string() }),
  z.object({
    missing: z.literal(true),
    note: z.string().optional(),
    url: z.string().optional(),
  }),
]);

const books = defineCollection({
  loader: file("src/data/books.json"),
  schema: z.object({
    id: z.string(),
    /** Whether the .book-card gets an HTML id (link target). */
    anchor: z.boolean(),
    title: z.string(),
    titleClass: z.enum(["", "margin-fixer"]),
    /** Path under src/assets/books/, e.g. "prose/book1.jpg". */
    cover: z.string(),
    /** Verbatim category label, e.g. "كتاب فلسفي". */
    category: z.string(),
    /** Verbatim release line, e.g. "أُصدر عام: 1955". */
    releaseText: z.string(),
    page: z.enum(["main", "subpage"]),
    order: z.number(),
    /** books-subpage only — which <h2> group the card sits under. */
    group: z
      .enum(["prose", "short-stories", "novels", "plays", "travel-literature"])
      .optional(),
    /** Extra `highlighted` class on .book-card (one card on books.html). */
    highlighted: z.boolean().optional(),
    /** Card renders .book-bio / .book-links without a wrapping div (matches source). */
    unwrapped: z.boolean().optional(),
    wiki: linkState.optional(),
    download: linkState.optional(),
  }),
});

export const collections = { books };
