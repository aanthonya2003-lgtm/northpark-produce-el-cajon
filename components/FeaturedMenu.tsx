"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Flame } from "lucide-react";
import { images, wixSize } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Highlight = {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  tag?: string;
  imageIsReal: boolean;
};

const highlights: Highlight[] = [
  {
    name: "From the Mediterranean Grill",
    description:
      "Beef & chicken kabobs, shawarma, falafel, lamb shank — served 9 AM to 8 PM daily, fresh off the grill.",
    price: "from $15.99",
    image: images.grillMenuHero,
    imageAlt: "NorthPark Produce Mediterranean grill — beef and chicken kabobs",
    tag: "Open Daily",
    imageIsReal: true,
  },
  {
    name: "Sandwiches & À La Carte",
    description:
      "Shawarma, kabob, falafel and cream chop sandwiches — under $10, ready in minutes.",
    price: "from $8.99",
    image: images.sandwichesCategory,
    imageAlt: "Mediterranean sandwiches at NorthPark Produce El Cajon",
    tag: "Quick Lunch",
    imageIsReal: true,
  },
  {
    name: "Family Feasts & Catering",
    description:
      "Feeds 3 to 10. Kabobs, shawarma, salads, hummus, warm tanour bread — packaged for your gathering.",
    price: "from $39.99",
    image: images.specialtiesCategory,
    imageAlt: "Family feast spread from NorthPark Produce",
    tag: "Best Value",
    imageIsReal: true,
  },
];

export default function FeaturedMenu() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".dish-card"), {
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(sectionRef.current!.querySelector(".fm-heading"), {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--brand-cream)]"
      aria-label="From the grill"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="fm-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[var(--brand-ember)]" />
              <span className="eyebrow">From the Grill</span>
            </div>
            <h2 className="font-display text-[var(--brand-deep)] headline-large">
              The dishes
              <br />
              <span className="italic text-[var(--brand-ember)]">
                everyone comes back for.
              </span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-[var(--brand-deep)] font-semibold text-[15px] hover:gap-3 hover:text-[var(--brand-ember)] transition-all group"
          >
            View the full menu
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {highlights.map((h) => (
            <article
              key={h.name}
              className="dish-card group relative overflow-hidden rounded-2xl bg-[var(--brand-cream-bright)] border border-[rgba(140,123,107,0.18)] hover:border-[var(--brand-ember)] transition-all duration-500 hover-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={wixSize(h.image, 1000)}
                  alt={h.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-none transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                {h.tag && (
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--brand-deep)] text-[var(--brand-ember)] text-[10px] font-semibold uppercase tracking-[0.18em] mono">
                    <Flame className="w-3 h-3" /> {h.tag}
                  </span>
                )}
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--brand-deep)] leading-tight">
                    {h.name}
                  </h3>
                  <span className="price text-[var(--brand-ember)] font-display font-bold text-base md:text-lg whitespace-nowrap">
                    {h.price}
                  </span>
                </div>
                <p className="text-[14px] text-[var(--brand-muted)] leading-relaxed">
                  {h.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
