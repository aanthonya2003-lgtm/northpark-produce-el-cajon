import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ExternalLink, Accessibility, Car } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Visit & Contact — 432 E Chase Ave, El Cajon",
  description:
    "Visit NorthPark Produce in El Cajon at 432 E Chase Ave. Open Mon–Fri 7:30 AM – 10 PM, Sat–Sun 8 AM – 10 PM. Call (619) 440-4401 or email northparkproduce@yahoo.com. Wheelchair accessible, private parking.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain" aria-label="Contact hero">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[var(--brand-ember)]" />
            <span className="eyebrow">Visit Us in El Cajon</span>
          </div>
          <h1 className="font-display headline-mega max-w-3xl text-[var(--brand-cream-bright)]">On Chase Avenue,<br /><span className="italic text-[var(--brand-ember-light)]">every day of the week.</span></h1>
        </div>
      </section>

      <section className="bg-[var(--brand-cream)] py-16 md:py-24" aria-label="Contact details">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Address</span>
              </div>
              <a href={business.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="font-display text-2xl md:text-3xl font-bold text-[var(--brand-deep)] hover:text-[var(--brand-ember)] transition-colors leading-tight inline-block">
                432 E Chase Ave<br />El Cajon, CA 92020
              </a>
              <a href={business.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-[var(--brand-ember)] font-semibold text-sm hover:gap-3 transition-all">
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Call us</span>
              </div>
              <a href={`tel:${business.phoneTel}`} className="font-display text-2xl md:text-3xl font-bold text-[var(--brand-deep)] hover:text-[var(--brand-ember)] transition-colors phone">{business.phone}</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Email</span>
              </div>
              <a href={`mailto:${business.email}`} className="font-display text-xl md:text-2xl font-bold text-[var(--brand-deep)] hover:text-[var(--brand-ember)] transition-colors break-all">{business.email}</a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Hours</span>
              </div>
              <div className="space-y-5">
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--brand-deep)] mb-2">Market</h3>
                  <ul className="space-y-1.5 max-w-sm">
                    {business.storeHours.map((h) => (
                      <li key={h.day} className="flex items-center justify-between text-[14px] text-[var(--brand-deep)] opacity-85">
                        <span>{h.day}</span><span className="hours">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--brand-deep)] mb-2">Mediterranean Grill</h3>
                  <ul className="space-y-1.5 max-w-sm">
                    {business.restaurantHours.map((h) => (
                      <li key={h.day} className="flex items-center justify-between text-[14px] text-[var(--brand-deep)] opacity-85">
                        <span>{h.day}</span><span className="hours">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="eyebrow">Accessibility & Parking</span>
              </div>
              <div className="flex flex-col gap-2.5 text-[14px] text-[var(--brand-deep)] opacity-85">
                <span className="inline-flex items-center gap-2"><Accessibility className="w-4 h-4 text-[var(--brand-saffron)]" />Wheelchair accessible</span>
                <span className="inline-flex items-center gap-2"><Car className="w-4 h-4 text-[var(--brand-saffron)]" />Private lot parking</span>
                <span className="inline-flex items-center gap-2 text-[12px] text-[var(--brand-muted)]">Accepts credit cards, Apple Pay & bike parking</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Facebook className="w-5 h-5 text-[var(--brand-ember)]" />
                <span className="eyebrow">Follow Us</span>
              </div>
              <div className="flex flex-col gap-2.5">
                {business.social.map((s) => (
                  <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[var(--brand-deep)] text-[var(--brand-deep)] hover:bg-[var(--brand-deep)] hover:text-[var(--brand-cream-bright)] font-semibold text-sm transition-all w-fit" aria-label={`${s.note} on ${s.platform}`}>
                    {s.platform === "Instagram" ? <Instagram className="w-4 h-4" /> : <Facebook className="w-4 h-4" />}
                    {s.handle} · {s.followers}
                  </a>
                ))}
                <span className="text-[11px] text-[var(--brand-muted)] mt-1 italic">
                  Facebook is El Cajon-specific. Instagram covers the family of locations.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-square lg:aspect-auto lg:h-full lg:min-h-[680px] overflow-hidden rounded-2xl border border-[rgba(140,123,107,0.2)] sticky top-28">
              <iframe title="NorthPark Produce El Cajon — Google Maps" src={business.address.googleMapsEmbed} loading="lazy" className="absolute inset-0 w-full h-full" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>

        {/* All three locations footer block */}
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 mt-20">
          <div className="text-center mb-10">
            <span className="eyebrow">All Three Locations</span>
            <h2 className="mt-2 font-display headline-medium text-[var(--brand-deep)]">NorthPark Produce across San Diego.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {business.allLocations.map((loc) => (
              <div key={loc.address} className={`p-6 rounded-2xl border ${loc.current ? "border-[var(--brand-ember)] bg-[var(--brand-cream-bright)]" : "border-[rgba(140,123,107,0.2)] bg-[var(--brand-cream-bright)]"}`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-bold text-[var(--brand-deep)] leading-tight">{loc.name}</h3>
                  {loc.current && (<span className="text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full bg-[var(--brand-ember)] text-[var(--brand-deep)] font-bold mono">You&rsquo;re here</span>)}
                </div>
                <p className="text-[13px] text-[var(--brand-muted)] mb-2 leading-relaxed">{loc.address}</p>
                <a href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`} className="text-[13px] font-medium text-[var(--brand-ember)] hover:text-[var(--brand-ember-light)] phone">{loc.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
