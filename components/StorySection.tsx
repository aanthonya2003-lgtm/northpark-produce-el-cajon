"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=85&auto=format&fit=crop";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.3,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(imageRef.current!.querySelector("img"), {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.from(sectionRef.current!.querySelectorAll(".story-text > *"), {
        opacity: 0,
        y: 32,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
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
      aria-label="Our story"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <Image
              src={STORY_IMAGE}
              alt="A close-up of fresh herbs, spices, and Mediterranean ingredients"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,14,6,0.25)] via-transparent to-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-6 order-1 lg:order-2 story-text">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-gold)]" />
            <span className="eyebrow">Our Story</span>
          </div>
          <h2 className="font-display text-[var(--brand-deep)] headline-large">
            We searched the planet.
            <br />
            <span className="italic text-[var(--brand-ember)]">
              We brought it home.
            </span>
          </h2>
          <p className="mt-7 text-[17px] text-[var(--brand-deep)] leading-relaxed opacity-90">
            NorthPark Produce has been a family-owned business since 1980 — three
            generations of finding the best fresh products from around the world
            and bringing them back to our San Diego neighbors.
          </p>
          <p className="mt-4 text-[17px] text-[var(--brand-deep)] leading-relaxed opacity-80">
            Our El Cajon store on Chase Avenue brings together everything the
            family is known for: a halal-certified butcher counter, fresh
            flatbread baked all day in front of customers, a full Mediterranean
            grill, and aisles of international groceries from Iraq, Lebanon,
            Persia, Russia, Mexico, and beyond.
          </p>

          <figure className="mt-8 pl-6 border-l-2 border-[var(--brand-gold)]">
            <blockquote className="font-display text-[20px] md:text-[22px] italic leading-snug text-[var(--brand-deep)]">
              &ldquo;See how affordable gourmet can be.&rdquo;
            </blockquote>
            <figcaption className="mt-2 text-[12px] uppercase tracking-[0.22em] text-[var(--brand-muted)]">
              — NorthPark Produce, since 1980
            </figcaption>
          </figure>

          <div className="mt-8">
            <Link
              href="/market"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--brand-deep)] text-[var(--brand-deep)] hover:bg-[var(--brand-deep)] hover:text-[var(--brand-cream)] font-semibold text-sm transition-all group"
            >
              Tour the Market
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
