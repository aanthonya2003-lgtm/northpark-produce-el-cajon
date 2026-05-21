"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ChevronDown, ArrowRight, BadgeCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { images, wixSize } from "@/lib/images";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !headlineRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(
        [
          headlineRef.current,
          eyebrowRef.current,
          subRef.current,
          ctaRef.current,
          badgeRef.current,
          scrollIndicatorRef.current,
        ],
        { opacity: 1, y: 0, rotationX: 0, scale: 1 }
      );
      return;
    }

    const split = new SplitType(headlineRef.current, {
      types: "chars,words",
      tagName: "span",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.set(
        [
          eyebrowRef.current,
          subRef.current,
          ctaRef.current,
          badgeRef.current,
          scrollIndicatorRef.current,
        ],
        { opacity: 0 }
      )
        .set(split.chars, { opacity: 0, y: 90, rotationX: -65 })
        .to(eyebrowRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: 0.2,
        })
        .to(
          split.chars,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            stagger: 0.022,
            duration: 1.1,
          },
          "-=0.45"
        )
        .to(
          subRef.current,
          { opacity: 1, y: 0, duration: 0.75 },
          "-=0.6"
        )
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.6)",
          },
          "-=0.35"
        )
        .to(
          scrollIndicatorRef.current,
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden bg-[var(--brand-deep)] grain"
      aria-label="NorthPark Produce El Cajon"
    >
      {/* REAL Wix CDN hero photo */}
      <div className="absolute inset-0 ken-burns">
        <Image
          src={wixSize(images.storefrontElCajon, 2400)}
          alt="NorthPark Produce El Cajon — international market on Chase Avenue"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover rounded-none"
          quality={88}
        />
      </div>

      {/* Cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,10,6,0.5)] via-[rgba(15,10,6,0.45)] to-[rgba(15,10,6,0.95)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,10,6,0.65)] via-transparent to-transparent" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-8 flex flex-col justify-center pt-24 pb-20">
        <div className="max-w-4xl">
          <div
            ref={eyebrowRef}
            className="flex items-center gap-3 mb-6"
            style={{ opacity: 1 }}
          >
            <span className="w-12 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow text-[var(--brand-ember)]">
              El Cajon · Since 1980
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="font-display text-[var(--brand-cream-bright)] headline-mega"
            style={{ perspective: "800px" }}
          >
            El Cajon&rsquo;s
            <br />
            International Market
          </h1>

          <p
            ref={subRef}
            className="mt-7 text-[17px] md:text-[20px] text-[var(--brand-cream)] opacity-90 max-w-xl leading-relaxed"
            style={{ opacity: 1 }}
          >
            Family owned since 1980. Halal certified. Fresh bread baked daily.
            Mediterranean grill, deli, and bakery — all under one warm,
            spice-scented roof on Chase Avenue.
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex flex-wrap items-center gap-3"
            style={{ opacity: 1 }}
          >
            <MagneticButton
              href="/menu"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand-ember)] hover:bg-[var(--brand-ember-light)] text-[var(--brand-deep)] font-semibold text-[15px] transition-colors group"
            >
              Explore the Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="/order"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[var(--brand-cream)] text-[var(--brand-cream)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-deep)] font-semibold text-[15px] transition-all"
            >
              Order Online
            </MagneticButton>
          </div>
        </div>

        {/* Halal badge — floating */}
        <div
          ref={badgeRef}
          className="absolute right-5 md:right-8 bottom-28 md:bottom-32 lg:right-12"
          style={{ opacity: 1, transform: "scale(1)" }}
        >
          <div className="hidden md:flex flex-col items-center text-center bg-[rgba(15,10,6,0.6)] backdrop-blur-md border border-[rgba(232,118,44,0.35)] rounded-2xl px-6 py-5 max-w-[180px]">
            <BadgeCheck className="w-7 h-7 text-[var(--brand-ember)] mb-2" />
            <span className="font-display text-[15px] font-bold text-[var(--brand-cream-bright)] leading-tight">
              Halal Certified
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--brand-saffron)] mt-2 mono">
              On-Premises · Zabihah Verified
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--brand-cream)] opacity-80"
          style={{ opacity: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.32em] mono">Scroll</span>
          <ChevronDown className="w-4 h-4 float-pulse" />
        </div>
      </div>
    </section>
  );
}
