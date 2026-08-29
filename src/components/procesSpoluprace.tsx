import type { ProcesKrok } from "@/lib/types/content";

type Props = {
  kroky?: ProcesKrok[];
  label?: string;
  nadpis?: string;
};

// Sekcia "Ako prebieha spolupráca" – 4 (alebo iný počet) kartičiek s krokmi
// procesu, zobrazuje sa na stránke služby (/sluzby/<slug>).

export default function ProcesSpoluprace({
  kroky,
  label = "Proces",
  nadpis = "Ako prebieha spolupráca",
}: Props) {
  if (!kroky || kroky.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-[var(--sivaSvetlsie)] text-xs tracking-widest uppercase">
          {label}
        </span>
        <h2 className="text-white text-3xl md:text-[2.75rem] font-light tracking-tight">
          {nadpis}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kroky.map((krok, i) => (
          <div
            key={i}
            className="bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-5 flex flex-col gap-3"
          >
            <span className="text-[var(--sivaSvetlsie)] text-xs font-light tracking-wide">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-white text-lg">{krok.Nazov}</h3>
            <span className="text-[var(--sivaSvetlsie)] text-xs">
              {krok.Trvanie}
            </span>
            <p className="text-[var(--bielasvetla)] text-sm leading-relaxed">
              {krok.Popis}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
