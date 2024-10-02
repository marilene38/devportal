import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import d2 from 'astro-d2';
import rehypeExternalLinks from 'rehype-external-links';
import { resolve } from 'path';
import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Algorand Developer Portal',
      plugins: [
        starlightImageZoom(),
        starlightLinksValidator({
          exclude: ['FUTURELINK*', '/build/algokit/cli/features/localnet/'],
        }),
      ],
      components: {
        ThemeProvider: './src/components/CustomThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        Header: './src/components/Header.astro',
      },
      logo: {
        light: '/src/assets/images/portal-logo-light-mode.svg',
        dark: '/src/assets/images/portal-logo-dark-mode.svg',
        alt: 'Algorand Developer Portal',
        replacesTitle: true,
      },
      favicon: '/favicon.png',
      customCss: ['/src/styles/global.css'],
      sidebar: [
        {
          label: 'Build',
          items: [
            {
              label: 'AlgoKit',
              items: [
                {
                  label: 'What is AlgoKit?',
                  link: '/build/algokit/what-is-algokit',
                },
                {
                  label: 'Getting Started',
                  link: '/build/algokit/getting-started',
                },
                {
                  label: 'Project Structure',
                  link: '/build/algokit/project-structure',
                },
                {
                  label: 'AlgoKit Templates',
                  items: [
                    {
                      label: 'Overview',
                      link: '/build/algokit/official-algokit-templates',
                    },
                    {
                      label: 'Custom Templates',
                      link: '/build/algokit/custom-algokit-templates',
                    },
                  ],
                },
                {
                  label: 'CLI',
                  items: [
                    {
                      label: 'Overview',
                      link: '/build/algokit/cli/overview',
                    },
                    {
                      label: 'Features',
                      collapsed: true,
                      autogenerate: {
                        directory: 'build/algokit/cli/features',
                      },
                    },
                  ],
                },
                {
                  label: 'Utils',
                  items: [
                    {
                      label: 'AlgoKit Utils Clients',
                      link: 'build/algokit/utils/algokit-utils-clients',
                    },
                    {
                      label: 'TestNet Dispenser',
                      link: 'build/algokit/utils/dispenser',
                    },
                    {
                      label: 'Python',
                      collapsed: true,
                      autogenerate: {
                        directory: 'build/algokit/utils/python',
                      },
                    },
                    {
                      label: 'Typescript',
                      collapsed: true,
                      autogenerate: {
                        directory: 'build/algokit/utils/ts',
                      },
                    },
                  ],
                },
              ],
            },
            // {
            //   label: 'Accounts',
            //   collapsed: true,
            //   autogenerate: {
            //     directory: 'build/accounts',
            //   },
            // },
            // {
            //   label: 'Assets',
            //   collapsed: true,
            //   autogenerate: {
            //     directory: 'build/assets',
            //   },
            // },
            // {
            {
              label: 'Transactions',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'build/transactions/overview',
                },
                {
                  label: 'Blocks',
                  link: 'build/transactions/blocks',
                },
                {
                  label: 'Networks',
                  link: 'build/transactions/networks',
                },
                {
                  label: 'Leases',
                  link: 'build/transactions/leases',
                },
                {
                  label: 'Signing',
                  link: 'build/transactions/sign',
                },
                {
                  label: 'Atomic Transaction Groups',
                  link: 'build/transactions/atomic_txn_groups',
                },
                {
                  label: 'Uri Scheme',
                  link: 'build/transactions/uri_scheme',
                },
              ],
            },
            {
              label: 'Smart Contracts',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  link: 'build/smart_contracts/overview',
                },
                {
                  label: 'Lifecycle',
                  link: 'build/smart_contracts/lifecycle',
                },
                {
                  label: 'Applications',
                  link: 'build/smart_contracts/apps',
                },
                {
                  label: 'Constraints',
                  link: 'build/smart_contracts/constraints',
                },
                {
                  label: 'Control Flow',
                  link: 'build/smart_contracts/control_flow',
                },
                {
                  label: 'ABI',
                  link: 'build/smart_contracts/abi',
                },
                {
                  label: 'Inner Transactions',
                  link: 'build/smart_contracts/inner_transactions',
                },
                {
                  label: 'Resource Usage',
                  link: 'build/smart_contracts/resource_usage',
                },
                {
                  label: 'Logic Sigs',
                  link: 'build/smart_contracts/logic_sigs',
                },
                {
                  label: 'Algorand Python',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      link: 'build/smart_contracts/python/overview',
                    },
                  ],
                },
                {
                  label: 'Algorand Typescript',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      link: 'build/smart_contracts/typescript/overview',
                    },
                  ],
                },
                {
                  label: 'Algorand TEAL',
                  collapsed: true,
                  items: [
                    {
                      label: 'Overview',
                      link: 'build/smart_contracts/teal/overview',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // {
        //   label: 'Protocol',
        //   collapsed: true,
        //   badge: {
        //     text: 'todo',
        //     variant: 'danger',
        //   },
        //   items: [
        //     {
        //       label: 'Consensus',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/consensus',
        //       },
        //     },
        //     {
        //       label: 'Node',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/node',
        //       },
        //     },
        //     {
        //       label: 'APIs',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/api',
        //       },
        //     },
        //     {
        //       label: 'State Proofs',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/state-proofs',
        //       },
        //     },
        //     {
        //       label: 'Features',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/features',
        //       },
        //     },
        //     {
        //       label: 'AVM',
        //       badge: {
        //         text: 'todo',
        //         variant: 'danger',
        //       },
        //       autogenerate: {
        //         directory: 'protocol/avm',
        //       },
        //     },
        //   ],
        // },
        // {
        //   label: 'Reference',
        //   collapsed: true,
        //   badge: {
        //     text: 'todo',
        //     variant: 'danger',
        //   },
        //   autogenerate: {
        //     directory: 'reference',
        //   },
        // },
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
        {
          label: 'Standards and Practices',
          collapsed: true,
          badge: {
            text: 'todo',
            variant: 'danger',
          },
          items: [
            {
              label: 'ARCs',
              collapsed: true,
              autogenerate: {
                directory: 'standards/arcs',
              },
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    // https://astro-d2.vercel.app/configuration
    d2({
      sketch: true,
      layout: 'dagre',
    }),
  ],
  markdown: {
    // Rehype plugin that adds target="_blank" and rel="noopener noreferrer" to external links
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]],
  },
  vite: {
    resolve: {
      alias: {
        '@assets': resolve('./src/assets'),
        '@images': resolve('./src/assets/images'),
      },
    },
  },
});
