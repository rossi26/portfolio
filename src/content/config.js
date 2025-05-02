// src/content/config.js
// Import utilities from `astro:content` and Zod for schema definition
import { defineCollection, z } from 'astro:content';

// Define the schema for the 'blog' collection
const blogCollection = defineCollection({
  type: 'content', // Treat these files as content (Markdown, MDX)
  // Define the expected structure and types of the frontmatter
  schema: z.object({
    title: z.string(), // Expect a string for the title
    description: z.string(), // Expect a string for the description
    pubDate: z.date(), // Expect a JavaScript Date object for publication date
    updatedDate: z.date().optional(), // Optionally expect a Date for updates
    tags: z.array(z.string()).optional(), // Optionally expect an array of strings for tags
    featured: z.boolean().optional().default(false), // Optionally expect a boolean for featured status (defaults to false)
    // Add other frontmatter fields you might want here
    // e.g., heroImage: z.string().optional()
  }),
});

// Export the collections configuration
// The key 'blog' matches the directory name src/content/blog/
export const collections = {
  'blog': blogCollection,
};
