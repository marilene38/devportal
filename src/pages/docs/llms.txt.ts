import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const docs = await getCollection('docs');

  return new Response(
    `# Algorand Developer Portal Documentation\n\n${docs
      .map(doc => {
        return `- [${doc.data.title}](https://dev.algorand.co/${doc.slug}/)\n`;
      })
      .join('')}`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        // Optional: Add noindex headers (may require server-side configuration)
        // "X-Robots-Tag": "noindex, nofollow"
      },
    },
  );
};
