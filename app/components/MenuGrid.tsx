"use client";

import { categories, menuNotes } from "@/lib/data/menu";
import { currency } from "@/lib/utils";
import { Flame } from "lucide-react";

export default function MenuGrid() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <section key={cat.id} className="card">
            <div className="flex items-center gap-3 mb-5">
              <Flame className="text-brand-orange" size={28} />
              <h3 className="font-display text-3xl tracking-wide text-brand-cream">{cat.title}</h3>
            </div>

            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li key={item.name} className="border-b border-zinc-800 pb-4 last:border-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <p className="font-bold text-brand-cream text-lg">{item.name}</p>
                        {item.price && <span className="font-bold text-brand-orange text-lg">{currency(item.price)}</span>}
                      </div>

                      {item.description && <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{item.description}</p>}
                      {item.note && <p className="text-xs text-brand-orange/80 mt-1 italic">{item.note}</p>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {menuNotes.length > 0 && (
        <section className="card bg-brand-red/10 border-brand-red/30">
          <ul className="text-zinc-300 space-y-2 text-sm">
            {menuNotes.map((note) => (
              <li key={note} className="flex items-start gap-2">
                <span className="text-brand-orange mt-1">★</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
