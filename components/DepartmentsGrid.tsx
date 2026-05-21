"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { departments } from "@/lib/departments";
import { wixSize } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DepartmentsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const cards = sectionRef.current?.querySelectorAll(".dep-card");
      cards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          clipPath: "inset(0 0 100% 0)",
          duration: 1.0,
          delay: (i % 4) * 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--brand-cream)] overflow-hidden"
      aria-label="Departments"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div ref={headingRef} className="max-w-3xl mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Inside the Market</span>
          </div>
          <h2 className="font-display text-[var(--brand-deep)] headline-large">
            A world of flavors,
            <br />
            <span className="italic text-[var(--brand-ember)]">
              under one roof.
            </span>
          </h2>
          <p className="mt-6 text-[17px] md:text-lg text-[var(--brand-muted)] leading-relaxed max-w-xl">
            Eight departments. One family. Forty-five years of finding the best,
            bringing it to El Cajon, and serving it with the warmth our
            community has trusted since 1980.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {departments.map((dept, i) => (
            <Link
              key={dept.slug}
              href={`/market#${dept.slug}`}
              className="dep-card group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--brand-deep)] block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-ember)] focus-visible:ring-offset-2"
              aria-label={`${dept.title} — ${dept.tagline}`}
            >
              <Image
                src={wixSize(dept.image, 800)}
                alt={dept.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover rounded-none transition-transform duration-[900ms] ease-out group-hover:scale-110"
                loading={i < 4 ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,10,6,0.95)] via-[rgba(15,10,6,0.35)] to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,10,6,0.55)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end text-[var(--brand-cream)]">
                <div className="flex items-center gap-2 mb-2 opacity-70">
                  <span className="text-[10px] uppercase tracking-[0.22em] mono">
                    0{i + 1}
                  </span>
                  <span className="w-6 h-px bg-[var(--brand-ember)]" />
                </div>
                <h3 className="font-display text-2xl md:text-[26px] font-bold leading-tight mb-2">
                  {dept.title}
                </h3>
                <p className="text-[13px] md:text-[14px] leading-snug opacity-85 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 ease-out">
                  {dept.tagline}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[var(--brand-ember)] text-[12px] font-semibold uppercase tracking-[0.18em] transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-[var(--brand-ember)] transition-all duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
