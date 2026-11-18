"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const VARIANT_CONFIG = {
  hero: {
    viewBox: "0 0 1440 900",
    contours: [
      {
        d: "M-120 760 C 260 560, 480 820, 860 480 C 1140 230, 1280 280, 1560 120",
        className: "text-border/80",
        strokeWidth: 1.25,
      },
      {
        d: "M-80 620 C 300 400, 560 720, 920 380 C 1180 140, 1320 220, 1540 40",
        className: "text-accent/25",
        strokeWidth: 1.5,
      },
      {
        d: "M-60 240 C 280 80, 620 420, 980 220 C 1220 90, 1360 160, 1520 340",
        className: "text-border/60",
        strokeWidth: 1,
      },
      {
        d: "M120 940 C 440 700, 740 860, 1080 560 C 1280 390, 1380 420, 1560 300",
        className: "text-accent/15",
        strokeWidth: 1.25,
      },
    ],
    circle: { cx: 1160, cy: 440, r: 240 },
    dashes: [
      {
        d: "M-60 240 C 280 80, 620 420, 980 220 C 1220 90, 1360 160, 1520 340",
        className: "text-accent/35",
      },
      {
        d: "M-120 760 C 260 560, 480 820, 860 480 C 1140 230, 1280 280, 1560 120",
        className: "text-border/90",
      },
    ],
    pulses: [
      {
        d: "M-80 620 C 300 400, 560 720, 920 380 C 1180 140, 1320 220, 1540 40",
        className: "text-accent/45",
        strokeWidth: 1.5,
        dashArray: "0.09 0.41",
      },
      {
        d: "M-120 760 C 260 560, 480 820, 860 480 C 1140 230, 1280 280, 1560 120",
        className: "text-foreground/30",
        strokeWidth: 1.5,
        dashArray: "0.07 0.43",
      },
      {
        d: "M120 940 C 440 700, 740 860, 1080 560 C 1280 390, 1380 420, 1560 300",
        className: "text-muted/45",
        strokeWidth: 1.5,
        dashArray: "0.08 0.42",
      },
    ],
  },
  contact: {
    viewBox: "0 0 1440 700",
    contours: [
      {
        d: "M-120 120 C 220 40, 480 340, 860 220 C 1140 130, 1300 280, 1560 190",
        className: "text-border/80",
        strokeWidth: 1.25,
      },
      {
        d: "M-80 60 C 260 260, 580 140, 940 360 C 1200 520, 1340 400, 1540 520",
        className: "text-accent/25",
        strokeWidth: 1.5,
      },
      {
        d: "M-60 340 C 320 520, 660 240, 1020 460 C 1240 590, 1380 480, 1540 360",
        className: "text-border/60",
        strokeWidth: 1,
      },
      {
        d: "M-100 560 C 280 420, 620 640, 980 480 C 1220 370, 1360 460, 1560 620",
        className: "text-accent/15",
        strokeWidth: 1.25,
      },
    ],
    circle: { cx: 1180, cy: 360, r: 210 },
    dashes: [
      {
        d: "M-60 340 C 320 520, 660 240, 1020 460 C 1240 590, 1380 480, 1540 360",
        className: "text-accent/35",
      },
      {
        d: "M-120 120 C 220 40, 480 340, 860 220 C 1140 130, 1300 280, 1560 190",
        className: "text-border/90",
      },
    ],
    pulses: [
      {
        d: "M-80 60 C 260 260, 580 140, 940 360 C 1200 520, 1340 400, 1540 520",
        className: "text-accent/45",
        strokeWidth: 1.5,
        dashArray: "0.09 0.41",
      },
      {
        d: "M-120 120 C 220 40, 480 340, 860 220 C 1140 130, 1300 280, 1560 190",
        className: "text-foreground/30",
        strokeWidth: 1.5,
        dashArray: "0.07 0.43",
      },
      {
        d: "M-100 560 C 280 420, 620 640, 980 480 C 1220 370, 1360 460, 1560 620",
        className: "text-muted/45",
        strokeWidth: 1.5,
        dashArray: "0.08 0.42",
      },
    ],
  },
};

export const FlowBackground = ({
  variant = "hero",
  triggerOnScroll = false,
}) => {
  const container = useRef(null);
  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.hero;

  useGSAP(
    () => {
      const mm = gsap.matchMedia(container);

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".flow-contour",
          { strokeDashoffset: 1, autoAlpha: 0 },
          {
            strokeDashoffset: 0,
            autoAlpha: 1,
            duration: 1.4,
            stagger: 0.14,
            ease: "power2.out",
            ...(triggerOnScroll
              ? {
                  scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                    once: true,
                  },
                }
              : {}),
          },
        );

        gsap.fromTo(
          ".flow-pulse",
          { strokeDashoffset: 1 },
          {
            strokeDashoffset: 0,
            duration: 3.8,
            stagger: 0.6,
            ease: "none",
            repeat: -1,
          },
        );

        gsap.fromTo(
          ".flow-dash",
          { strokeDashoffset: 0 },
          {
            strokeDashoffset: -0.24,
            duration: 4.5,
            ease: "none",
            repeat: -1,
          },
        );

        gsap.to(".flow-drift", {
          y: -14,
          rotation: 0.8,
          transformOrigin: "center center",
          duration: 6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        const xTo = gsap.quickTo(".flow-mouse", "x", {
          duration: 0.9,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(".flow-mouse", "y", {
          duration: 0.9,
          ease: "power3.out",
        });

        const handleMouseMove = (e) => {
          const xNorm = e.clientX / window.innerWidth - 0.5;
          const yNorm = e.clientY / window.innerHeight - 0.5;
          xTo(xNorm * 28);
          yTo(yNorm * 20);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".flow-contour", { strokeDashoffset: 0, autoAlpha: 1 });
        gsap.set(".flow-pulse, .flow-dash", { autoAlpha: 0 });
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 overflow-hidden"
    >
      <div className="flow-mouse h-full w-full">
        <svg
          viewBox={config.viewBox}
          preserveAspectRatio="xMidYMid slice"
          className="h-full w-full"
          fill="none"
        >
          <g className="flow-drift">
            {config.contours.map((contour, idx) => (
              <path
                key={idx}
                className={`flow-contour invisible ${contour.className}`}
                d={contour.d}
                stroke="currentColor"
                strokeWidth={contour.strokeWidth}
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
              />
            ))}

            <circle
              className="flow-contour invisible text-border/50"
              cx={config.circle.cx}
              cy={config.circle.cy}
              r={config.circle.r}
              stroke="currentColor"
              strokeWidth="1"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
            />

            {config.dashes.map((dash, idx) => (
              <path
                key={idx}
                className={`flow-dash ${dash.className}`}
                d={dash.d}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="0.04 0.08"
              />
            ))}

            {config.pulses.map((pulse, idx) => (
              <path
                key={idx}
                className={`flow-pulse ${pulse.className}`}
                d={pulse.d}
                stroke="currentColor"
                strokeWidth={pulse.strokeWidth}
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray={pulse.dashArray}
                strokeDashoffset="1"
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};
