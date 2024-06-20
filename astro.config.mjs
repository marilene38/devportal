import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Algorand Developer Portal",
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
              collapsed: false,
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
          badge: {
            text: "todo",
            variant: "danger",
          },
          items: [
            {
              label: "Consensus",
              autogenerate: {
                directory: "protocol/consensus",
              },
            },
            {
              label: "Node",
              autogenerate: {
                directory: "protocol/node",
              },
            },
            {
              label: "APIs",
              autogenerate: {
                directory: "protocol/api",
              },
            },
            {
              label: "State proofs",
              autogenerate: {
                directory: "protocol/state-proofs",
              },
            },
            {
              label: "Features",
              autogenerate: {
                directory: "protocol/features",
              },
            },
            {
              label: "AVM",
              autogenerate: {
                directory: "protocol/avm",
              },
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Running a node",
          badge: {
            text: "todo",
            variant: "danger",
          },
          autogenerate: {
            directory: "node_running",
          },
        },
        {
          label: "Security and best practices",
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