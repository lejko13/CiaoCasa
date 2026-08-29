import { Link } from "react-router-dom";
import Img from "@/common/Img";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { OBSAH_ONAS } from "@/data/i18n/onas";

// Keďže vo firme pôsobíš sám, táto stránka je poňatá ako osobný profil
// zakladateľa namiesto tímovej strany. Meno, fotku (public/images/o-nas-zakladatel.jpg
// je len zástupná – vygenerovaná placeholder fotka) a text príbehu si nahraď
// svojimi skutočnými údajmi (pozri komentár v data/i18n/onas.ts).

export default function ONasPage() {
  const { locale } = useLocale();
  const obsah = OBSAH_ONAS[locale];

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-24 md:pt-32 pb-20 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 pb-16 md:pb-24">
        <div className="w-full md:w-[36%] shrink-0">
          <div className="w-full aspect-[4/5] relative rounded-[var(--radius)] overflow-hidden">
            <Img
              src="/images/o-nas-zakladatel.jpg"
              alt={obsah.meno}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 justify-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl md:text-6xl tracking-tight">{obsah.nadpis}</h1>
            <p className="text-[var(--sivaSvetlsie)] text-sm mt-2">
              {obsah.meno} · {obsah.rola}
            </p>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
            {obsah.uvod}
          </p>
        </div>
      </div>

      <div className="max-w-2xl flex flex-col gap-4 pb-16 md:pb-24">
        <h2 className="text-white text-2xl md:text-3xl font-light tracking-tight">
          {obsah.pribehNadpis}
        </h2>
        {obsah.pribeh.map((odsek, i) => (
          <p key={i} className="text-[var(--bielasvetla)] text-sm md:text-base leading-relaxed">
            {odsek}
          </p>
        ))}
      </div>

      <div className="flex flex-col gap-8 pb-16 md:pb-24">
        <h2 className="text-white text-2xl md:text-3xl font-light tracking-tight">
          {obsah.hodnotyNadpis}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {obsah.hodnoty.map((hodnota, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-5 flex flex-col gap-3"
            >
              <h3 className="text-white text-lg">{hodnota.nazov}</h3>
              <p className="text-[var(--bielasvetla)] text-sm leading-relaxed">{hodnota.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-8 md:p-14 flex flex-col items-start gap-5">
        <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight">
          {obsah.ctaNadpis}
        </h2>
        <p className="text-[var(--bielasvetla)] text-sm md:text-base max-w-lg">{obsah.ctaText}</p>
        <Link
          to="/kontakt"
          className="mt-1 h-12 px-6 bg-[var(--biela)] rounded-full inline-flex items-center gap-2 justify-center text-[var(--cierna)] text-sm"
        >
          {obsah.ctaBtn}
        </Link>
      </div>
    </div>
  );
}
