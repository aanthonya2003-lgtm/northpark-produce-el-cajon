"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Testimonial = (typeof business.testimonials)[number];

function TestimonialCard({ t, i }: { t: Testimonial; i: number }) {
  return (
    <article
      key={`${t.author}-${i}`}
      className="w-[340px] md:w-[400px] flex-shrink-0 p-7 rounded-2xl bg-[var(--brand-cream-bright)] border border-[rgba(140,123,107,0.18)] flex flex-col mx-2.5"
    >
      <Quote
        className="w-6 h-6 text-[var(--brand-ember)] mb-4"
        strokeWidth={2}
      />
      <p className="font-display text-[19px] leading-[1.45] text-[var(--brand-deep)] flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 pt-5 border-t border-[rgba(140,123,107,0.18)]">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: t.rating }).map((_, k) => (
            <Star
              key={k}
              className="w-3.5 h-3.5 fill-[var(--brand-saffron)] text-[var(--brand-saffron)]"
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-[var(--brand-deep)]">
            {t.author}
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)] mono">
            {t.source}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowARef = useRef<HTMLDivElement>(null);
  const rowBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

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

      // Row A — scrolls left
      const tweenA = gsap.to(rowARef.current, {
        xPercent: -50,
        ease: "none",
        duration: 60,
        repeat: -1,
      });

      // Row B — scrolls right (starts offset at -50, animates to 0)
      gsap.set(rowBRef.current, { xPercent: -50 });
      const tweenB = gsap.to(rowBRef.current, {
        xPercent: 0,
        ease: "none",
        duration: 75,
        repeat: -1,
      });

      const el = sectionRef.current;
      if (el) {
        const onEnter = () => {
          tweenA.timeScale(0.25);
          tweenB.timeScale(0.25);
        };
        const onLeave = () => {
          tweenA.timeScale(1);
          tweenB.timeScale(1);
        };
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      }
    });

    return () => ctx.revert();
  }, []);

  const rowA = [...business.testimonials, ...business.testimonials];
  const rowB = [
    ...business.testimonials.slice(4),
    ...business.testimonials.slice(0, 4),
    ...business.testimonials.slice(4),
    ...business.testimonials.slice(0, 4),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--brand-surface)] overflow-hidden"
      aria-label="What customers say"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-12 md:mb-16 relative z-10">
        <div className="testimonial-heading text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Verified Reviews</span>
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
          </div>
          <h2 className="font-display text-[var(--brand-cream-bright)] headline-large">
            What El Cajon
            <br />
            <span className="italic text-[var(--brand-ember-light)]">
              has been saying.
            </span>
          </h2>
        </div>
      </div>

      {/* Two-row marquee (bidirectional) */}
      <div className="relative space-y-5">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-[var(--brand-surface)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-[var(--brand-surface)] to-transparent" />

        <div
          ref={rowARef}
          className="flex will-change-transform"
          style={{ width: "max-content" }}
          aria-hidden="false"
        >
          {rowA.map((t, i) => (
            <TestimonialCard key={`a-${t.author}-${i}`} t={t} i={i} />
          ))}
        </div>

        <div
          ref={rowBRef}
          className="flex will-change-transform"
          style={{ width: "max-content" }}
          aria-hidden="true"
        >
          {rowB.map((t, i) => (
            <TestimonialCard key={`b-${t.author}-${i}`} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
