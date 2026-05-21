"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Facebook, ExternalLink } from "lucide-react";
import { business } from "@/lib/business";
import { images } from "@/lib/images";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/market", label: "The Market" },
  { href: "/catering", label: "Catering" },
  { href: "/weekly-ad", label: "Weekly Ad" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const orderTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOrderOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openOrder = () => {
    if (orderTimer.current) clearTimeout(orderTimer.current);
    setOrderOpen(true);
  };
  const closeOrder = () => {
    if (orderTimer.current) clearTimeout(orderTimer.current);
    orderTimer.current = setTimeout(() => setOrderOpen(false), 120);
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[rgba(15,10,6,0.88)] border-b border-[rgba(232,118,44,0.18)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between h-[72px] md:h-[84px]"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-50"
            aria-label="NorthPark Produce El Cajon — Home"
          >
            <div className="relative w-[44px] h-[44px] md:w-[52px] md:h-[52px] overflow-hidden rounded-none">
              <Image
                src={images.logo}
                alt="NorthPark Produce"
                fill
                sizes="52px"
                className="object-contain logo-blend-screen"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[15px] md:text-[17px] font-bold text-[var(--brand-cream-bright)] tracking-tight">
                NorthPark Produce
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--brand-ember)] mt-1 mono">
                El Cajon · Since 1980
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-2 text-[14px] font-medium text-[var(--brand-cream)] hover:text-[var(--brand-ember)] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[var(--brand-ember)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </li>
            ))}

            <li
              className="relative ml-2"
              onMouseEnter={openOrder}
              onMouseLeave={closeOrder}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[var(--brand-ember)] hover:bg-[var(--brand-ember-light)] text-[var(--brand-deep)] text-[14px] font-semibold transition-all"
                aria-haspopup="true"
                aria-expanded={orderOpen}
                onClick={() => setOrderOpen((s) => !s)}
              >
                Order Now
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    orderOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {orderOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full right-0 mt-3 min-w-[280px] rounded-xl backdrop-blur-xl bg-[rgba(15,10,6,0.97)] border border-[rgba(232,118,44,0.25)] overflow-hidden shadow-2xl"
                  >
                    <div className="p-2">
                      {business.delivery.map((d, i) => (
                        <motion.a
                          key={d.platform}
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 + i * 0.04 }}
                          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[rgba(232,118,44,0.12)] transition-colors group"
                        >
                          <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-[var(--brand-cream-bright)] group-hover:text-[var(--brand-ember)] transition-colors">
                              {d.platform}
                            </span>
                            <span className="text-[11px] text-[var(--brand-muted)] mt-0.5">
                              {d.tagline} · {d.eta}
                            </span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-[var(--brand-muted)] group-hover:text-[var(--brand-ember)] transition-colors" />
                        </motion.a>
                      ))}
                      <div className="my-2 mx-3 h-px bg-[rgba(232,118,44,0.15)]" />
                      <a
                        href={`tel:${business.phoneTel}`}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-[rgba(232,118,44,0.12)] transition-colors text-[var(--brand-cream)] hover:text-[var(--brand-ember)]"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-[13px] font-medium phone">
                          Call to order · {business.phone}
                        </span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <button
            type="button"
            className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center text-[var(--brand-cream)] hover:text-[var(--brand-ember)] transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-7 h-7" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 36px) 42px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 36px) 42px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 36px) 42px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[var(--brand-deep)] grain"
            />

            <div className="relative h-full overflow-y-auto pt-24 pb-12 px-6 flex flex-col">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.18 + i * 0.05,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-display block py-4 text-3xl font-bold text-[var(--brand-cream-bright)] hover:text-[var(--brand-ember)] transition-colors border-b border-[rgba(232,118,44,0.12)]"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-8"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-ember)] mb-3 mono">
                  Order Online
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {business.delivery.map((d) => (
                    <a
                      key={d.platform}
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center py-3 rounded-lg bg-[var(--brand-ember)] text-[var(--brand-deep)] font-semibold text-sm"
                    >
                      {d.platform}
                    </a>
                  ))}
                </div>
                <a
                  href={`tel:${business.phoneTel}`}
                  onClick={() => setMobileOpen(false)}
                  className="mt-2.5 flex items-center justify-center gap-2 py-3 rounded-lg border border-[var(--brand-ember)] text-[var(--brand-ember)] font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="phone">Call {business.phone}</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-auto pt-8 flex items-center justify-between"
              >
                <a
                  href={business.social[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[var(--brand-muted)] hover:text-[var(--brand-ember)] transition-colors"
                  aria-label="Follow on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Facebook</span>
                </a>
                <span className="text-xs text-[var(--brand-muted)] mono">
                  432 E Chase Ave · El Cajon
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
