"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Flame, Phone } from "lucide-react";
import { menu, menuCategories, type MenuCategory } from "@/lib/menu-data";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Filter = "All" | MenuCategory;
const filters: Filter[] = ["All", ...menuCategories];

export default function MenuClient() {
  const [active, setActive] = useState<Filter>("All");
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleItems = useMemo(
    () => (active === "All" ? menu : menu.filter((m) => m.category === active)),
    [active]
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current!.querySelectorAll(".menu-hero-anim"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  // Re-stagger the cards on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(gridRef.current!.querySelectorAll(".menu-item"), {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.04,
        ease: "power2.out",
      });
    }, gridRef);
    return () => ctx.revert();
  }, [active]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
        aria-label="Menu hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="menu-hero-anim flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-gold)]" />
            <span className="eyebrow">El Cajon · Mediterranean Grill</span>
          </div>
          <h1 className="menu-hero-anim font-display headline-mega max-w-4xl">
            The full menu.
            <br />
            <span className="italic text-[var(--brand-gold)]">
              Halal, fresh, made to order.
            </span>
          </h1>
          <p className="menu-hero-anim mt-6 text-[17px] md:text-[19px] opacity-85 max-w-2xl leading-relaxed">
            Open daily 9 AM – 8 PM. Pick up at 432 E Chase Ave, or have it
            delivered through Grubhub or Uber Eats. Family Feasts feed three to
            ten — perfect for any gathering.
          </p>
          <div className="menu-hero-anim mt-8 flex flex-wrap gap-3">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-gold)] text-[var(--brand-deep)] font-semibold text-sm hover:bg-[var(--brand-gold-hover)] transition-colors group"
            >
              Order for Delivery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--brand-cream)] text-[var(--brand-cream)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-deep)] font-semibold text-sm transition-all phone"
            >
              <Phone className="w-4 h-4" />
              {business.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Sticky filter */}
      <div className="sticky top-[72px] md:top-[84px] z-30 bg-[var(--brand-cream)] border-b border-[rgba(122,106,90,0.15)] backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex gap-1 overflow-x-auto no-scrollbar py-3 md:py-4">
            {filters.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`relative whitespace-nowrap px-4 py-2 rounded-full text-[13px] md:text-[14px] font-medium transition-colors ${
                    isActive
                      ? "text-[var(--brand-cream)]"
                      : "text-[var(--brand-deep)] hover:text-[var(--brand-ember)]"
                  }`}
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab-indicator"
                      className="absolute inset-0 rounded-full bg-[var(--brand-deep)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu grid */}
      <section className="bg-[var(--brand-cream)] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              ref={gridRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
            >
              {visibleItems.map((item) => {
                const isFeast = item.category === "Family Feasts";
                return (
                  <article
                    key={`${item.category}-${item.name}`}
                    className={`menu-item group relative p-6 md:p-7 rounded-2xl bg-[var(--brand-white)] border transition-all ${
                      isFeast
                        ? "border-[var(--brand-gold)] bg-gradient-to-br from-[var(--brand-white)] to-[#FBF4DD]"
                        : "border-[rgba(122,106,90,0.15)] hover:border-[var(--brand-gold)]"
                    }`}
                  >
                    {item.popular && (
                      <span className="absolute top-5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--brand-ember)] text-[var(--brand-cream)] text-[10px] font-semibold uppercase tracking-[0.18em]">
                        <Flame className="w-3 h-3" /> Popular
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-[22px] font-bold text-[var(--brand-deep)] leading-tight">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="mt-2 text-[14px] text-[var(--brand-muted)] leading-relaxed">
                            {item.description}
                          </p>
                        )}
                        <span className="mt-3 inline-block text-[11px] uppercase tracking-[0.18em] text-[var(--brand-gold)] font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="price font-display text-2xl md:text-[26px] font-bold text-[var(--brand-ember)]">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Footer CTA bar */}
      <section className="bg-[var(--brand-deep)] text-[var(--brand-cream)] py-14 md:py-20">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center">
          <h2 className="font-display headline-medium">
            Ready to order?
          </h2>
          <p className="mt-3 text-[15px] opacity-80 max-w-lg mx-auto">
            Tap to call, or order delivery through Grubhub or Uber Eats.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/order"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-gold)] text-[var(--brand-deep)] font-semibold text-sm hover:bg-[var(--brand-gold-hover)] transition-colors"
            >
              Order Online
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--brand-cream)] text-[var(--brand-cream)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-deep)] font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="phone">{business.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
