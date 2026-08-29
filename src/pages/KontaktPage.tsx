import { siteInfo } from "@/data/siteInfo";
import KontaktFormular from "@/components/kontaktFormular";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function KontaktPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-24 md:pt-32 pb-20 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <h1 className="text-4xl md:text-6xl tracking-tight mb-10">{t.kontakt.nadpis}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
            {t.kontakt.napisteNamNa}
          </p>
          <a
            href={`mailto:${siteInfo.email}`}
            className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
          >
            {siteInfo.email}
          </a>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
            {t.kontakt.zavolajteNam}
          </p>
          <a
            href={`tel:${siteInfo.telefon.replace(/\s/g, "")}`}
            className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
          >
            {siteInfo.telefon}
          </a>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
            {t.kontakt.adresa}
          </p>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            {siteInfo.adresaSK}
          </p>
        </div>

        {siteInfo.socialneSiete.length > 0 && (
          <div>
            <p className="text-[11px] uppercase tracking-widest text-white/40 mb-3">
              {t.kontakt.sledujteNas}
            </p>
            <div className="flex flex-col gap-1">
              {siteInfo.socialneSiete.map((odkaz, i) => (
                <a
                  key={i}
                  href={odkaz.odkaz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-white/80 underline underline-offset-2 hover:text-white transition-colors"
                >
                  {odkaz.nazov}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-4xl mt-16 md:mt-20">
        <p className="text-[11px] uppercase tracking-widest text-white/40 mb-4">
          {t.kontakt.aleboNamNapiste}
        </p>
        <KontaktFormular email={siteInfo.email} />
      </div>
    </div>
  );
}
