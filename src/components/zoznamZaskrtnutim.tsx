import { Check } from "lucide-react";

type Props = {
  nadpis?: string;
  polozky?: string[];
  className?: string;
};

// Zaškrtávací zoznam (napr. "Čo je zahrnuté" na stránke služby, alebo
// "Čo projekt zahŕňal" na detaile projektu). Ak nie sú žiadne položky,
// komponent sa vôbec nevykreslí.

export default function ZoznamZaskrtnutim({
  nadpis = "Čo je zahrnuté",
  polozky,
  className = "",
}: Props) {
  if (!polozky || polozky.length === 0) {
    return null;
  }

  return (
    <div
      className={`w-full bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-6 md:p-8 flex flex-col gap-5 ${className}`}
    >
      <span className="text-[var(--sivaSvetlsie)] text-xs tracking-widest uppercase">
        {nadpis}
      </span>

      <ul className="flex flex-col gap-4">
        {polozky.map((polozka, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="text-[var(--bielasvetla)] text-sm md:text-base">
              {polozka}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
