import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock, ExternalLink, Truck } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Order Online — Delivery & Pickup",
  description:
    "Order from NorthPark Produce El Cajon on Grubhub or Uber Eats. Pickup at 432 E Chase Ave. Call (619) 440-4401. Open daily 9 AM – 8 PM.",
  alternates: { canonical: "/order" },
};

export default function OrderPage() {
  return (
    <>
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain"
        aria-label="Order online hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Delivery & Pickup</span>
          </div>
          <h1 className="font-display headline-mega max-w-3xl text-[var(--brand-cream-bright)]">
            Order from
            <br />
            <span className="italic text-[var(--brand-ember-light)]">
              El Cajon&rsquo;s favorite market.
            </span>
          </h1>
          <p className="mt-6 text-[17px] md:text-[19px] opacity-85 max-w-2xl leading-relaxed">
            Pick your platform — Grubhub or Uber Eats. Pickup at the door,
            every day, 9 AM to 8 PM. Or call us directly and we&rsquo;ll have
            it ready.
          </p>
        </div>
      </section>

      <section
        className="bg-[var(--brand-cream)] py-16 md:py-24"
        aria-label="Delivery platforms"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <h2 className="text-center font-display headline-large text-[var(--brand-deep)] mb-4">
            Delivery, your way.
          </h2>
          <p className="text-center text-[var(--brand-muted)] max-w-lg mx-auto mb-12 md:mb-14">
            Both platforms carry our full grill menu. Pick whichever you
            already have an account with.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {business.delivery.map((d) => (
              <a
                key={d.platform}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 md:p-10 rounded-3xl bg-[var(--brand-cream-bright)] border border-[rgba(140,123,107,0.2)] hover:border-[var(--brand-ember)] hover:shadow-[0_24px_60px_-25px_rgba(232,118,44,0.45)] transition-all duration-500 overflow-hidden hover-lift"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--brand-deep)] text-[var(--brand-ember)]">
                    <Truck className="w-7 h-7" strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand-muted)] mono">
                    {d.eta}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--brand-deep)]">
                  {d.platform}
                </h3>
                <p className="mt-3 text-[15px] text-[var(--brand-muted)] leading-relaxed">
                  {d.tagline}. Browse the full grill menu, customize your
                  order, and pay in-app.
                </p>
                <div className="mt-7 inline-flex items-center gap-2 text-[var(--brand-ember)] font-semibold text-sm group-hover:gap-3 transition-all">
                  Order on {d.platform}
                  <ExternalLink className="w-4 h-4" />
                </div>

                <span className="absolute inset-x-8 -bottom-1 h-px bg-gradient-to-r from-transparent via-[var(--brand-ember)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            ))}
          </div>

          <p className="text-center text-[12px] text-[var(--brand-muted)] mt-8 italic max-w-lg mx-auto">
            Note: DoorDash is not currently available for the 432 E Chase Ave
            El Cajon location. We&rsquo;ll add it as soon as we&rsquo;re
            listed.
          </p>
        </div>
      </section>

      <section
        className="bg-[var(--brand-surface)] py-16 md:py-24 text-[var(--brand-cream)]"
        aria-label="Pickup and call"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-8 md:p-10 rounded-3xl bg-[rgba(245,235,216,0.04)] border border-[rgba(232,118,44,0.2)]">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Pickup</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--brand-cream-bright)]">
                Walk in, grab it, go.
              </h3>
              <p className="mt-4 text-[15px] opacity-75 leading-relaxed">
                Skip delivery fees. Place your order over the phone, then pick
                up at our Chase Avenue door.
              </p>
              <div className="mt-6 space-y-2 text-[14px] text-[var(--brand-cream)]">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--brand-ember)]" />
                  <span>432 E Chase Ave, El Cajon, CA 92020</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--brand-ember)]" />
                  <span className="hours">Grill: Daily 9:00a – 8:00p</span>
                </p>
              </div>
              <a
                href={business.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] font-semibold text-sm hover:bg-[var(--brand-ember-light)] transition-colors"
              >
                Get Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-[var(--brand-deep)] text-[var(--brand-cream)] grain relative overflow-hidden border border-[rgba(232,118,44,0.2)]">
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <Phone className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Prefer to Call?</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold relative z-10 text-[var(--brand-cream-bright)]">
                Talk to a real person.
              </h3>
              <p className="mt-4 text-[15px] opacity-80 leading-relaxed relative z-10">
                Special requests, catering questions, large orders — call us
                directly. We pick up.
              </p>
              <a
                href={`tel:${business.phoneTel}`}
                className="mt-7 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] font-bold text-lg hover:bg-[var(--brand-ember-light)] transition-colors phone relative z-10"
              >
                <Phone className="w-5 h-5" />
                {business.phone}
              </a>
              <p className="mt-4 text-[12px] opacity-65 relative z-10">
                Mon–Fri 7:30a–10p · Sat–Sun 8a–10p (store hours)
              </p>
            </div>
          </div>

          <p className="mt-12 text-center text-[13px] text-[var(--brand-cream)] opacity-75 max-w-2xl mx-auto">
            Looking for catering or family feasts (3–10+ people)?{" "}
            <Link
              href="/catering"
              className="text-[var(--brand-ember)] font-semibold underline underline-offset-4 hover:text-[var(--brand-ember-light)] transition-colors"
            >
              See the catering page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
