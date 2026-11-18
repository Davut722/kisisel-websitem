# nextween

A Next.js starter for animated sites. GSAP, ScrollTrigger and Lenis are set up and work together. Styling is Tailwind v4, with Sass when you need it. Plain JavaScript, no TypeScript.

## Setup

You need Node 20.9 or later.

1. Click **Use this template** on GitHub to make your own copy of this repo.
2. Clone your copy and run:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command          | What it does                  |
| ---------------- | ----------------------------- |
| `npm run dev`    | Start the dev server          |
| `npm run build`  | Build for production          |
| `npm start`      | Run the production build      |
| `npm run lint`   | Check the code with ESLint    |
| `npm run format` | Format the code with Prettier |
| `npm run reset`  | Delete the demo sections      |

## Where things go

- `src/app/` has the routes, the layout and `globals.css` with your colors.
- `src/components/sections/` has the page sections.
- `src/components/ui/` is for small reusable components.
- `src/lib/gsap.js` sets up GSAP. Always import GSAP from here.

## Rules

- Each component gets its own folder and a named export.
- Add `"use client"` only when a component needs it.
- Animate inside `useGSAP` and add a reduced-motion version.
- Elements that animate in start with the `invisible` class.
- Lenis is already running. Don't add a second one.
- Use Tailwind. Use a `.module.scss` file only when Tailwind can't do it.

## Your project

1. Change the title and description in `src/app/layout.js`.
2. Change the colors in `src/app/globals.css`.
3. Run `npm run reset`, then add your own sections.

## Claude Code

`CLAUDE.md` and the skills in `.claude/skills/` teach Claude Code how this project works. To add Vercel's optional React and UI skills:

```bash
npx skills add vercel-labs/agent-skills -a claude-code --copy -y -s vercel-react-best-practices -s web-design-guidelines
```

## License

MIT
