"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Newspaper, ExternalLink, ArrowUpRight } from "lucide-react";
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
      className="relative py-16 md:py-20 bg-[var(--brand-cream-bright)] border-y border-[rgba(140,123,107,0.18)]"
      aria-label="Press coverage"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <Newspaper className="w-4 h-4 text-[var(--brand-ember)]" />
          <span className="eyebrow">As Seen In · Press Coverage</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto">
          {business.press.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="press-item group relative p-5 md:p-6 rounded-xl border border-[rgba(140,123,107,0.2)] bg-white hover:border-[var(--brand-ember)] hover:shadow-[0_12px_40px_-20px_rgba(200,146,42,0.45)] transition-all text-center flex flex-col items-center"
              aria-label={`${p.outlet}: ${p.title}`}
            >
              <span
                className={`press-badge ${p.badgeClass} text-lg md:text-xl leading-tight`}
              >
                {p.outlet}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-muted)] mt-2 mono font-medium">
                {p.date}
              </span>
              <span className="mt-3 text-[12px] text-[var(--brand-muted)] line-clamp-3 leading-snug">
                {p.title}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--brand-muted)] opacity-0 group-hover:opacity-100 transition-opacity mt-3" />
              <ExternalLink className="hidden" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
