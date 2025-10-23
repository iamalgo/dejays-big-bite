import { site } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/50 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-3">
        {/* About */}
        <div>
          <h3 className="font-display text-3xl tracking-wide text-brand-orange mb-3">
            {site.name}
          </h3>
          <p className="text-brand-cream/90 mb-2 font-semibold">
            {site.tagline}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Bold Southern flavors with an Italian twist. Serving Birmingham with {site.experience} of culinary passion.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-xl text-brand-cream mb-4">Contact Us</h4>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-orange" />
              <a 
                href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                className="hover:text-brand-orange no-underline"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-orange" />
              <a 
                href={`mailto:${site.email}`}
                className="hover:text-brand-orange no-underline"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-orange" />
              <span>{site.address} • {site.businessType}</span>
            </li>
          </ul>
        </div>

        {/* Hours & Services */}
        <div>
          <h4 className="font-display text-xl text-brand-cream mb-4">Services</h4>
          <ul className="text-zinc-300 space-y-2 text-sm">
            <li>🔥 On-site food truck service</li>
            <li>🎉 Event & corporate catering</li>
            <li>🍽️ Custom menu planning</li>
            <li>🌱 Dietary accommodations available</li>
          </ul>
          <p className="text-zinc-400 mt-4 text-sm italic">
            Follow us on social media for location updates & specials!
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center gap-4">
            <p>Made with 🔥 by {site.chef}</p>
            <a
              href="https://www.iamalgo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-brand-orange no-underline text-sm"
            >
              Powered by IAMALGO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
