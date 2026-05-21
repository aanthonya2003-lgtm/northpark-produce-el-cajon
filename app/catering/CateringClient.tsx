"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Check,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { familyFeasts } from "@/lib/menu-data";
import { business } from "@/lib/business";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const largeOrders = [
  {
    name: "Whole Kuzi with Rice",
    description: "Whole roasted lamb on a bed of yellow rice. The full feast.",
    price: "$339.00",
    serves: "Serves 15–20",
  },
  {
    name: "½ Kuzi with Rice",
    description: "Roasted lamb half on yellow rice.",
    price: "$189.00",
    serves: "Serves 8–10",
  },
  {
    name: "Whole Dolma Pot",
    description: "Stuffed grape leaves & vegetables — the full pot.",
    price: "$110.00",
    serves: "Catering size",
  },
  {
    name: "Whole Chicken Stuffed with Rice",
    description: "Traditional whole-chicken centerpiece.",
    price: "$14.99",
    serves: "Per chicken",
  },
];

const whyUs = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Halal Certified",
    body: "Every meat dish is sourced from our certified halal butcher counter.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Made Fresh Daily",
    body: "Catering orders are prepped the day of — never reheated stockpile.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "45+ Years Experience",
    body: "Family-owned since 1980. Thousands of family events served.",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

