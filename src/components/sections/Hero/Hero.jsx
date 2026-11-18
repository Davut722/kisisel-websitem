"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";
import { FlowBackground } from "@/components/ui/FlowBackground";
import { gsap, useGSAP } from "@/lib/gsap";

const TECH_ITEMS = [
  "C++",
  "JAVASCRIPT",
  "NEXT.JS",
  "REACT",
  "NODE.JS",
  "FIREBASE",
  "GSAP",
  "TAILWIND CSS",
  "SQL",
  "GIT & GITHUB",
];

export const Hero = () => {
  const container = useRef(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline();

        tl.fromTo(
          ".hero-meta",
          { y: -16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.08 },
        )
          .fromTo(
            ".hero-title-line",
            { y: 64, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.12 },
            "-=0.5",
          )
          .fromTo(
            ".hero-bottom",
            { y: 24, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.1 },
            "-=0.45",
          );

        gsap.to(".hero-marquee-track", {
          xPercent: -50,
          duration: 32,
          ease: "none",
          repeat: -1,
        });

        gsap.to(".hero-parallax", {
          yPercent: -12,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-name-left", {
          x: "-18vw",
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.25,
          },
        });

        gsap.to(".hero-name-right", {
          x: "34vw",
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.25,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".hero-reveal", { autoAlpha: 1 });
      });
    },
    { scope: container },
  );

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (lenis && target) {
      lenis.scrollTo(target, { duration: 1.2 });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={container}
      className="relative flex min-h-dvh flex-col justify-between overflow-hidden border-b border-border px-6 pt-20 md:px-12 md:pt-24"
    >
      <FlowBackground variant="hero" />

      {/* Top Meta Bar */}
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-widest text-muted uppercase">
        <span className="hero-meta hero-reveal invisible text-foreground">
          00 / PORTFOLYO &apos;26
        </span>

        <div className="hero-meta hero-reveal invisible flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span>STAJ &amp; PROJELERE AÇIK</span>
        </div>
      </header>

      {/* Center Giant Editorial Typography */}
      <div className="hero-parallax relative z-10 my-auto py-12 md:py-16">
        <p className="hero-title-line hero-reveal invisible mb-4 font-mono text-xs tracking-[0.2em] text-accent uppercase md:mb-6 md:text-sm">
          BİLGİSAYAR MÜHENDİSLİĞİ &amp; YAZILIM GELİŞTİRİCİ
        </p>

        <h1 className="font-display text-[clamp(3.75rem,15vw,13.5rem)] leading-[0.86] font-extrabold tracking-tighter text-foreground uppercase select-none">
          <span className="hero-title-line hero-reveal invisible block">
            <span className="hero-name-left inline-block">DAVUT</span>
          </span>
          <span className="hero-title-line hero-reveal invisible block text-accent">
            <span className="hero-name-right inline-block">ÖRS</span>
          </span>
        </h1>
      </div>

      {/* Bottom Intro & Action Strip + Infinite Marquee */}
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-6 border-t border-border/60 pt-6 pb-8 md:flex-row md:items-end">
          <p className="hero-bottom hero-reveal invisible max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Problem çözme odaklı, yenilikçi teknolojiler ve mühendislik
            pratikleriyle modern web deneyimleri inşa eden yazılım geliştirici.
          </p>

          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="hero-bottom hero-reveal invisible group inline-flex w-fit items-center gap-3 rounded-full border border-border bg-surface px-6 py-3 font-mono text-xs tracking-widest text-foreground uppercase transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span>Projeleri Keşfet</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </div>

        {/* Full-bleed Tech Stack Marquee */}
        <div
          aria-label="Kullanılan teknolojiler"
          className="hero-bottom hero-reveal invisible -mx-6 overflow-hidden border-t border-border/60 bg-surface/50 py-3.5 md:-mx-12"
        >
          <div className="hero-marquee-track flex w-max items-center font-mono text-xs tracking-[0.2em] text-muted uppercase">
            {[0, 1].map((loopIndex) => (
              <div
                key={loopIndex}
                aria-hidden={loopIndex === 1}
                className="flex shrink-0 items-center"
              >
                {[...TECH_ITEMS, ...TECH_ITEMS].map((item, itemIdx) => (
                  <span
                    key={`${loopIndex}-${itemIdx}-${item}`}
                    className="flex items-center"
                  >
                    <span className="px-5 text-foreground/80">{item}</span>
                    <span className="text-accent" aria-hidden="true">
                      •
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
