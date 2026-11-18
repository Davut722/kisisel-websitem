"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SKILL_GROUPS = [
  {
    index: "01",
    title: "Programlama Dilleri",
    description:
      "Temel ve ileri düzey programlama prensipleri, bellek yönetimi ve performans optimizasyonu.",
    items: ["C++", "C", "JavaScript", "SQL"],
    span: "md:col-span-5",
  },
  {
    index: "02",
    title: "Web Teknolojileri",
    description:
      "Uçtan uca web uygulamaları, gerçek zamanlı veritabanı entegrasyonu ve akıcı dinamik arayüzler.",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Firebase",
      "Tailwind CSS",
      "GSAP",
      "HTML5 / CSS3",
    ],
    span: "md:col-span-7",
  },
  {
    index: "03",
    title: "Araçlar & Disiplinler",
    description:
      "Versiyon kontrolü, veri yapıları ve nesne yönelimli programlama (OOP) sistematiği.",
    items: ["Git", "GitHub", "Veri Yapıları", "OOP", "REST API"],
    span: "md:col-span-7",
  },
  {
    index: "04",
    title: "Topluluk & Liderlik",
    description:
      "Teknik atölyeler, sponsorluk süreçleri ve hackathon/ideathon ekip koordinasyonu.",
    items: [
      "HSD Başkan Yrd.",
      "Organizasyon",
      "Code4Future 3.lüğü",
      "Takım Çalışması",
    ],
    span: "md:col-span-5",
  },
];

export const Skills = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".skills-reveal",
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.09,
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".skills-reveal", { autoAlpha: 1 });
      });
    },
    { scope: container },
  );

  return (
    <section
      id="skills"
      ref={container}
      className="border-b border-border px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="skills-reveal invisible mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
              02 / YETENEKLER &amp; TEKNOLOJİ
            </p>
            <h2 className="skills-reveal invisible font-display text-3xl font-extrabold tracking-tight text-foreground uppercase md:text-5xl">
              TEKNİK YIĞIN.
            </h2>
          </div>

          <p className="skills-reveal invisible max-w-md text-sm leading-relaxed text-muted md:text-right md:text-base">
            Algoritmik temellerden modern full-stack web mimarilerine kadar
            aktif kullandığım araçlar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.index}
              className={`skills-reveal invisible group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/60 md:p-8 ${group.span}`}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-accent">
                    /{group.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-border transition-colors duration-300 group-hover:bg-accent"
                  />
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background/70 px-3 py-1.5 font-mono text-xs text-foreground/90 transition-colors group-hover:border-border/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
