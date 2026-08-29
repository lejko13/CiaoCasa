import { Link } from "react-router-dom";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { OBSAH_PRE_FIRMY } from "@/data/i18n/prefirmy";
import ZoznamZaskrtnutim from "@/components/zoznamZaskrtnutim";
import CtaKarta from "@/components/ctaKarta";

export default function PreFirmyPage() {
  const { locale } = useLocale();
  const obsah = OBSAH_PRE_FIRMY[locale];

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-24 md:pt-32 pb-20 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <div className="max-w-3xl flex flex-col gap-5 pb-14 md:pb-20">
        <h1 className="text-4xl md:text-6xl tracking-tight">{obsah.nadpis}</h1>
        <p className="text-white/70 text-base md:text-lg leading-relaxed">{obsah.uvod}</p>
        <Link
          to="/kontakt"
          className="w-fit h-12 px-6 mt-2 bg-[var(--biela)] rounded-[var(--radiusInsie)] flex items-center justify-center text-[var(--cierna)] text-sm"
        >
          {obsah.ctaBtn}
        </Link>
      </div>

      <div className="max-w-3xl pb-14 md:pb-20">
        <ZoznamZaskrtnutim nadpis={obsah.ponukaNadpis} polozky={obsah.ponuka} />
      </div>

      <div className="max-w-4xl flex flex-col gap-8 pb-14 md:pb-20">
        <h2 className="text-white text-2xl md:text-3xl font-light tracking-tight">
          {obsah.procesNadpis}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {obsah.proces.map((krok, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-5 flex flex-col gap-3"
            >
              <span className="text-[var(--sivaSvetlsie)] text-xs font-light tracking-wide">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white text-lg">{krok.nazov}</h3>
              <p className="text-[var(--bielasvetla)] text-sm leading-relaxed">{krok.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl">
        <CtaKarta
          nadpis={obsah.ctaNadpis}
          text={obsah.ctaText}
          btnText={obsah.ctaBtn}
          btnHref="/kontakt"
        />
      </div>
    </div>
  );
}
