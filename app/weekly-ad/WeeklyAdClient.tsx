"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Facebook,
  ExternalLink,
  Tag,
  Beef,
  Sprout,
  Wheat,
  Flame,
  Check,
  AlertCircle,
} from "lucide-react";
import { business } from "@/lib/business";
import { images, wixSize } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const deals = [
  {
    icon: <Sprout className="w-7 h-7" strokeWidth={1.6} />,
    title: "Fresh Produce Deals",
    body: "In-season fruits & vegetables, marked down every Monday.",
    accent: "var(--brand-olive, #4A5E2A)",
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
    accent: "var(--brand-saffron)",
  },
  {
    icon: <Flame className="w-7 h-7" strokeWidth={1.6} />,
    title: "Grill Combos",
    body: "Family Feasts and combo platters — value pricing on big orders.",
    accent: "var(--brand-deep)",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/northparkproduceelcajon/";
const FACEBOOK_EMBED_SRC = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_PAGE_URL
)}&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepicker=false`;

export default function WeeklyAdClient() {
  const heroRef = useRef<HTMLElement>(null);
  const adsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

      gsap.from(adsRef.current!.querySelectorAll(".ad-image"), {
        opacity: 0,
        y: 50,
        clipPath: "inset(0 0 100% 0)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: adsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(gridRef.current!.querySelectorAll(".deal-card"), {
        opacity: 0,
        y: 50,
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

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    setErrorMsg("");

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Subscription not yet configured. Follow us on Facebook for live deals."
      );
      return;
    }

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("email", email);
    formData.append("subject", "Weekly Ad Signup · NorthPark Produce El Cajon");
    formData.append("from_name", "Weekly Ad Email Capture");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("sent");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Couldn't subscribe. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
        aria-label="Weekly ad hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="wa-hero-anim inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(232,118,44,0.15)] border border-[rgba(232,118,44,0.3)] text-[var(--brand-ember)] text-[11px] uppercase tracking-[0.22em] font-medium mb-6 mono">
            <Tag className="w-3.5 h-3.5" />
            This Week
          </div>
          <h1 className="wa-hero-anim font-display headline-mega max-w-4xl text-[var(--brand-cream-bright)]">
            This week&rsquo;s ad.
            <br />
            <span className="italic text-[var(--brand-ember-light)]">
              Live from the store.
            </span>
          </h1>
          <p className="wa-hero-anim mt-6 text-[17px] md:text-[19px] opacity-85 max-w-2xl leading-relaxed">
            The current weekly ad — fresh produce specials, butcher counter
            deals, bakery bundles, grill combos — straight from the El Cajon
            store, updated every Monday.
          </p>
        </div>
      </section>

      {/* LIVE WEEKLY AD IMAGES — pulled live from Wix CDN, auto-update with client posts */}
      <section className="bg-[var(--brand-cream)] py-16 md:py-24" aria-label="Current weekly ad">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="eyebrow">Current Ad — Page 1 &amp; 2</span>
            <h2 className="mt-3 font-display headline-large text-[var(--brand-deep)]">
              Save the page. Show at checkout.
            </h2>
            <p className="mt-4 text-[var(--brand-muted)]">
              Tap an ad to view full size. New ad posts every Monday morning.
            </p>
          </div>

          <div ref={adsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <a
              href={images.weeklyAdElCajon1}
              target="_blank"
              rel="noopener noreferrer"
              className="ad-image group relative block rounded-2xl overflow-hidden border-2 border-[rgba(140,123,107,0.18)] hover:border-[var(--brand-ember)] hover:shadow-[0_24px_60px_-25px_rgba(232,118,44,0.5)] transition-all duration-500"
              aria-label="View Weekly Ad page 1 full size"
            >
              <Image
                src={wixSize(images.weeklyAdElCajon1, 1000)}
                alt="NorthPark Produce El Cajon — current week's ad, page 1"
                width={900}
                height={1165}
                className="w-full h-auto rounded-none transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[rgba(15,10,6,0.85)] to-transparent text-[var(--brand-cream-bright)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1.5">
                  Tap to view full size
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            <a
              href={images.weeklyAdElCajon2}
              target="_blank"
              rel="noopener noreferrer"
              className="ad-image group relative block rounded-2xl overflow-hidden border-2 border-[rgba(140,123,107,0.18)] hover:border-[var(--brand-ember)] hover:shadow-[0_24px_60px_-25px_rgba(232,118,44,0.5)] transition-all duration-500"
              aria-label="View Weekly Ad page 2 full size"
            >
              <Image
                src={wixSize(images.weeklyAdElCajon2, 1000)}
                alt="NorthPark Produce El Cajon — current week's ad, page 2"
                width={900}
                height={1165}
                className="w-full h-auto rounded-none transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[rgba(15,10,6,0.85)] to-transparent text-[var(--brand-cream-bright)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1.5">
                  Tap to view full size
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--brand-surface)] py-20 md:py-28 text-[var(--brand-cream)]"
        aria-label="Deal categories"
      >
        <div ref={gridRef} className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
            <span className="eyebrow">Deals Across the Store</span>
            <h2 className="mt-3 font-display headline-large text-[var(--brand-cream-bright)]">
              What rotates weekly.
            </h2>
            <p className="mt-4 opacity-75">
              Categories below rotate. The actual prices live in the ad images
              above and on our Facebook page.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {deals.map((deal) => (
              <div
                key={deal.title}
                className="deal-card relative p-7 rounded-2xl bg-[rgba(245,235,216,0.04)] border border-[rgba(232,118,44,0.2)] hover:border-[var(--brand-ember)] hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className="w-14 h-14 rounded-2xl inline-flex items-center justify-center mb-5"
                  style={{
                    background: `color-mix(in srgb, ${deal.accent} 22%, transparent)`,
                    color: deal.accent,
                  }}
                >
                  {deal.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--brand-cream-bright)]">
                  {deal.title}
                </h3>
                <p className="mt-2 text-[14px] opacity-75 leading-relaxed">
                  {deal.body}
                </p>
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.22em] opacity-50 mono">
                  This Week
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Page LIVE Embed + Email Signup */}
      <section className="bg-[var(--brand-cream)] py-20 md:py-28" aria-label="Stay updated">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <Facebook className="w-5 h-5 text-[var(--brand-ember)]" />
              <span className="eyebrow">Live from Facebook</span>
            </div>
            <h2 className="font-display headline-large text-[var(--brand-deep)] mb-3">
              4,554 likes.
              <br />
              <span className="italic text-[var(--brand-ember)]">
                And every weekly post.
              </span>
            </h2>
            <p className="text-[var(--brand-muted)] mb-6 max-w-md">
              Our Facebook page is the fastest place to see live ads, daily
              specials, and store news.
            </p>

            <div className="rounded-2xl overflow-hidden border-2 border-[rgba(140,123,107,0.18)] bg-[var(--brand-cream-bright)] aspect-[5/7] max-h-[700px]">
              <iframe
                src={FACEBOOK_EMBED_SRC}
                title="NorthPark Produce El Cajon — Facebook Page"
                loading="lazy"
                className="w-full h-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="encrypted-media"
              />
            </div>

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--brand-deep)] text-[var(--brand-cream-bright)] font-semibold text-sm hover:bg-[#1F1308] transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Open Facebook Page
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <Tag className="w-5 h-5 text-[var(--brand-ember)]" />
              <span className="eyebrow">Be First to Know</span>
            </div>
            <h2 className="font-display headline-large text-[var(--brand-deep)] mb-3">
              Get deals in
              <br />
              <span className="italic text-[var(--brand-ember)]">your inbox.</span>
            </h2>
            <p className="text-[var(--brand-muted)] mb-6">
              Drop your email. We&rsquo;ll send you a weekly digest of the new
              deals and seasonal specials.
            </p>

            <div className="p-6 md:p-8 rounded-3xl bg-[var(--brand-deep)] text-[var(--brand-cream)] grain relative">
              <div className="relative z-10">
                {status === "sent" ? (
                  <div className="p-4 rounded-lg bg-[rgba(232,118,44,0.12)] border border-[rgba(232,118,44,0.3)] flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--brand-ember)] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display font-semibold text-[var(--brand-cream-bright)] text-lg">
                        You&rsquo;re on the list!
                      </h3>
                      <p className="text-[13px] opacity-80 mt-1">
                        Watch for your first weekly digest next Monday.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3" noValidate>
                    <label
                      htmlFor="newsletter-email"
                      className="block text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mono"
                    >
                      Your email address
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      name="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      aria-label="Your email address"
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(245,235,216,0.06)] border border-[rgba(232,118,44,0.25)] text-[var(--brand-cream-bright)] placeholder:text-[var(--brand-cream)]/40 focus:border-[var(--brand-ember)] focus:outline-none"
                      style={{ fontSize: "16px" }}
                    />

                    {status === "error" && (
                      <div className="p-3 rounded-lg bg-[rgba(232,76,44,0.1)] border border-[rgba(232,76,44,0.3)] flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-[#E84C2C] flex-shrink-0 mt-0.5" />
                        <p className="text-[12px] text-[var(--brand-cream-bright)]">
                          {errorMsg}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full px-6 py-3 rounded-xl bg-[var(--brand-ember)] text-[var(--brand-deep)] font-semibold text-sm hover:bg-[var(--brand-ember-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? "Subscribing…" : "Notify Me Weekly"}
                    </button>
                    <p className="text-[11px] opacity-55 pt-1">
                      No spam. Unsubscribe anytime. Powered by Web3Forms.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-[13px] text-[var(--brand-muted)] max-w-2xl mx-auto px-5">
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
