"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Newspaper, ExternalLink } from "lucide-react";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PressBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".press-item"), {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-[var(--brand-cream)] border-y border-[rgba(122,106,90,0.12)]"
      aria-label="Press coverage"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Newspaper className="w-4 h-4 text-[var(--brand-gold)]" />
          <span className="eyebrow">As Seen In</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
          {business.press.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="press-item group p-5 md:p-6 rounded-xl border border-[rgba(122,106,90,0.18)] hover:border-[var(--brand-gold)] hover:bg-[var(--brand-surface)] transition-all text-center flex flex-col items-center"
              aria-label={`${p.outlet}: ${p.title}`}
            >
              <span className="font-display text-lg md:text-xl font-bold text-[var(--brand-deep)] group-hover:text-[var(--brand-ember)] transition-colors leading-tight">
                {p.outlet}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted)] mt-2">
                {p.date}
              </span>
              <span className="mt-3 text-[12px] text-[var(--brand-muted)] line-clamp-2 leading-snug">
                {p.title}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[var(--brand-muted)] opacity-0 group-hover:opacity-100 transition-opacity mt-3" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
