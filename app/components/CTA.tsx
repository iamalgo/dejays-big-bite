import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 my-16">
      <div className="card bg-gradient-to-r from-brand-red/20 to-brand-orange/20 border-brand-orange/50 
                      text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-display text-4xl text-brand-cream mb-2">
              Hungry? We Got You. 🔥
            </h3>
            <p className="text-zinc-300 text-lg">
              Visit us at the truck or book us for your next event!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <Link className="btn" href="/menu">
              View Menu
            </Link>
            <Link className="btn btn-secondary" href="/catering">
              Book Catering
            </Link>
            <a 
              className="btn bg-green-700 hover:bg-green-600 border-green-600" 
              href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