// Web3Forms — free, no-account form backend. Client must set their own key.
// Sign up at web3forms.com (30 seconds) → set NEXT_PUBLIC_WEB3FORMS_KEY in Vercel env vars.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function CateringClient() {
  const heroRef = useRef<HTMLElement>(null);
  const feastsRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current!.querySelectorAll(".cat-hero-anim"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      });

      gsap.from(feastsRef.current!.querySelectorAll(".feast-card"), {
        opacity: 0,
        y: 50,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feastsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "Catering Inquiry · NorthPark Produce El Cajon");
    formData.append("from_name", "NorthPark Produce Catering Form");
    formData.append("botcheck", "");

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Form not yet configured. Please call us directly at " +
          business.phone +
          " or email " +
          business.email
      );
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
      } else {
        setStatus("error");
        setErrorMsg(
          json.message ||
            "Something went wrong. Please call " + business.phone + "."
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please call us directly at " + business.phone + "."
      );
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
        aria-label="Catering hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="cat-hero-anim flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Catering & Large Orders</span>
          </div>
          <h1 className="cat-hero-anim font-display headline-mega max-w-4xl text-[var(--brand-cream-bright)]">
            Feed the whole crowd.
            <br />
            <span className="italic text-[var(--brand-ember-light)]">
              From three to three hundred.
            </span>
          </h1>
          <p className="cat-hero-anim mt-6 text-[17px] md:text-[19px] opacity-85 max-w-2xl leading-relaxed">
            Family Feasts, whole Kuzi (roast lamb), platters of tabbouli and
            hummus, and full-pot dolma. Halal certified. Made fresh the day of.
            Serving El Cajon, San Diego, Poway, and surrounding areas.
          </p>
          <div className="cat-hero-anim mt-8">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] font-semibold text-[15px] hover:bg-[var(--brand-ember-light)] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call to Plan · <span className="phone">{business.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--brand-cream)]" aria-label="Family Feasts">
        <div ref={feastsRef} className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-px bg-[var(--brand-ember)]" />
              <span className="eyebrow">Family Feasts</span>
              <span className="w-10 h-px bg-[var(--brand-ember)]" />
            </div>
            <h2 className="font-display headline-large text-[var(--brand-deep)]">
              Pick the size.
              <br />
              <span className="italic text-[var(--brand-ember)]">
                We&rsquo;ll do the rest.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {familyFeasts.map((f, i) => {
              const isPopular = f.name === "Feast for 3" || f.name === "Feast for 5";
              return (
                <article
                  key={f.name}
                  className={`feast-card relative flex flex-col p-7 md:p-8 rounded-3xl border transition-all ${
                    isPopular
                      ? "bg-gradient-to-br from-[var(--brand-deep)] to-[#1F1308] text-[var(--brand-cream)] border-[var(--brand-ember)]"
                      : "bg-[var(--brand-cream-bright)] text-[var(--brand-deep)] border-[rgba(140,123,107,0.18)] hover:border-[var(--brand-ember)]"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] text-[10px] font-bold uppercase tracking-[0.18em] mono">
                      Popular
                    </span>
                  )}
                  <span
                    className={`text-[11px] uppercase tracking-[0.22em] font-medium mb-3 mono ${
                      isPopular
                        ? "text-[var(--brand-ember)]"
                        : "text-[var(--brand-muted)]"
                    }`}
                  >
                    Tier {i + 1}
                  </span>
                  <h3 className="font-display text-[26px] md:text-[30px] font-bold leading-tight">
                    {f.name}
                  </h3>
                  <div className="mt-3 mb-5 font-display text-4xl md:text-5xl font-bold price text-[var(--brand-ember)]">
                    {f.price}
                  </div>
                  <p
                    className={`text-[13px] leading-relaxed flex-1 ${
                      isPopular ? "opacity-85" : "text-[var(--brand-muted)]"
                    }`}
                  >
                    {f.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--brand-surface)]" aria-label="Large orders">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Big-Event Centerpieces</span>
            <h2 className="mt-3 font-display headline-large text-[var(--brand-cream-bright)]">
              For the big tables.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {largeOrders.map((l) => (
              <div
                key={l.name}
                className="p-6 rounded-2xl bg-[rgba(245,235,216,0.03)] border border-[rgba(232,118,44,0.2)] hover:border-[var(--brand-ember)] hover:bg-[rgba(232,118,44,0.05)] transition-all text-[var(--brand-cream)]"
              >
                <h3 className="font-display text-xl font-bold text-[var(--brand-cream-bright)] leading-tight">
                  {l.name}
                </h3>
                <p className="mt-2 text-[13px] opacity-75 leading-relaxed">
                  {l.description}
                </p>
                <div className="mt-5 flex items-end justify-between gap-3 pt-4 border-t border-[rgba(232,118,44,0.18)]">
                  <span className="text-[11px] uppercase tracking-[0.18em] opacity-65 mono">
                    {l.serves}
                  </span>
                  <span className="price font-display font-bold text-xl text-[var(--brand-ember)]">
                    {l.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--brand-cream)]" aria-label="Catering inquiry">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Why Cater With Us</span>
            <h2 className="mt-3 font-display headline-large text-[var(--brand-deep)]">
              Trusted by El Cajon
              <br />
              <span className="italic text-[var(--brand-ember)]">
                since 1980.
              </span>
            </h2>
            <ul className="mt-8 space-y-5">
              {whyUs.map((w) => (
                <li key={w.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(232,118,44,0.12)] inline-flex items-center justify-center text-[var(--brand-ember)] flex-shrink-0">
                    {w.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--brand-deep)]">
                      {w.title}
                    </h3>
                    <p className="text-[14px] text-[var(--brand-muted)] mt-1 leading-relaxed">
                      {w.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="p-7 md:p-10 rounded-3xl bg-[var(--brand-deep)] text-[var(--brand-cream)] grain relative">
              <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--brand-cream-bright)]">
                  Catering Inquiry
                </h3>
                <p className="mt-2 text-[14px] opacity-75">
                  Send us the details and we&rsquo;ll be in touch within one
                  business day. Or just call —{" "}
                  <a
                    href={`tel:${business.phoneTel}`}
                    className="underline underline-offset-4 hover:text-[var(--brand-ember)] transition-colors phone"
                  >
                    {business.phone}
                  </a>
                  .
                </p>

                {status === "sent" ? (
                  <div className="mt-8 p-6 rounded-xl bg-[rgba(232,118,44,0.1)] border border-[rgba(232,118,44,0.3)]">
                    <Check className="w-8 h-8 text-[var(--brand-ember)] mb-3" />
                    <h4 className="font-display text-xl font-semibold text-[var(--brand-cream-bright)]">
                      Inquiry received.
                    </h4>
                    <p className="text-[14px] opacity-85 mt-1">
                      We&rsquo;ll be in touch within one business day. Need
                      something sooner? Call{" "}
                      <a
                        href={`tel:${business.phoneTel}`}
                        className="text-[var(--brand-ember)] font-semibold underline underline-offset-4 phone"
                      >
                        {business.phone}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4"
                    noValidate
                  >
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="md:col-span-1">
                      <label
                        htmlFor="name"
                        className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-2 mono"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] focus:border-[var(--brand-ember)] focus:outline-none"
                        style={{ fontSize: "16px" }}
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-2 mono">Email</label>
                      <input type="email" id="email" name="email" required autoComplete="email" className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] focus:border-[var(--brand-ember)] focus:outline-none" style={{ fontSize: "16px" }} />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="phone" className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-2 mono">Phone</label>
                      <input type="tel" id="phone" name="phone" autoComplete="tel" className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] focus:border-[var(--brand-ember)] focus:outline-none" style={{ fontSize: "16px" }} />
                    </div>
                    <div className="md:col-span-1">
                      <label htmlFor="event_date" className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-2 mono">Event date</label>
                      <input type="date" id="event_date" name="event_date" className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] focus:border-[var(--brand-ember)] focus:outline-none" style={{ fontSize: "16px" }} />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="guest_count" className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-2 mono">Approx. guest count</label>
                      <input type="number" id="guest_count" name="guest_count" min={1} className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] focus:border-[var(--brand-ember)] focus:outline-none" style={{ fontSize: "16px" }} />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-2 mono">What are you planning?</label>
                      <textarea id="message" name="message" rows={4} placeholder="Tell us about the event, dietary needs, dishes you're interested in…" className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] placeholder:text-[var(--brand-cream)]/40 focus:border-[var(--brand-ember)] focus:outline-none resize-y" style={{ fontSize: "16px" }} />
                    </div>

                    {status === "error" && (
                      <div className="md:col-span-2 p-4 rounded-lg bg-[rgba(232,76,44,0.1)] border border-[rgba(232,76,44,0.4)] flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-[#E84C2C] flex-shrink-0 mt-0.5" />
                        <p className="text-[13px] text-[var(--brand-cream-bright)]">{errorMsg}</p>
                      </div>
                    )}

                    <div className="md:col-span-2">
                      <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] font-semibold text-[15px] hover:bg-[var(--brand-ember-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                        {status === "sending" ? "Sending…" : "Send Inquiry"}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <p className="text-[11px] opacity-55 mt-3">We respond within one business day.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
