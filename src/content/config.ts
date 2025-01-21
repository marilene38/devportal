import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // Add a default value to the built-in `banner` field.
        banner: z.object({ content: z.string() }).default({
          content:
            'Our new developer portal is under construction. Currently, only docs related to running a node on Algorand are available. For complete documentation, please refer to our <a href="https://developer.algorand.org/docs/" target="_blank" rel="noopener">old developer portal</a>.',
        }),
      }),
    }),
  }),
};
