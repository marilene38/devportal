import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // Add a default value to the built-in `banner` field.
        banner: z.object({ content: z.string() }).default({
          content:
            'These shiny new docs are under active construction; please bear with us as we work! For complete documentation, please refer to our <a href="https://developer.algorand.org/docs/" target="_blank" rel="noopener">old developer portal</a>.',
        }),
      }),
    }),
  }),
};
