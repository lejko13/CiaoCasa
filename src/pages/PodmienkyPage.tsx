import { siteInfo, pravnyNazov } from "@/data/siteInfo";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { PODMIENKY } from "@/data/i18n/legal";
import { vykresliPravnyText } from "@/lib/i18n/legalText";

// Toto je ZÁSTUPNÝ text obchodných podmienok (nie je to právne poradenstvo).
// Pred spustením webu do prevádzky si dej text skontrolovať/napísať
// právnikom podľa reálnej ponuky služieb. Preklady (sk/en/it) sú v
// data/i18n/legal.ts.

export default function PodmienkyPage() {
  const { locale } = useLocale();
  const obsah = PODMIENKY[locale];

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-24 md:pt-32 pb-20 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <h1 className="text-4xl md:text-6xl tracking-tight mb-4">{obsah.nadpis}</h1>

      <p className="text-[var(--sivaSvetlsie)] text-sm mb-12 max-w-2xl">
        {obsah.uvod}
      </p>

      <div className="max-w-2xl flex flex-col gap-8 text-sm md:text-base text-white/80 leading-relaxed">
        {obsah.sekcie.map((sekcia, i) => (
          <section key={i}>
            <h2 className="text-white text-xl mb-2">{sekcia.nadpis}</h2>
            <p>
              {vykresliPravnyText(sekcia.text, {
                nazov: pravnyNazov,
                email: siteInfo.email,
              })}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
