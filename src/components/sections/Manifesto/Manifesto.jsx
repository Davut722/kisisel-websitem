"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const STATEMENT_WORDS = [
  { text: "TEMİZ", accent: false },
  { text: "KOD.", accent: true },
  { text: "HIZLI", accent: false },
  { text: "ARAYÜZLER.", accent: true },
  { text: "GERÇEK", accent: false },
  { text: "PROBLEMLERE", accent: false },
  { text: "ÖLÇEKLENEBİLİR", accent: true },
  { text: "MÜHENDİSLİK", accent: false },
  { text: "ÇÖZÜMLERİ", accent: false },
  { text: "ÜRETİYORUM.", accent: false },
];

export const Manifesto = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".manifesto-reveal",
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: container.current,
              start: "top 85%",
              once: true,
            },
          },
        );

        gsap.fromTo(
          ".manifesto-word",
          { opacity: 0.16 },
          {
            opacity: 1,
            stagger: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              start: "top 75%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".manifesto-reveal", { autoAlpha: 1 });
        gsap.set(".manifesto-word", { opacity: 1 });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="border-b border-border px-6 py-24 md:px-12 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <p className="manifesto-reveal invisible mb-8 font-mono text-xs tracking-[0.2em] text-accent uppercase">
          MÜHENDİSLİK VİZYONU
        </p>

        <h2 className="manifesto-reveal invisible font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.06] font-extrabold tracking-tight uppercase">
          {STATEMENT_WORDS.map((word, idx) => (
            <span
              key={`${word.text}-${idx}`}
              className={`manifesto-word mr-[0.28em] inline-block ${
                word.accent ? "text-accent" : "text-foreground"
              }`}
            >
              {word.text}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};
