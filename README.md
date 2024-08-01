# Developer Portal

## Project setup

- run `git clone` in your terminal to clone this repo
- run `pnpm install` in your terminal to install all dependencies
- run `pnpm run dev` in your terminal to start a local developer environment

## Information Architecture

All the documentation is stored under `./src/content/docs/`:

The sidebar menu configuration can be found at `./astro.config.mjs`

## Stack related stuff (Astro + Starlight)

### 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/images` and embedded in Markdown with a relative link.

You can use the alias `@images` to simplify the image paths, e.g., `@images/smart-contract-workflow.png`

SVG icons must go into `src/icons` to be used with the `astro-icon` component. The built-in Starlight icon component does not support custom local icons. You can also specify the ID of any icon in the Iconify collection. [See usage guide here](https://github.com/natemoo-re/astro-icon?tab=readme-ov-file#iconify-icons).

Static assets, like favicons, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

### Useful Links

- [Starlight’s docs](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build)
