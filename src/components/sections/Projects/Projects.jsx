"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/lib/projects";

export const Projects = () => {
  const container = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".projects-reveal",
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.08,
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current;
          if (!track || !container.current) return;

          const getScrollDistance = () =>
            Math.max(0, track.scrollWidth - container.current.clientWidth + 48);

          gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: container.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => `+=${getScrollDistance()}`,
              invalidateOnRefresh: true,
            },
          });
        },
      );

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".projects-reveal", { autoAlpha: 1 });
      });
    },
    { scope: container },
  );

  return (
    <section
      id="projects"
      ref={container}
      className="relative flex flex-col justify-center overflow-hidden border-b border-border py-16 md:min-h-dvh md:py-20"
    >
      {/* Section Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 px-6 md:mb-14 md:flex-row md:items-end md:px-12">
        <div>
          <p className="projects-reveal invisible mb-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            01 / SEÇİLİ ÇALIŞMALAR
          </p>
          <h2 className="projects-reveal invisible font-display text-4xl font-extrabold tracking-tight text-foreground uppercase md:text-6xl">
            PROJELER
          </h2>
        </div>

        <p className="projects-reveal invisible max-w-sm font-mono text-xs leading-relaxed text-muted md:text-right">
          KAYDIRARAK İNCELEYİN — DETAYLAR İÇİN HERHANGİ BİR KARTA TIKLAYIN
        </p>
      </div>

      {/* Horizontal Track */}
      <div className="w-full snap-x snap-mandatory overflow-x-auto px-6 pb-4 md:snap-none md:overflow-visible md:px-12 md:pb-0">
        <div
          ref={trackRef}
          className="flex w-max gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projeler/${project.slug}`}
              className="projects-reveal invisible group relative flex w-[82vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-[65vw] md:w-[44vw] md:snap-align-none md:p-8 lg:w-[34vw]"
            >
              {/* Subtle Ambient Glow on Hover */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accentTone} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Top Row: Index + Badge */}
              <div className="relative z-10 flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-medium text-accent">
                  /{project.index}
                </span>
                <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] tracking-wider text-muted uppercase transition-colors group-hover:border-accent/40 group-hover:text-foreground">
                  {project.badge}
                </span>
              </div>

              {/* Visual Preview Frame */}
              <div className="relative z-10 my-8 flex h-44 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-background/80 md:h-52">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} arayüz önizlemesi`}
                    fill
                    sizes="(max-width: 768px) 82vw, (max-width: 1024px) 44vw, 34vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div
                      aria-hidden="true"
                      className="grid w-full grid-cols-6 gap-2 p-6 opacity-30 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-60"
                    >
                      <div className="col-span-4 h-16 rounded border border-border bg-surface" />
                      <div className="col-span-2 h-16 rounded border border-accent/40 bg-accent/10" />
                      <div className="col-span-2 h-12 rounded border border-border bg-surface" />
                      <div className="col-span-4 h-12 rounded border border-border bg-surface" />
                    </div>

                    <span
                      aria-hidden="true"
                      className="font-display absolute text-3xl font-extrabold tracking-tighter text-foreground/15 uppercase transition-all duration-300 group-hover:scale-105 group-hover:text-accent/35 md:text-4xl"
                    >
                      {project.category}
                    </span>
                  </>
                )}
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {project.subtitle}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border font-mono text-base text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    ↗
                  </span>
                </div>

                <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                {project.stack?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/80 bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
