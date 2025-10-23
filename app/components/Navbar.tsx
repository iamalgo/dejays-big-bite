"use client";

import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-brand-red/30 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity"
        >
          <Image
            src="/brand-logo.png"
            width={72}
            height={72}
            alt={`${site.name} logo`}
            className="rounded-full shadow-glow"
          />
          <div className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wider text-brand-cream">
              {site.name}
            </span>
            <span className="text-xs md:text-sm text-brand-orange font-semibold tracking-widest">
              {site.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-6 lg:flex items-center">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href as any}
              className={clsx(
                "font-bold tracking-wide no-underline uppercase text-sm transition-colors",
                pathname === n.href 
                  ? "text-brand-orange" 
                  : "text-brand-cream hover:text-brand-orange"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            className="btn flex items-center gap-2" 
            href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
          >
            <Phone size={18} />
            {site.phone}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-brand-cream hover:text-brand-orange transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-red/30 bg-black/98 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href as any}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "font-bold tracking-wide no-underline uppercase text-sm py-2 transition-colors",
                  pathname === n.href 
                    ? "text-brand-orange" 
                    : "text-brand-cream hover:text-brand-orange"
                )}
              >
                {n.label}
              </Link>
            ))}
            <a 
              className="btn w-full mt-2" 
              href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            >
              <Phone size={18} />
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
