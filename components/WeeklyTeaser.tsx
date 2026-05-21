"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Tag, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeeklyTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".weekly-anim"), {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="Weekly specials"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-ember)] to-[#A6501F] grain" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 text-center text-[var(--brand-cream)]">
        <div className="weekly-anim inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.12)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-[11px] uppercase tracking-[0.22em] font-medium mb-6">
          <Tag className="w-3.5 h-3.5" />
          This Week&rsquo;s Deals
        </div>
        <h2 className="weekly-anim font-display headline-large max-w-3xl mx-auto">
          New specials drop every week.
          <br />
          <span className="italic">Don&rsquo;t miss them.</span>
        </h2>
        <p className="weekly-anim mt-6 text-[17px] opacity-90 max-w-xl mx-auto leading-relaxed">
          Fresh produce deals, butcher counter savings, bakery specials, and
          grill combos — updated every Monday on our Facebook page.
        </p>
        <div className="weekly-anim mt-8">
          <Link
            href="/weekly-ad"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand-cream)] text-[var(--brand-deep)] font-semibold text-[15px] hover:bg-white transition-colors group"
          >
            See This Week&rsquo;s Ad
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
