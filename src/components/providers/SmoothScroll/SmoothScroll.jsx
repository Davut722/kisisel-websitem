"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Lenis runs on GSAP's ticker so smooth scroll and ScrollTrigger share one frame loop.
// Lenis turns itself off when the user prefers reduced motion.
export const SmoothScroll = ({ children }) => {
  const lenis = useLenis(ScrollTrigger.update);

  useEffect(() => {
    if (!lenis) return;

    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ autoRaf: false, anchors: true }}>
      {children}
    </ReactLenis>
  );
};
