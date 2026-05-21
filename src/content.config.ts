import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro:schema";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    language: z.enum(["ko", "en"]).default("ko"),
    canonicalUrl: z.string().url().optional(),
    mediumUrl: z.string().url().optional(),
    tistoryUrl: z.string().url().optional(),
    velogUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional()
  })
});

export const collections = { posts };
