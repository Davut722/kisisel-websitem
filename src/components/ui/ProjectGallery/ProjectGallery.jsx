"use client";

import Image from "next/image";
import { useState } from "react";

export const ProjectGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div
      className="mt-10"
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={`${title} görsel galerisi`}
    >
      {/* Main Active Frame */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface">
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title} ekran görüntüsü ${activeIndex + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover transition-opacity duration-300"
          priority
        />

        {/* Top Bar Overlay: Counter + Prev/Next Controls */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="pointer-events-auto rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 font-mono text-xs tracking-widest text-foreground backdrop-blur-md">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          {images.length > 1 && (
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Önceki görsel"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-background/80 font-mono text-sm text-foreground backdrop-blur-md transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Sonraki görsel"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-background/80 font-mono text-sm text-foreground backdrop-blur-md transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Thumbnail Strip */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 gap-2.5 sm:gap-3">
          {images.map((src, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Görsel ${idx + 1}`}
                aria-pressed={isActive}
                className={`relative aspect-video cursor-pointer overflow-hidden rounded-xl border bg-surface transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? "border-accent ring-2 ring-accent/30"
                    : "border-border opacity-55 hover:border-muted hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${title} küçük önizleme ${idx + 1}`}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
