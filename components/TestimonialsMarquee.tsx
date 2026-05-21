"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelector(".testimonial-heading"), {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 70,
        repeat: -1,
      });

      const el = sectionRef.current;
      if (el) {
        const onEnter = () => tween.timeScale(0.25);
        const onLeave = () => tween.timeScale(1);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      }
    });

    return () => ctx.revert();
  }, []);

  const doubled = [...business.testimonials, ...business.testimonials];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--brand-surface)] overflow-hidden"
      aria-label="What customers say"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-12 md:mb-16">
        <div className="testimonial-heading text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-gold)]" />
            <span className="eyebrow">Verified Reviews</span>
            <span className="w-10 h-px bg-[var(--brand-gold)]" />
          </div>
          <h2 className="font-display text-[var(--brand-deep)] headline-large">
            What El Cajon
            <br />
            <span className="italic text-[var(--brand-ember)]">
              has been saying.
            </span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((t, i) => (
            <article
              key={`${t.author}-${i}`}
              className="w-[340px] md:w-[380px] flex-shrink-0 p-7 rounded-2xl bg-[var(--brand-cream)] border border-[rgba(122,106,90,0.18)] flex flex-col"
            >
              <Quote
                className="w-6 h-6 text-[var(--brand-gold)] mb-4"
                strokeWidth={2}
              />
              <p className="font-display text-[19px] leading-[1.45] text-[var(--brand-deep)] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 pt-5 border-t border-[rgba(122,106,90,0.12)]">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star
                      key={k}
                      className="w-3.5 h-3.5 fill-[var(--brand-gold)] text-[var(--brand-gold)]"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-[var(--brand-deep)]">
                    {t.author}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
                    {t.source}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
