import Hero from "./components/Hero";
import MenuGrid from "./components/MenuGridClean";
import SauceList from "./components/SauceList";
import CTA from "./components/CTA";
import Image from "next/image";
import { site } from "@/lib/site";
import { Flame, Users, Award, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center hover:border-brand-orange transition-colors">
            <Flame className="text-brand-orange mx-auto mb-3" size={40} />
            <h3 className="font-display text-2xl mb-2">Bold Flavors</h3>
            <p className="text-zinc-400 text-sm">Southern + Italian fusion done right</p>
          </div>
          <div className="card text-center hover:border-brand-orange transition-colors">
            <Award className="text-brand-orange mx-auto mb-3" size={40} />
            <h3 className="font-display text-2xl mb-2">{site.experience}</h3>
            <p className="text-zinc-400 text-sm">Professional culinary expertise</p>
          </div>
          <div className="card text-center hover:border-brand-orange transition-colors">
            <Users className="text-brand-orange mx-auto mb-3" size={40} />
            <h3 className="font-display text-2xl mb-2">Catering</h3>
            <p className="text-zinc-400 text-sm">Events, parties & corporate lunches</p>
          </div>
          <div className="card text-center hover:border-brand-orange transition-colors">
            <Clock className="text-brand-orange mx-auto mb-3" size={40} />
            <h3 className="font-display text-2xl mb-2">Fresh Daily</h3>
            <p className="text-zinc-400 text-sm">Made fresh at every stop</p>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="mb-12">
          <h2 className="font-display text-5xl mb-2 text-center">
            Fan Favorites
          </h2>
          <p className="text-center text-zinc-400 mb-8">
            The dishes that keep Birmingham coming back for more
          </p>
          <MenuGrid />
        </div>

        {/* Sauces Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-display text-5xl mb-3">
              Chef's Amazing Sauces
            </h2>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
              Pick your fighter. Sweet heat, smoky, or downright dangerous—each sauce is crafted to perfection.
            </p>
          </div>
          <SauceList />
        </div>
      </section>

      <CTA />

      {/* About Preview */}
      <section className="bg-zinc-900/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl mb-4">
                Meet {site.chef}
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                With {site.experience} in professional kitchens, Chef Ron brings passion, 
                skill, and bold creativity to every dish. From gourmet tacos to classic 
                southern comfort food, he's perfected recipes that bring people together.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Dejay's Big Bite combines Southern soul with Italian inspiration, 
                all served fresh from our food truck across Birmingham.
              </p>
              <a href="/about" className="btn">
                Learn More About Us
              </a>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/food-collage.jpg"
                alt="Dejay's Big Bite Food"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
