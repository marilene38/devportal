import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Algorand Developer Portal",
      logo: {
        src: "/src/assets/images/portal-logo.svg",
        alt: "Algorand Developer Portal",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Build",
          items: [
            {
              label: "AlgoKit",
              collapsed: true,
              autogenerate: {
                directory: "build/algokit",
              },
            },
            {
              label: "Accounts",
              collapsed: true,
              autogenerate: {
                directory: "build/assets",
              },
            },
            {
              label: "Assets",
              collapsed: true,
              autogenerate: {
                directory: "build/assets",
              },
            },
            {
              label: "Transactions",
              collapsed: true,
              autogenerate: {
                directory: "build/transactions",
              },
            },
            {
              label: "Smart Contracts",
              collapsed: true,
              autogenerate: {
                directory: "build/smart-contracts",
              },
            },
          ],
        },
        {
          label: "Algorand Protocol",
          collapsed: true,
          badge: {
            text: "todo",
            variant: "danger",
          },
          items: [
            {
              label: "Consensus",
              badge: {
                text: "todo",
                variant: "danger",
              },
              autogenerate: {
                directory: "protocol/consensus",
              },
            },
            {
              label: "Node",
              badge: {
                text: "todo",
                variant: "danger",
              },
              autogenerate: {
                directory: "protocol/node",
              },
            },
            {
              label: "APIs",
              badge: {
                text: "todo",
                variant: "danger",
              },
              autogenerate: {
                directory: "protocol/api",
              },
            },
            {
              label: "State Proofs",
              badge: {
                text: "todo",
                variant: "danger",
              },
              autogenerate: {
                directory: "protocol/state-proofs",
              },
            },
            {
              label: "Features",
              badge: {
                text: "todo",
                variant: "danger",
              },
              autogenerate: {
                directory: "protocol/features",
              },
            },
            {
              label: "AVM",
              badge: {
                text: "todo",
                variant: "danger",
              },
              autogenerate: {
                directory: "protocol/avm",
              },
            },
          ],
        },
        {
          label: "Reference",
          collapsed: true,
          badge: {
            text: "todo",
            variant: "danger",
          },
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Running a Node",
          collapsed: true,
          badge: {
            text: "todo",
            variant: "danger",
          },
          autogenerate: {
            directory: "node_running",
          },
        },
        {
          label: "Security & Best Practices",
          collapsed: true,
          badge: {
            text: "todo",
            variant: "danger",
          },
          autogenerate: {
            directory: "security",
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
