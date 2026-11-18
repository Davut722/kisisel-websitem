---
name: styling
description: Styling rules for this project, covering Tailwind v4 as the default and Sass CSS modules for what Tailwind can't express cleanly. Use when styling any component or adding global styles or tokens.
---

# Styling

## Tailwind first

- Tailwind v4 is loaded in `src/app/globals.css` with `@import "tailwindcss"`. There is no `tailwind.config.js`.
- Add design tokens in the `@theme` block in `globals.css`, not as arbitrary values scattered through components.
- `globals.css` stays plain CSS. Never convert it to `.scss`, because Tailwind must not run through Sass.

## Sass when needed

Use a co-located CSS module (`Component.module.scss`) for complex selectors, keyframes, pseudo-elements, or long state styles.

Shared partials live in `src/styles/`. That folder is on the Sass load path (`next.config.mjs`), so you can import them by name:

```scss
@use "variables" as *;
```

- Use `@use`, not `@import`.
- Keep partials for Sass-only values (easings, breakpoints). Add a partial such as `_mixins.scss` only when something needs it. Colors and spacing belong in Tailwind `@theme`.
- Combine both on an element: `className={`${styles.card} p-6 rounded-xl`}`.
