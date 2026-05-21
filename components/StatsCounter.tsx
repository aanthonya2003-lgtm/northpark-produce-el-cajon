"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck, Wheat, Calendar, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Stat = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: new Date().getFullYear() - 1980,
    suffix: "+",
    label: "Years Serving",
    sub: "Family owned since 1980",
    icon: <Calendar className="w-7 h-7" strokeWidth={1.6} />,
  },
  {
    value: 100,
    suffix: "%",
    label: "Halal Certified",
    sub: "On-premises · Zabihah verified",
    icon: <BadgeCheck className="w-7 h-7" strokeWidth={1.6} />,
  },
  {
    value: 3,
    suffix: "",
    label: "San Diego Locations",
    sub: "El Cajon · North Park · Poway",
    icon: <Award className="w-7 h-7" strokeWidth={1.6} />,
  },
  {
    value: 20,
    suffix: "+",
    label: "Countries Sourced",
    sub: "Iraqi · Persian · Lebanese · more",
    icon: <Wheat className="w-7 h-7" strokeWidth={1.6} />,
  },
];

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !sectionRef.current) {
      sectionRef.current
        ?.querySelectorAll<HTMLElement>("[data-counter]")
        .forEach((el) => {
          el.textContent = el.dataset.counter || "0";
        });
      return;
    }

    const ctx = gsap.context(() => {
      const counters = sectionRef.current?.querySelectorAll<HTMLElement>(
        "[data-counter]"
      );

      counters?.forEach((counter) => {
        const target = Number(counter.dataset.counter || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            counter.textContent = Math.round(obj.v).toString();
          },
        });
      });

      gsap.from(sectionRef.current!.querySelectorAll(".stat-card"), {
        opacity: 0,
        y: 40,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
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
      aria-label="Why NorthPark Produce"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Why Choose Us</span>
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
          </div>
          <h2 className="font-display headline-large">
            Forty-five years.
            <br />
            <span className="italic text-[var(--brand-saffron)]">
              The same family. The same standard.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card relative p-6 md:p-8 rounded-2xl border border-[rgba(232,118,44,0.2)] bg-[rgba(232,118,44,0.05)] hover:border-[var(--brand-ember)] hover:bg-[rgba(232,118,44,0.1)] transition-all duration-500 text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[rgba(232,118,44,0.12)] text-[var(--brand-ember)] mb-5 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="font-display text-5xl md:text-6xl font-bold leading-none tracking-tight stat-num">
                <span data-counter={stat.value}>0</span>
                <span className="text-[var(--brand-ember)]">{stat.suffix}</span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mt-3">
                {stat.label}
              </h3>
              <p className="text-[13px] text-[var(--brand-cream)] opacity-70 mt-2">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
