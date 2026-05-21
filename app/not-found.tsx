import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-[var(--brand-deep)] text-[var(--brand-cream)] px-5 grain">
      <div className="max-w-xl mx-auto text-center pt-24 pb-16">
        <div className="font-display text-[var(--brand-gold)] text-7xl md:text-9xl font-black tnum mb-4">
          404
        </div>
        <h1 className="font-display headline-large">
          That aisle doesn&rsquo;t exist.
          <br />
          <span className="italic text-[var(--brand-gold)]">
            But the bakery is open.
          </span>
        </h1>
        <p className="mt-6 text-[16px] opacity-80 leading-relaxed">
          The page you&rsquo;re looking for has moved or never existed. Come
          back to the market — we&rsquo;ll show you around.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--brand-gold)] text-[var(--brand-deep)] font-semibold text-[15px] hover:bg-[var(--brand-gold-hover)] transition-colors group"
        >
          <Home className="w-4 h-4" />
          Back to Homepage
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
