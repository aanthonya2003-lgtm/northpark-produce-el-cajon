import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, BadgeCheck } from "lucide-react";
import { business } from "@/lib/business";
import { images } from "@/lib/images";

const footerNav = [
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/menu", label: "Grill Menu" },
      { href: "/market", label: "The Market" },
      { href: "/catering", label: "Catering" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/order", label: "Order Online" },
      { href: "/weekly-ad", label: "Weekly Ad" },
      { href: "/contact", label: "Visit & Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[var(--brand-deep)] text-[var(--brand-cream)] overflow-hidden grain">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-ember)] to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-[56px] h-[56px] overflow-hidden">
                <Image
                  src={images.logo}
                  alt="NorthPark Produce"
                  fill
                  sizes="56px"
                  className="object-contain logo-blend-screen"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-bold text-[var(--brand-cream-bright)]">
                  NorthPark Produce
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-ember)] mt-1.5 mono">
                  El Cajon · Since 1980
                </span>
              </div>
            </Link>

            <p className="mt-6 text-[15px] leading-relaxed text-[var(--brand-cream)] opacity-80 max-w-md">
              A family-owned international market and Mediterranean grill, halal
              certified, serving El Cajon and Greater San Diego with fresh bread
              baked daily, hand-cut halal meats, and the most extensive sheesha
              selection in the county.
            </p>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              {business.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-[rgba(200,146,42,0.3)] hover:border-[var(--brand-ember)] hover:bg-[rgba(200,146,42,0.12)] text-[var(--brand-ember)] transition-all"
                  aria-label={`${s.note} — ${s.platform}`}
                  title={`${s.platform} · ${s.followers} · ${s.note}`}
                >
                  {s.platform === "Instagram" ? (
                    <Instagram className="w-4 h-4" />
                  ) : (
                    <Facebook className="w-4 h-4" />
                  )}
                </a>
              ))}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.3)] text-[var(--brand-saffron)] text-[10px] uppercase tracking-[0.2em] mono">
                <BadgeCheck className="w-3 h-3" />
                Halal Certified
              </span>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--brand-ember)] font-sans font-medium mb-4 mono">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-[var(--brand-cream)] opacity-75 hover:opacity-100 hover:text-[var(--brand-ember)] transition-all"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[var(--brand-ember)] font-sans font-medium mb-4 mono">
              Visit Us
            </h3>
            <ul className="space-y-3.5 text-[14px]">
              <li className="flex items-start gap-2.5 text-[var(--brand-cream)] opacity-80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--brand-ember)]" />
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--brand-ember)] transition-colors"
                >
                  432 E Chase Ave
                  <br />
                  El Cajon, CA 92020
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[var(--brand-cream)] opacity-80">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--brand-ember)]" />
                <a
                  href={`tel:${business.phoneTel}`}
                  className="phone hover:text-[var(--brand-ember)] transition-colors"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[var(--brand-cream)] opacity-80">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--brand-ember)]" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-[var(--brand-ember)] transition-colors break-all"
                >
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[var(--brand-cream)] opacity-80">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-[var(--brand-ember)]" />
                <span className="hours">
                  Mon–Fri 7:30a–10p
                  <br />
                  Sat–Sun 8a–10p
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[rgba(200,146,42,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[12px] text-[var(--brand-cream)] opacity-55">
            © {new Date().getFullYear()} NorthPark Produce. All rights reserved.
            Proudly serving El Cajon, San Diego &amp; Poway since 1980.
          </p>
          <div className="flex items-center gap-5 text-[12px] text-[var(--brand-cream)] opacity-55 mono">
            <span>Halal Certified</span>
            <span aria-hidden>·</span>
            <span>Family Owned</span>
            <span aria-hidden>·</span>
            <span>45+ Years</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
