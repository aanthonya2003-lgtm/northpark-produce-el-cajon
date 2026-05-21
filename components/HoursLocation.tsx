"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HoursLocation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!.querySelectorAll(".hl-anim"), {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
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
      className="relative py-24 md:py-32 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
      aria-label="Hours and location"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Info */}
        <div className="lg:col-span-5 hl-anim">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-gold)]" />
            <span className="eyebrow">Visit Us</span>
          </div>
          <h2 className="font-display headline-large">
            Stop by Chase Ave.
            <br />
            <span className="italic text-[var(--brand-gold)]">
              We&rsquo;ll keep the bread warm.
            </span>
          </h2>

          <div className="mt-10 space-y-7">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[rgba(212,168,67,0.15)] inline-flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[var(--brand-gold)]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">
                  Address
                </h3>
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] opacity-85 hover:text-[var(--brand-gold)] transition-colors"
                >
                  432 E Chase Ave
                  <br />
                  El Cajon, CA 92020
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[rgba(212,168,67,0.15)] inline-flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[var(--brand-gold)]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">
                  Phone
                </h3>
                <a
                  href={`tel:${business.phoneTel}`}
                  className="phone text-[15px] opacity-85 hover:text-[var(--brand-gold)] transition-colors"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[rgba(212,168,67,0.15)] inline-flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[var(--brand-gold)]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold mb-2">
                  Hours
                </h3>
                <div className="space-y-1.5 text-[14px] opacity-85">
                  <div className="flex items-center justify-between gap-6 max-w-sm">
                    <span>Store · Mon – Fri</span>
                    <span className="hours">7:30a – 10:00p</span>
                  </div>
                  <div className="flex items-center justify-between gap-6 max-w-sm">
                    <span>Store · Sat – Sun</span>
                    <span className="hours">8:00a – 10:00p</span>
                  </div>
                  <div className="flex items-center justify-between gap-6 max-w-sm pt-1 mt-2 border-t border-[rgba(212,168,67,0.15)]">
                    <span>Grill · Daily</span>
                    <span className="hours">9:00a – 8:00p</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--brand-gold)] font-semibold text-sm hover:gap-3 transition-all"
            >
              Get directions & contact info
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-7 hl-anim">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(212,168,67,0.2)]">
            <iframe
              title="NorthPark Produce El Cajon location map"
              src="https://www.google.com/maps?q=432+E+Chase+Ave,+El+Cajon,+CA+92020&output=embed"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
