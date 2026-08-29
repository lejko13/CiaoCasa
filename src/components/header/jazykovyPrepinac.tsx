import { useRef, useState } from "react";
import { LOCALES, LOCALE_LABELS, LOCALE_SHORT } from "@/lib/i18n/locales";
import { useLocale } from "@/lib/i18n/LocaleProvider";

// Prepínač jazyka webu (SK / EN / IT). Zobrazuje skratku aktuálneho jazyka,
// po kliknutí sa rozbalí zoznam s výberom. Používa sa v hlavičke – v PC aj
// mobilnej verzii (mobilná verzia je širšia, na celú šírku).

type Props = {
  mobil?: boolean;
};

export function JazykovyPrepinac({ mobil = false }: Props) {
  const { locale, setLocale, t } = useLocale();
  const [otvorene, setOtvorene] = useState(false);
  const referencia = useRef<HTMLDivElement | null>(null);

  if (mobil) {
    return (
      <div className="w-full flex flex-col gap-2">
        <span className="text-[var(--sivaSvetlsie)] text-sm">{t.jazyk.label}</span>
        <div className="w-full flex gap-2">
          {LOCALES.map((kod) => (
            <button
              key={kod}
              type="button"
              onClick={() => setLocale(kod)}
              className={`flex-1 h-10 rounded-[var(--radiusInsie)] text-sm cursor-pointer transition-colors border ${
                locale === kod
                  ? "bg-[var(--biela)] text-[var(--cierna)] border-[var(--biela)]"
                  : "border-[var(--sivaTmava)] text-white hover:border-neutral-400"
              }`}
            >
              {LOCALE_SHORT[kod]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={referencia} className="relative h-10 flex items-center">
      <button
        type="button"
        onClick={() => setOtvorene((prev) => !prev)}
        onBlur={() => setTimeout(() => setOtvorene(false), 150)}
        className="h-9 px-3 rounded-[var(--radiusInsie)] border border-white/20 text-white text-sm flex items-center gap-1 cursor-pointer hover:border-white/40 transition-colors"
      >
        {LOCALE_SHORT[locale]}
      </button>

      {otvorene && (
        <div className="absolute top-11 right-0 min-w-[140px] bg-[var(--cierna)] border border-[var(--sivaTmava)] rounded-[var(--radiusInsie)] overflow-hidden shadow-2xl z-10">
          {LOCALES.map((kod) => (
            <button
              key={kod}
              type="button"
              onMouseDown={() => {
                setLocale(kod);
                setOtvorene(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm cursor-pointer transition-colors ${
                locale === kod
                  ? "text-white bg-white/10"
                  : "text-[var(--bielasvetla)] hover:bg-white/5"
              }`}
            >
              {LOCALE_LABELS[kod]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
