"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const HIGHLIGHTS = [
  {
    label: "Deneyim",
    title: "Huawei Student Developers (HSD) Bandırma",
    meta: "Sponsorluk & Organizasyon Başkan Yrd. · 2026 — Halen",
  },
  {
    label: "Eğitim",
    title: "Bandırma Onyedi Eylül Üniversitesi",
    meta: "Bilgisayar Mühendisliği · 2024 — Devam",
  },
  {
    label: "Teknolojiler",
    title: "C++ · JavaScript · Node.js · React · Next.js · Firebase",
    meta: "Veri Yapıları, OOP, Full-Stack Web Geliştirme",
  },
];

export const About = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".about-reveal",
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".about-reveal", { autoAlpha: 1 });
      });
    },
    { scope: container },
  );

  return (
    <section
      id="about"
      ref={container}
      className="border-b border-border px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: Intro */}
        <div className="lg:col-span-6">
          <p className="about-reveal invisible mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            03 / HAKKIMDA
          </p>
          <h2 className="about-reveal invisible font-display text-3xl font-extrabold tracking-tight text-foreground uppercase md:text-5xl">
            MÜHENDİSLİK ODAKLI YAKLAŞIM.
          </h2>
          <p className="about-reveal invisible mt-6 text-base leading-relaxed text-muted md:text-lg">
            Bandırma Onyedi Eylül Üniversitesi Bilgisayar Mühendisliği öğrencisi
            olarak hem teknik çözüm üretme hem de topluluk liderliği
            alanlarında aktif rol alıyorum.
          </p>
          <p className="about-reveal invisible mt-4 text-base leading-relaxed text-muted md:text-lg">
            C++, veri yapıları ve modern full-stack web teknolojileriyle
            ölçeklenebilir uygulamalar geliştiriyor; ekip çalışmasına ve temiz
            kod pratiklerine önem veriyorum.
          </p>
        </div>

        {/* Right: Structured Experience & Stack */}
        <div className="flex flex-col justify-center divide-y divide-border border-y border-border lg:col-span-6">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="about-reveal invisible py-6">
              <span className="font-mono text-xs tracking-widest text-accent uppercase">
                {item.label}
              </span>
              <h3 className="mt-1.5 font-display text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
