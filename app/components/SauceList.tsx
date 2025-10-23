import { sauces } from "@/lib/data/menu";
import { Flame } from "lucide-react";

export default function SauceList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {sauces.map((sauce) => (
        <div 
          key={sauce}
          className="flex items-center gap-3 rounded-lg border-2 border-brand-red/40 
                     bg-zinc-900/60 px-4 py-3 hover:border-brand-orange hover:bg-zinc-800/80 
                     transition-all group"
        >
          <Flame className="text-brand-orange group-hover:text-brand-red transition-colors" size={20} />
          <span className="font-semibold text-brand-cream group-hover:text-brand-orange transition-colors">
            {sauce}
          </span>
        </div>
      ))}
    </div>
  );
}
