"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

const NAV_LINKS = [
  { label: "Projeler", href: "#projects" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Hakkımda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

export const Navbar = () => {
  const lenis = useLenis();
  const pathname = usePathname();

  const handleNavClick = (e, href) => {
    if (pathname !== "/") return;

    e.preventDefault();
    if (href === "#top") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const target = document.querySelector(href);
    if (lenis && target) {
      lenis.scrollTo(target, { duration: 1.2 });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Ana navigasyon"
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 md:px-12">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "#top")}
          className="font-display text-sm font-extrabold tracking-tight text-foreground uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-base"
        >
          DAVUT <span className="text-accent">ÖRS</span>
        </Link>

        <ul className="flex items-center gap-4 font-mono text-[11px] tracking-widest text-muted uppercase sm:gap-6 md:text-xs">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={pathname === "/" ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
