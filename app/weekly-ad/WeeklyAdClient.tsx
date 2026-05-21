"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Facebook, ExternalLink, Tag, Beef, Sprout, Wheat, Flame } from "lucide-react";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const deals = [
  {
    icon: <Sprout className="w-7 h-7" strokeWidth={1.6} />,
    title: "Fresh Produce Deals",
    body: "In-season fruits & vegetables, marked-down every Monday.",
    accent: "var(--brand-olive)",
  },
  {
    icon: <Beef className="w-7 h-7" strokeWidth={1.6} />,
    title: "Butcher Counter Savings",
    body: "Halal cuts on rotating special. Bulk pricing on family quantities.",
    accent: "var(--brand-ember)",
  },
  {
    icon: <Wheat className="w-7 h-7" strokeWidth={1.6} />,
    title: "Bakery & Pantry",
    body: "Bread bundles, olive oil, spices, teas — fresh deals weekly.",
    accent: "var(--brand-gold)",
  },
  {
    icon: <Flame className="w-7 h-7" strokeWidth={1.6} />,
    title: "Grill Combos",
    body: "Family Feasts and combo platters — value pricing on big orders.",
    accent: "var(--brand-deep)",
  },
];

export default function WeeklyAdClient() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current!.querySelectorAll(".wa-hero-anim"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(gridRef.current!.querySelectorAll(".deal-card"), {
        opacity: 0,
        y: 50,
        rotate: -3,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // Client-side state confirmation (no backend on MVP — Facebook is the source of truth)
    setSubmitted(true);
  };

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
        aria-label="Weekly ad hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="wa-hero-anim inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(212,168,67,0.15)] border border-[rgba(212,168,67,0.3)] text-[var(--brand-gold)] text-[11px] uppercase tracking-[0.22em] font-medium mb-6">
            <Tag className="w-3.5 h-3.5" />
            This Week
          </div>
          <h1 className="wa-hero-anim font-display headline-mega max-w-4xl">
            Fresh deals
            <br />
            <span className="italic text-[var(--brand-gold)]">
              every single week.
            </span>
          </h1>
          <p className="wa-hero-anim mt-6 text-[17px] md:text-[19px] opacity-85 max-w-2xl leading-relaxed">
            We post the current week&rsquo;s ad to our Facebook page every
            Monday. Produce specials, butcher counter deals, bakery bundles, and
            grill combos — all in one place.
          </p>
          <div className="wa-hero-anim mt-8">
            <a
              href={business.social[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand-gold)] text-[var(--brand-deep)] font-semibold text-[15px] hover:bg-[var(--brand-gold-hover)] transition-colors group"
            >
              <Facebook className="w-4 h-4" />
              See This Week&rsquo;s Ad on Facebook
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Deal categories */}
      <section className="bg-[var(--brand-cream)] py-20 md:py-28" aria-label="Deal categories">
        <div ref={gridRef} className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <span className="eyebrow">Deals Across the Store</span>
            <h2 className="mt-3 font-display headline-large text-[var(--brand-deep)]">
              What goes on sale.
            </h2>
            <p className="mt-4 text-[var(--brand-muted)]">
              Categories rotate weekly. The current week&rsquo;s ad lives on
              Facebook — always up to date, never out of season.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {deals.map((deal) => (
              <div
                key={deal.title}
                className="deal-card relative p-7 rounded-2xl bg-[var(--brand-white)] border border-[rgba(122,106,90,0.18)] hover:border-[var(--brand-gold)] hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className="w-14 h-14 rounded-2xl inline-flex items-center justify-center mb-5"
                  style={{
                    background: `color-mix(in srgb, ${deal.accent} 18%, transparent)`,
                    color: deal.accent,
                  }}
                >
                  {deal.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--brand-deep)]">
                  {deal.title}
                </h3>
                <p className="mt-2 text-[14px] text-[var(--brand-muted)] leading-relaxed">
                  {deal.body}
                </p>
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.22em] text-[var(--brand-muted)] tnum">
                  This Week
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe + Facebook block */}
      <section className="bg-[var(--brand-surface)] py-20 md:py-28" aria-label="Stay updated">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 rounded-3xl bg-[var(--brand-white)] border border-[rgba(122,106,90,0.18)]">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--brand-deep)]">
              Be the first to know.
            </h2>
            <p className="mt-3 text-[15px] text-[var(--brand-muted)] leading-relaxed">
              Drop your email and we&rsquo;ll let you know when we add a
              newsletter and SMS deals (coming soon). For now, follow us on
              Facebook for the live weekly ad.
            </p>
            {submitted ? (
              <p className="mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[rgba(74,94,42,0.1)] border border-[rgba(74,94,42,0.3)] text-[var(--brand-olive)] font-medium text-sm">
                Got it! We&rsquo;ll be in touch.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-6 flex flex-col sm:flex-row gap-2"
                noValidate
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-[var(--brand-cream)] border border-[rgba(122,106,90,0.2)] text-[var(--brand-deep)] placeholder:text-[var(--brand-muted)] focus:border-[var(--brand-gold)] focus:outline-none"
                  style={{ fontSize: "16px" }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[var(--brand-deep)] text-[var(--brand-cream)] font-semibold text-sm hover:bg-[#2A1B10] transition-colors"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          <a
            href={business.social[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 md:p-10 rounded-3xl bg-[var(--brand-deep)] text-[var(--brand-cream)] grain hover:bg-[#231408] transition-colors overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <Facebook className="w-6 h-6 text-[var(--brand-gold)]" />
              <span className="eyebrow">Our Facebook Page</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              The live weekly ad
              <br />
              lives here.
            </h2>
            <p className="mt-4 text-[15px] opacity-80 leading-relaxed">
              4,554 likes. Updated every Monday. The fastest place to see
              current prices and new arrivals.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 text-[var(--brand-gold)] font-semibold text-sm group-hover:gap-3 transition-all">
              Follow on Facebook
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>

        <p className="text-center mt-10 text-[13px] text-[var(--brand-muted)]">
          Need something now?{" "}
          <Link
            href="/order"
            className="text-[var(--brand-ember)] font-semibold underline underline-offset-4"
          >
            Order online
          </Link>{" "}
          or call{" "}
          <a
            href={`tel:${business.phoneTel}`}
            className="text-[var(--brand-ember)] font-semibold underline underline-offset-4 phone"
          >
            {business.phone}
          </a>
          .
        </p>
      </section>
    </>
  );
}
