import MenuGrid from "../components/MenuGridClean";
import SauceList from "../components/SauceList";
import { Flame } from "lucide-react";

export const metadata = {
  title: "Menu",
  description: "Explore our full menu of wings, burgers, quesadillas, sandwiches, ribs, and more. All served with our signature SUPERLIT sauces."
};

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flame className="text-brand-orange" size={40} />
          <h1 className="font-display text-6xl">Menu</h1>
          <Flame className="text-brand-orange" size={40} />
        </div>
        <p className="text-zinc-300 text-xl max-w-2xl mx-auto">
          Bold flavors. Fresh ingredients. Served hot off the truck.
        </p>
      </div>

      <MenuGrid />

      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="font-display text-4xl mb-3">Signature Sauces</h2>
          <p className="text-zinc-400">
            Every dish gets better with our house-made SUPERLIT sauces
          </p>
        </div>
        <SauceList />
      </div>

      {/* Allergen Info */}
      <div className="card bg-zinc-900/50 border-zinc-700 mt-12 text-center">
        <p className="text-zinc-300">
          <strong className="text-brand-orange">Dietary Accommodations:</strong> We offer vegetarian, 
          vegan, and gluten-free options. Just ask when you order!
        </p>
      </div>
    </section>
  );
}
