"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";
import { FlowBackground } from "@/components/ui/FlowBackground";
import { gsap, useGSAP } from "@/lib/gsap";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Davut722",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/davut-%C3%B6rs-3700a4340/",
  },
];

export const Contact = () => {
  const container = useRef(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".contact-reveal",
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: container.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".contact-reveal", { autoAlpha: 1 });
      });
    },
    { scope: container },
  );

  const handleScrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      ref={container}
      className="relative overflow-hidden px-6 pt-24 pb-10 md:px-12 md:pt-32"
    >
      <FlowBackground variant="contact" triggerOnScroll />

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="contact-reveal invisible mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
          04 / İLETİŞİM
        </p>

        <h2 className="contact-reveal invisible font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.92] font-extrabold tracking-tight text-foreground uppercase">
          BİRLİKTE <br />
          <span className="text-accent">ÇALIŞALIM.</span>
        </h2>

        <p className="contact-reveal invisible mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Staj fırsatları, yeni projeler veya teknik sohbetler için doğrudan
          e-posta gönderebilirsiniz.
        </p>

        {/* Links */}
        <div className="contact-reveal invisible mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:davutors12@gmail.com?subject=İletişim%20Talebi:%20Portfolyo"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-medium tracking-widest text-accent-foreground uppercase transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span>davutors12@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>

          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 font-mono text-xs tracking-widest text-foreground uppercase transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-border pt-8 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <p>© 2026 Davut Örs</p>

          <button
            type="button"
            onClick={handleScrollTop}
            className="inline-flex w-fit cursor-pointer items-center gap-2 text-foreground uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span>Yukarı Çık</span>
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
