# Personal Portfolio ([Your Name])

This is the source code for my personal portfolio website, built with Astro and Tailwind CSS.

## Prerequisites

- Node.js (LTS recommended)
- pnpm (`npm install -g pnpm`)

## Development

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```
    *(Run this command inside the `my-portfolio` directory after using the creation script)*

2.  **Start the development server:**
    ```bash
    pnpm dev
    ```
    The site will be available at `http://localhost:4321` (or another port if 4321 is busy).

## Build

To create a production-ready build:

```bash
pnpm build
```
The output will be in the `dist/` directory.

## Customization

-   Update personal information (`[Your Name]`, `[Your Role]`, etc.) primarily in `src/pages/index.astro`, `src/components/Header.astro`, and `src/components/Footer.astro`.
-   Replace placeholder project data in `src/pages/index.astro`.
-   Add your actual resume PDF to the `public/` folder and update the link in `src/pages/index.astro`.
-   Customize styling further in `tailwind.config.mjs` and `src/styles/global.css`.
-   Replace `public/favicon.svg` with your own icon.
-   Update links in `src/components/Footer.astro` and `src/pages/index.astro`.
# porfolio
