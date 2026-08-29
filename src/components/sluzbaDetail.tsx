import { useMemo } from "react";
import { Link } from "react-router-dom";
import Template2 from "./projektyweb";
import type { SluzbaItem } from "@/lib/types/content";
import { sluzby as sluzbySk } from "@/data/sluzby";
import ZobrazenieSluzieb from "./zobrazenieSluzieb";
import ZoznamZaskrtnutim from "./zoznamZaskrtnutim";
import ProcesSpoluprace from "./procesSpoluprace";
import CtaKarta from "./ctaKarta";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { resolveSluzba, resolveSluzby } from "@/lib/i18n/resolveContent";

type Props = {
  data: SluzbaItem;
};

export default function SluzbaDetail({ data: dataSk }: Props) {
  const { t, locale } = useLocale();
  const data = useMemo(() => resolveSluzba(dataSk, locale), [dataSk, locale]);

  const formatted = [
    {
      Vrchnytext: data.Nazov,
      Spodnytext: data.Popis,
      Fotka: data.Obrazok,
    },
  ];

  // ostatné služby na spodku stránky (bez aktuálne zobrazenej)
  const ostatneSluzby = useMemo(
    () => resolveSluzby(sluzbySk.filter((s) => s._id !== dataSk._id), locale),
    [dataSk, locale]
  );

  return (
    <Template2 text={formatted}>
      <>
        <div className="w-full h-fit bg-black flex flex-col md:flex-row p-4 pt-10 md:pt-16 gap-8 md:gap-10 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
          <div className="w-full md:w-[58%] flex flex-col gap-6">
            {data.Popis && (
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                {data.Popis}
              </p>
            )}

            {data.PopisDlhy && (
              <p className="text-[var(--bielasvetla)] text-sm md:text-base leading-relaxed">
                {data.PopisDlhy}
              </p>
            )}

            <Link
              to="/kontakt"
              className="w-fit h-12 px-6 bg-[var(--biela)] rounded-[var(--radiusInsie)] flex items-center justify-center text-[var(--cierna)] text-sm"
            >
              {t.sluzba.nezavazneKontaktovat}
            </Link>
          </div>

          <div className="w-full md:w-[42%]">
            <ZoznamZaskrtnutim nadpis={t.sluzba.coJeZahrnute} polozky={data.CoJeZahrnute} />
          </div>
        </div>

        {data.Proces && data.Proces.length > 0 && (
          <div className="pt-14 md:pt-20 h-fit w-full bg-black flex flex-col p-4 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
            <ProcesSpoluprace
              kroky={data.Proces}
              label={t.sluzba.proces}
              nadpis={t.sluzba.akoPrebiehaSpolupraca}
            />
          </div>
        )}

        <div className="pt-14 md:pt-20 h-fit w-full bg-black flex flex-col p-4 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
          <CtaKarta
            nadpis={t.sluzba.mateProjektNaMysli}
            text={t.sluzba.mateProjektText}
            btnText={t.sluzba.mamZaujem}
            btnHref="/kontakt"
          />
        </div>

        {ostatneSluzby.length > 0 && (
          <div className="pt-14 md:pt-20 h-fit w-full bg-black flex flex-col p-4 pb-4 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">
            <h2 className="text-white text-3xl md:text-[2.75rem] font-light tracking-tight pb-6 md:pb-10">
              {t.sluzba.dalsieSluzby}
            </h2>
            <ZobrazenieSluzieb TypSlubzy={ostatneSluzby} />
          </div>
        )}
      </>
    </Template2>
  );
}
