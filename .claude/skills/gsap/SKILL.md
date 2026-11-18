---
name: gsap
description: How GSAP is wired into THIS project (imports, defaults, Lenis, flash-free reveals, reduced motion). Use whenever you write or change an animation, together with the official gsap-* skills. Where they differ, this skill wins.
---

# GSAP in this project

The official `gsap-*` skills cover the GSAP API. This skill covers only how it's wired here. Where they disagree, follow this one.

## Imports

Import from the project module, never from `gsap` or `@gsap/react` directly:

```js
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
```

`src/lib/gsap.js` registers plugins once and sets `gsap.defaults({ duration: 0.8, ease: "power3.out" })`.

- Don't call `gsap.registerPlugin` in components. To use another plugin (SplitText, Flip, ...), register and re-export it in `src/lib/gsap.js`.
- Don't repeat `duration` or `ease` in tweens. Override them only when a tween should move differently.

## Smooth scroll

Lenis is mounted once in `layout.js` through `SmoothScroll` (`src/components/providers/`). It scrolls the real window, runs on GSAP's ticker and calls `ScrollTrigger.update` on every scroll.

- ScrollTrigger works as is. Don't use `scrollerProxy` and don't add ScrollSmoother.
- Don't create another Lenis instance. Use `useLenis` from `lenis/react` to reach it (for example `lenis.scrollTo`).

## Pattern

Every animated component follows this shape. The demo sections show it in context: `Hero` (timeline on load), `HorizontalScroll` (pin and scrub, with `ease: "none"` overriding the default) and `ScrollReveal` (reveal on scroll):

```jsx
"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".item",
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.1 },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".item", { autoAlpha: 1 });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container}>
      <p className="item invisible">...</p>
    </section>
  );
};
```

## Project rules

- Elements that animate in start with Tailwind's `invisible` class and are revealed with `autoAlpha`. Otherwise the server-rendered HTML shows them before GSAP hides them, which causes a flash.
- Pass the scope to `gsap.matchMedia(container)`, because it doesn't inherit it from `useGSAP`. When motion is reduced, still reveal hidden elements with `gsap.set`.
