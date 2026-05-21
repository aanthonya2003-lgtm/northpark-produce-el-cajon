"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";
import { departments } from "@/lib/departments";
import { wixSize, images } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketClient() {
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current!.querySelectorAll(".market-hero-anim"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });

      const sections =
        sectionsRef.current?.querySelectorAll<HTMLElement>(".dept-section");
      sections?.forEach((section) => {
        const img = section.querySelector<HTMLElement>(".dept-image");
        const text = section.querySelectorAll<HTMLElement>(".dept-text > *");

        if (img) {
          gsap.from(img, {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(img.querySelector("img"), {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        gsap.from(text, {
          opacity: 0,
          y: 32,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
        aria-label="Market hero"
      >
        <div className="absolute inset-0 opacity-25">
          <Image
            src={wixSize(images.storefrontElCajon, 2000)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)] via-[rgba(15,10,6,0.6)] to-[rgba(15,10,6,0.4)]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="market-hero-anim flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Inside the Market</span>
          </div>
          <h1 className="market-hero-anim font-display headline-mega max-w-4xl text-[var(--brand-cream-bright)]">
            A world of flavors,
            <br />
            <span className="italic text-[var(--brand-ember-light)]">
              under one roof.
            </span>
          </h1>
          <p className="market-hero-anim mt-6 text-[17px] md:text-[19px] opacity-85 max-w-2xl leading-relaxed">
            Eight departments. Tens of thousands of products from twenty-plus
            countries. The same family running it since 1980. Take the tour.
          </p>
        </div>
      </section>

      <div ref={sectionsRef}>
        {departments.map((dept, i) => (
          <section
            key={dept.slug}
            id={dept.slug}
            className={`dept-section relative py-20 md:py-28 ${
              i % 2 === 0
                ? "bg-[var(--brand-cream)]"
                : "bg-[var(--brand-cream-bright)]"
            } scroll-mt-24`}
            aria-label={dept.title}
          >
            <div
              className={`max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="dept-image lg:col-span-6 relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={wixSize(dept.image, 1200)}
                  alt={dept.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-none"
                />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(15,10,6,0.78)] backdrop-blur-sm text-[var(--brand-ember)] text-[10px] uppercase tracking-[0.22em] font-medium mono">
                  <span>0{i + 1}</span>
                  <span>·</span>
                  <span>{dept.shortTitle}</span>
                </div>
                {!dept.imageIsReal && (
                  <span className="absolute bottom-5 right-5 px-2 py-1 rounded-full bg-[rgba(15,10,6,0.6)] backdrop-blur-sm text-[10px] uppercase tracking-[0.18em] text-[var(--brand-cream)] opacity-70 mono">
                    Stock
                  </span>
                )}
              </div>

              <div className="dept-text lg:col-span-6">
                <span className="eyebrow">Department {i + 1}</span>
                <h2 className="mt-4 font-display headline-large text-[var(--brand-deep)]">
                  {dept.title}
                </h2>
                <p className="mt-3 font-display text-xl md:text-2xl italic text-[var(--brand-ember)] leading-snug">
                  {dept.tagline}
                </p>
                <p className="mt-6 text-[16px] md:text-[17px] text-[var(--brand-deep)] opacity-85 leading-relaxed">
                  {dept.description}
                </p>
                <ul className="mt-7 space-y-2.5">
                  {dept.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[15px] text-[var(--brand-deep)] opacity-85"
                    >
                      <Check className="w-4 h-4 text-[var(--brand-saffron)] flex-shrink-0 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-[var(--brand-deep)] text-[var(--brand-cream)] py-20 md:py-28 grain">
        <div className="max-w-[1100px] mx-auto px-5 md:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Come See For Yourself</span>
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
          </div>
          <h2 className="font-display headline-large text-[var(--brand-cream-bright)]">
            Best understood
            <br />
            <span className="italic text-[var(--brand-ember-light)]">
              in person.
            </span>
          </h2>
          <p className="mt-6 text-[16px] opacity-85 max-w-lg mx-auto">
            Park out front, walk through the bakery first (you&rsquo;ll smell
            it), and give yourself an hour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] font-semibold text-sm hover:bg-[var(--brand-ember-light)] transition-colors group"
            >
              Visit & Directions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--brand-cream)] text-[var(--brand-cream)] hover:bg-[var(--brand-cream)] hover:text-[var(--brand-deep)] font-semibold text-sm transition-all"
            >
              See the Grill Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
