# My Portfolio

A modern, animated portfolio website built with cutting-edge technologies to showcase projects, skills, and experience. Features smooth animations, responsive design, and an engaging user interface.

## Features

- **Animated Hero Section** - Dynamic name animation and engaging visual effects
- **Lava Blob Design** - Eye-catching gradient background animations
- **Skills Showcase** - Visual display of technical skills with icons
- **Projects Section** - Highlight your best work
- **Contact Page** - Easy way for visitors to get in touch
- **Responsive Design** - Looks great on all devices
- **Smooth Animations** - Powered by Framer Motion for fluid interactions
- **Modern Styling** - Tailwind CSS with custom gradients and effects

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The site will automatically reload as you edit files.

##  Project Structure

```
app/
├── page.tsx              # Home page with hero section
├── layout.tsx            # Root layout
├── navbar.tsx            # Navigation bar
├── globals.css           # Global styles
├── MotionSection.tsx     # Animation wrapper component
├── AnimatedName.tsx      # Animated name display
├── LavaBlobs.tsx         # Background blob animations
├── LavaLampSVG.tsx       # SVG lava lamp graphics
├── UniversityPopup.tsx   # University popup component
├── about/
│   └── page.tsx          # About page
├── projects/
│   └── page.tsx          # Projects showcase
└── contact/
    └── page.tsx          # Contact page
```

##  Tech Stack

- **Framework**: [Next.js 16.2.1](https://nextjs.org) - React framework with App Router
- **UI Library**: [React 19.2.4](https://react.dev) - JavaScript library for building UIs
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Animations**: [Framer Motion 12.38.0](https://www.framer.com/motion/) - Production-ready animation library
- **Language**: [TypeScript 5](https://www.typescriptlang.org) - Type-safe JavaScript
- **Linting**: [ESLint 9](https://eslint.org) - JavaScript code quality tool

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

##  Customization

### Adding Skills
Edit the skills array in `app/page.tsx` to add or modify your technical skills. Add corresponding skill images to `public/skills/`.

### Updating Content
- **About**: Edit `app/about/page.tsx`
- **Projects**: Edit `app/projects/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`

### Styling
- Global styles: `app/globals.css`
- Tailwind config: Uses default configuration
- Custom gradients and colors are defined inline with Tailwind classes

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

[Read the Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

##  Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

