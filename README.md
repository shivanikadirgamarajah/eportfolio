# Shivani Kadirgamarajah Portfolio

A responsive personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The site highlights my projects, technical skills, experience, goals, resume, and contact information through an animated, modern interface. Originally built for a school project, was then refined and maintained. 

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Typed.js
- ESLint

## Architecture

The application uses the Next.js App Router. `app/layout.tsx` provides the shared page shell, navigation, fonts, metadata, and global styles. The home route in `app/page.tsx` assembles the hero, skills, about, experience, goals, and resume sections from `app/sections/`.

Other routes live in their own folders under `app/`:

- `/skills`, `/about`, and `/contact` are standalone pages.
- `/projects` shows the project list, and `/projects/[id]` renders a project detail page for a matching ID.

Project and skill content is defined in the route files as local data. Images, video, and the resume PDF are served from `public/`. There is no CMS or application database in this repository. The contact route currently provides a form UI without a submission handler or backing API. The home sections and project views use client-side React and Framer Motion for interactive animation; simpler pages render without client-side state.

## Getting Started

The application is located in `my-portfolio/`. From the repository root, enter that directory; run all npm commands there.

### Prerequisites

- Node.js 20.9 or newer
- npm

### Installation

```bash
cd my-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Design Decisions

- **Content stays in the app:** Skills and project details are maintained alongside their pages, keeping this portfolio straightforward to update and deploy without a CMS or database.
- **Responsive utility styling:** Tailwind CSS utilities handle layout and breakpoints, while `app/globals.css` contains shared styles and custom animation keyframes.
- **Motion supports the visual experience:** Framer Motion powers section reveals, ambient backgrounds, and hover feedback. Interactive content uses React state where needed.
- **Local static assets:** Images, the profile video, and the downloadable resume live in `public/`, so the site can serve them directly without a separate asset service.

## Testing

There is no unit, integration, or end-to-end test runner configured in the repository. The available automated checks are:

```bash
npm run lint
npm run build
```

`npm run lint` runs ESLint. `npm run build` creates a production build and catches build-time issues. For manual QA, check the home section links, the skills and project routes, project detail pages (including an unknown project ID), local images and resume link, and the layout at mobile and desktop widths. Also check the interactive controls with a keyboard and pointer.

## Deployment

The repository does not include a provider-specific deployment configuration or CI workflow. Deploy it as a Next.js application and set the host's project/root directory to `my-portfolio/`. For a Node.js host, install from the lockfile, build, then start the production server from that directory:

```bash
npm ci
npm run build
npm start
```

The local production server is available at `http://localhost:3000` after it starts. Use a hosting platform that supports running Next.js; the app is not configured as a static-only export.

## Author

Built by Shivani Kadirgamarajah.

