import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-wings.jpg"
          alt="Fire Wings"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        
        {/* Flame decorations */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-red/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flame className="text-brand-orange animate-pulse" size={40} />
          <Flame className="text-brand-red animate-pulse" size={50} />
          <Flame className="text-brand-orange animate-pulse" size={40} />
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider leading-none mb-6">
          The Sauce is{" "}
          <span className="fire-text block md:inline text-6xl md:text-8xl lg:text-9xl">
            SUPERLIT
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-brand-cream/90 max-w-3xl mx-auto leading-relaxed">
          Bold Southern flavor meets Italian inspiration. Wings, burgers, ribs, and more—served hot from Birmingham's favorite food truck.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/menu" className="btn text-base w-full sm:w-auto">
            🔥 View Full Menu
          </Link>
          <Link href="/catering" className="btn btn-secondary text-base w-full sm:w-auto">
            🎉 Book Catering
          </Link>
        </div>

        <div className="mt-8 text-brand-cream/70">
          <p className="text-sm">Ready to order?</p>
          <a 
            href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            className="text-xl font-bold text-brand-orange hover:text-brand-red transition-colors no-underline"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
