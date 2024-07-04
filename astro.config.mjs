import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import { flavors } from '@catppuccin/palette';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
      logo: {
        light: '/src/assets/images/portal-logo-light-mode.svg',
        dark: '/src/assets/images/portal-logo-dark-mode.svg',
        alt: 'Algorand Developer Portal',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      customCss: ['/src/styles/global.css'],
      sidebar: [
        {
          label: 'Build',
          items: [
            {
              label: 'AlgoKit',
              collapsed: true,
              autogenerate: { directory: 'build/algokit' },
            },
            {
              label: 'Accounts',
              collapsed: true,
              autogenerate: {
                directory: 'build/assets',
              },
            },
            {
              label: 'Assets',
              collapsed: true,
              autogenerate: {
                directory: 'build/assets',
              },
            },
            {
              label: 'Transactions',
              collapsed: true,
              autogenerate: {
                directory: 'build/transactions',
              },
            },
            {
              label: 'Smart Contracts',
              collapsed: true,
              autogenerate: {
                directory: 'build/smart-contracts',
              },
            },
          ],
        },
        {
          label: 'Protocol',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          items: [
            {
              label: 'Consensus',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/consensus',
              },
            },
            {
              label: 'Node',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/node',
              },
            },
            {
              label: 'APIs',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/api',
              },
            },
            {
              label: 'State Proofs',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/state-proofs',
              },
            },
            {
              label: 'Features',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/features',
              },
            },
            {
              label: 'AVM',
              badge: {
                text: 'todo',
                variant: 'danger',
              },
              autogenerate: {
                directory: 'protocol/avm',
              },
            },
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          autogenerate: {
            directory: 'reference',
          },
        },
        {
          label: 'Node Running',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          autogenerate: {
            directory: 'node_running',
          },
        },
      ],
      expressiveCode: {
        // themes: [flavors.latte, flavors.mocha],
        themes: ['material-theme'],
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    remarkPlugins: [
      remarkSlug,
      [
        remarkAutolinkHeadings,
        {
          behavior: 'append',
          linkProperties: {
            className: ['anchor'],
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
    ],
  },
});
