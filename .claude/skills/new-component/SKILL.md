---
name: new-component
description: Create a React component in this project using its folder layout and conventions (plain JavaScript, no TypeScript). Use when adding a component, section, or UI element, or when deciding where one should live.
---

# New component

Plain JavaScript only: `.jsx` for components, `.js` for everything else. Never add TypeScript files or types.

## Where it goes

- `src/components/ui/` for small reusable pieces (Button, Link, Icon).
- `src/components/sections/` for page blocks (Hero, Footer, ...).
- `src/components/providers/` for app-wide client wrappers mounted in `layout.js` (SmoothScroll).
- `src/hooks/` for shared custom hooks (`useSomething.js`).
- `src/lib/` for shared setup and helpers (`gsap.js` lives here).
- `src/app/` for routes only. Pages compose sections and hold no heavy logic.

## Folder shape

```
src/components/sections/Hero/
  Hero.jsx
  Hero.module.scss   # only if Tailwind isn't enough
  index.js           # export { Hero } from "./Hero";
```

## Rules

- Components are const arrow functions with named exports (`export const Hero = () => {}`), no default exports. Next.js route files (`page.js`, `layout.js`) are the exception.
- Import through the folder: `import { Hero } from "@/components/sections/Hero";`
- The one-line `index.js` per folder is fine. Never add an aggregate barrel (such as `components/index.js` re-exporting everything); that's what `vercel-react-best-practices` warns about.
- Server component by default. Add `"use client"` only when the component uses state, effects, refs, event handlers, or GSAP.
- Keep client components small so most of the tree stays on the server.
- Style with Tailwind first. See the `styling` skill. For animation, see the `gsap` skill.
