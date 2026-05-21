"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const items = [
  "Family Owned Since 1980",
  "Halal Certified",
  "Fresh Bread Baked Daily",
  "International Grocery",
  "Mediterranean Grill",
  "Open 7 Days a Week",
  "Three San Diego Locations",
  "Most Extensive Hookah Selection in San Diego",
  "Bulk Spices from $2",
];

function Star() {
  return (
    <span
      className="inline-block w-2 h-2 mx-7 rotate-45 bg-[var(--brand-gold)] opacity-70 align-middle"
      aria-hidden
    />
  );
}

export default function TrustMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 38,
        repeat: -1,
      });

      const el = containerRef.current;
      if (el) {
        el.addEventListener("mouseenter", () => tween.pause());
        el.addEventListener("mouseleave", () => tween.play());
      }
    });

    return () => ctx.revert();
  }, []);

  // Double the items so the loop is seamless when translated -50%
  const doubled = [...items, ...items];

  return (
    <section
      ref={containerRef}
      className="relative py-7 md:py-9 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden border-y border-[rgba(212,168,67,0.18)]"
      aria-label="What makes us special"
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xl md:text-2xl font-semibold tracking-tight flex items-center"
          >
            {item}
            <Star />
          </span>
        ))}
      </div>
    </section>
  );
}
