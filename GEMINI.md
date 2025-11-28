# Project: Modern Portfolio Template

## Overview
This is a personal portfolio website template built with **Next.js 16** (App Router), **React 19**, and **TypeScript**. It uses **Tailwind CSS v4** for styling and **Framer Motion** for animations. The project is designed to be modern, responsive, and easy to customize.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`

## Key Commands
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint checks |

## Project Structure
```
/
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   │   ├── layout.tsx  # Root layout with font and metadata config
│   │   ├── page.tsx    # Main landing page
│   │   └── globals.css # Global styles and Tailwind theme config
│   ├── components/     # React components
│   │   ├── sections/   # Page sections (Hero, Projects, Skills, etc.)
│   │   └── ui/         # Reusable UI atoms (Button, Card, Input, etc.)
│   └── lib/            # Utility functions (e.g., tailwind class merging)
├── public/             # Static assets (images, SVGs)
├── next.config.ts      # Next.js configuration
└── tailwind.config.ts  # Tailwind configuration (note: v4 uses CSS variables)
```

## Development Conventions

### Styling (Tailwind CSS v4)
- This project uses **Tailwind CSS v4**.
- Theme variables are defined in `src/app/globals.css` using the `@theme` directive and standard CSS variables (HSL format).
- Dark mode is the default aesthetic.
- **Do not** use a `tailwind.config.js` file unless strictly necessary; prefer CSS variables in `globals.css`.

### Components
- Components are functional and typed with TypeScript.
- **UI Components:** Located in `src/components/ui`, likely following a pattern similar to shadcn/ui (using `cva` for variants).
- **Section Components:** Major page sections (Hero, Contact, etc.) are in `src/components/sections`.

### State & Animation
- Use `framer-motion` for page transitions and element animations.
- Client components should be marked with `"use client"` directive at the top of the file.

### Fonts
- Uses `next/font` with the **Geist** font family (Sans and Mono).
