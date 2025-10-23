import Link from "next/link";
import { site } from "@/lib/site";
import { CheckCircle, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Catering & Events",
  description: "Book Dejay's Big Bite for your next event. Full-service catering for corporate events, parties, festivals, and celebrations in Birmingham, AL."
};

export default function CateringPage() {
  const services = [
    "Employee appreciation days & corporate lunches",
    "Customer events & product launches",
    "Community festivals & fundraisers",
    "Birthday parties & family celebrations",
    "Weddings & special occasions",
    "On-site setup, service, and cleanup"
  ];

  const offerings = [
    "Flexible packages for 10-500+ guests",
    "Custom menus built around your favorites",
    "Vegetarian, vegan, and gluten-free options",
    "Professional service from experienced chef",
    "Full equipment & staff provided",
    "Competitive pricing with no hidden fees"
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-6xl mb-4">Catering & Events</h1>
        <p className="text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Bring the bold flavors of Dejay's Big Bite to your next gathering. 
          From intimate parties to large corporate events, we bring the grill and the good vibes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Services */}
        <div className="card">
          <h2 className="font-display text-3xl mb-6 text-brand-orange">Perfect For</h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <CheckCircle className="text-brand-orange shrink-0 mt-0.5" size={20} />
                <span className="text-zinc-300">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Offerings */}
        <div className="card">
          <h2 className="font-display text-3xl mb-6 text-brand-orange">What We Offer</h2>
          <ul className="space-y-3">
            {offerings.map((offering) => (
              <li key={offering} className="flex items-start gap-3">
                <CheckCircle className="text-brand-orange shrink-0 mt-0.5" size={20} />
                <span className="text-zinc-300">{offering}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="card bg-gradient-to-r from-brand-red/10 to-brand-orange/10 border-brand-orange/30 mb-12">
        <h2 className="font-display text-3xl mb-6 text-center">
          Why Partner with Dejay's Big Bite?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl mb-2">🔥</div>
            <h3 className="font-bold text-brand-orange mb-2">Experience You Can Taste</h3>
            <p className="text-zinc-400 text-sm">
              {site.experience} in professional kitchens delivering food that satisfies every palate
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="font-bold text-brand-orange mb-2">Total Convenience</h3>
            <p className="text-zinc-400 text-sm">
              We handle everything—setup, service, and cleanup—right at your location
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-bold text-brand-orange mb-2">Local & Proud</h3>
            <p className="text-zinc-400 text-sm">
              Supporting local businesses strengthens our community and boosts engagement
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card text-center bg-zinc-900/80">
        <h2 className="font-display text-4xl mb-4">
          Let's Make Your Event Special
        </h2>
        <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
          Ready to discuss how Dejay's Big Bite can serve your team and become part of your event experience?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link className="btn text-lg w-full sm:w-auto" href="/contact">
            📋 Request a Quote
          </Link>
          <a 
            className="btn bg-green-700 hover:bg-green-600 border-green-600 text-lg w-full sm:w-auto" 
            href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
          >
            <Phone size={20} />
            Call {site.phone}
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 text-sm mb-2">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a 
              href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 text-brand-orange hover:text-brand-red transition-colors no-underline"
            >
              <Phone size={16} />
              {site.phone}
            </a>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <a 
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-brand-orange hover:text-brand-red transition-colors no-underline"
            >
              <Mail size={16} />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* View Menu Link */}
      <div className="text-center mt-8">
        <p className="text-zinc-400 mb-3">Want to see what we can serve?</p>
        <Link href="/menu" className="btn btn-secondary">
          View Full Menu
        </Link>
      </div>
    </section>
  );
}
