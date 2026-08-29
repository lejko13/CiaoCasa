import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, SlidersHorizontal, X } from "lucide-react"
import ProjectCardCenter from "./karta2lenkarta/karta2lenkarta"
import Img from "@/common/Img"
import type { Projekt } from "@/lib/types/content"
import {
  TYP_PROJEKTU_MOZNOSTI,
  STAV_PROJEKTU_MOZNOSTI,
  STYL_DIZAJNU_MOZNOSTI,
  TYP_VYUZITIA_MOZNOSTI,
} from "@/lib/types/content"
import { useLocale } from "@/lib/i18n/LocaleProvider"
import { prelozMoznost } from "@/lib/i18n/moznosti"
import { resolveProjekty } from "@/lib/i18n/resolveContent"
import type { UiSlovnik } from "@/lib/i18n/ui"

type Props = {
  data:Projekt[]
}

type FiltreStav = {
  typProjektu: string[];
  stavProjektu: string[];
  stylDizajnu: string[];
  typVyuzitia: string[];
};

const PRAZDNE_FILTRE: FiltreStav = {
  typProjektu: [],
  stavProjektu: [],
  stylDizajnu: [],
  typVyuzitia: [],
};

function vytvorSkupiny(
  t: UiSlovnik
): { kluc: keyof FiltreStav; nazov: string; moznosti: readonly string[] }[] {
  return [
    { kluc: "typProjektu", nazov: t.filter.typProjektu, moznosti: TYP_PROJEKTU_MOZNOSTI },
    { kluc: "stavProjektu", nazov: t.filter.stavProjektu, moznosti: STAV_PROJEKTU_MOZNOSTI },
    { kluc: "stylDizajnu", nazov: t.filter.stylDizajnu, moznosti: STYL_DIZAJNU_MOZNOSTI },
    { kluc: "typVyuzitia", nazov: t.filter.typVyuzitia, moznosti: TYP_VYUZITIA_MOZNOSTI },
  ];
}

function pocetVybranych(f: FiltreStav) {
  return (
    f.typProjektu.length +
    f.stavProjektu.length +
    f.stylDizajnu.length +
    f.typVyuzitia.length
  );
}

function zhodujeSaProjekt(item: Projekt, f: FiltreStav) {
  if (
    f.typProjektu.length > 0 &&
    !f.typProjektu.some((v) => item.TypProjektu?.includes(v))
  ) {
    return false;
  }

  if (f.stavProjektu.length > 0 && !f.stavProjektu.includes(item.StavProjektu)) {
    return false;
  }

  if (
    f.stylDizajnu.length > 0 &&
    !f.stylDizajnu.some((v) => item.StylDizajnu?.includes(v))
  ) {
    return false;
  }

  if (
    f.typVyuzitia.length > 0 &&
    !f.typVyuzitia.some((v) => item.TypVyuzitia?.includes(v))
  ) {
    return false;
  }

  return true;
}

export default  function ProjetkyStranka({data: dataSk} : Props) {
  const { locale, t } = useLocale();
  const SKUPINY = useMemo(() => vytvorSkupiny(t), [t]);
  const data = useMemo(() => resolveProjekty(dataSk, locale), [dataSk, locale]);

  const [otvoreny, setOtvoreny] = useState(false);
  const [aktivneFiltre, setAktivneFiltre] = useState<FiltreStav>(PRAZDNE_FILTRE);
  const [draftFiltre, setDraftFiltre] = useState<FiltreStav>(PRAZDNE_FILTRE);
  // na mobile sa skupiny filtrov rozbaľujú (accordion), aby bolo menej scrolu –
  // defaultne otvorená len prvá skupina; na desktope sú viditeľné vždy všetky
  const [rozbaleneSkupiny, setRozbaleneSkupiny] = useState<Record<string, boolean>>({
    typProjektu: true,
  });

  const otvoritFiltre = () => {
    setDraftFiltre(aktivneFiltre);
    setRozbaleneSkupiny({ typProjektu: true });
    setOtvoreny(true);
  };

  const prepnutSkupinu = (kluc: string) => {
    setRozbaleneSkupiny((prev) => ({ ...prev, [kluc]: !prev[kluc] }));
  };

  const zavriet = () => setOtvoreny(false);

  const prepnutFilter = (skupina: keyof FiltreStav, hodnota: string) => {
    setDraftFiltre((prev) => {
      const existujuce = prev[skupina];
      const dalsie = existujuce.includes(hodnota)
        ? existujuce.filter((v) => v !== hodnota)
        : [...existujuce, hodnota];
      return { ...prev, [skupina]: dalsie };
    });
  };

  const odobratAktivny = (skupina: keyof FiltreStav, hodnota: string) => {
    setAktivneFiltre((prev) => ({
      ...prev,
      [skupina]: prev[skupina].filter((v) => v !== hodnota),
    }));
  };

  const potvrditFiltre = () => {
    setAktivneFiltre(draftFiltre);
    setOtvoreny(false);
  };

  const resetovatFiltre = () => setDraftFiltre(PRAZDNE_FILTRE);

  const filtrovaneProjekty = useMemo(
    () => data.filter((item) => zhodujeSaProjekt(item, aktivneFiltre)),
    [data, aktivneFiltre]
  );

  const nahladProjekty = useMemo(
    () => data.filter((item) => zhodujeSaProjekt(item, draftFiltre)),
    [data, draftFiltre]
  );

  const pocetAktivnych = pocetVybranych(aktivneFiltre);

  const aktivneChipy = SKUPINY.flatMap((skupina) =>
    aktivneFiltre[skupina.kluc].map((hodnota) => ({
      skupina: skupina.kluc,
      hodnota,
    }))
  );

  return <div className="w-[full] h-fit p-4 pt-19 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

    <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-6">
      <div className="flex flex-wrap items-center gap-2">
        {aktivneChipy.map((chip) => (
          <button
            key={`${chip.skupina}-${chip.hodnota}`}
            type="button"
            onClick={() => odobratAktivny(chip.skupina, chip.hodnota)}
            className="inline-flex items-center gap-1.5 h-8 pl-3 pr-2 rounded-full bg-white/[0.06] border border-[var(--sivaTmava)] text-[var(--bielasvetla)] text-xs hover:border-neutral-400 transition-colors cursor-pointer"
          >
            {prelozMoznost(chip.hodnota, locale)}
            <X className="w-3 h-3" />
          </button>
        ))}

        {pocetAktivnych > 0 && (
          <button
            type="button"
            onClick={() => setAktivneFiltre(PRAZDNE_FILTRE)}
            className="text-xs text-[var(--sivaSvetlsie)] underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
          >
            {t.filter.vymazatVsetko}
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={otvoritFiltre}
        className="inline-flex items-center gap-2 h-11 px-5 rounded-full border border-[var(--sivaTmava)] text-white text-sm hover:border-neutral-400 transition-colors cursor-pointer shrink-0"
      >
        <SlidersHorizontal className="w-4 h-4" />
        {t.filter.zobrazitFiltre}
        {pocetAktivnych > 0 && (
          <span className="w-5 h-5 rounded-full bg-[var(--biela)] text-[var(--cierna)] text-xs flex items-center justify-center">
            {pocetAktivnych}
          </span>
        )}
      </button>
    </div>

<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6 ">

{filtrovaneProjekty.map((item,i) => (
  <ProjectCardCenter
    key={i}
    project={{
   image: item.Fotka.src,
      title: item.NazovProjektu,
      year: item.Rok,
      tags: item.Typ,
      slug: item.slug?.current ?? String(item.IDENTIFIKATOR),
    }}
  />
))}

    </div>

    {filtrovaneProjekty.length === 0 && (
      <p className="text-[var(--bielasvetla)] text-sm text-center py-16">
        {t.filter.ziadneVysledkyHlavne}
      </p>
    )}

    <AnimatePresence>
      {otvoreny && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={zavriet}
            className="fixed inset-0 bg-black/70 z-40"
          />

          {/* mobil: bottom sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--cierna)] border-t border-[var(--sivaTmava)] rounded-t-[var(--radius)] max-h-[88vh] overflow-y-auto flex flex-col md:hidden"
          >
            <PanelObsah
              draftFiltre={draftFiltre}
              prepnutFilter={prepnutFilter}
              resetovatFiltre={resetovatFiltre}
              potvrditFiltre={potvrditFiltre}
              zavriet={zavriet}
              nahladProjekty={nahladProjekty}
              skupiny={SKUPINY}
              t={t}
              locale={locale}
              rozbaleneSkupiny={rozbaleneSkupiny}
              prepnutSkupinu={prepnutSkupinu}
            />
          </motion.div>

          {/* desktop: bočný panel na celú výšku */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[640px] bg-[var(--cierna)] border-l border-[var(--sivaTmava)] overflow-y-auto hidden md:flex md:flex-col"
          >
            <PanelObsah
              draftFiltre={draftFiltre}
              prepnutFilter={prepnutFilter}
              resetovatFiltre={resetovatFiltre}
              potvrditFiltre={potvrditFiltre}
              zavriet={zavriet}
              nahladProjekty={nahladProjekty}
              skupiny={SKUPINY}
              t={t}
              locale={locale}
              rozbaleneSkupiny={rozbaleneSkupiny}
              prepnutSkupinu={prepnutSkupinu}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>

  </div>
}

type PanelProps = {
  draftFiltre: FiltreStav;
  prepnutFilter: (skupina: keyof FiltreStav, hodnota: string) => void;
  resetovatFiltre: () => void;
  potvrditFiltre: () => void;
  zavriet: () => void;
  nahladProjekty: Projekt[];
  skupiny: { kluc: keyof FiltreStav; nazov: string; moznosti: readonly string[] }[];
  t: UiSlovnik;
  locale: import("@/lib/i18n/locales").Locale;
  rozbaleneSkupiny: Record<string, boolean>;
  prepnutSkupinu: (kluc: string) => void;
};

function PanelObsah({
  draftFiltre,
  prepnutFilter,
  resetovatFiltre,
  potvrditFiltre,
  zavriet,
  nahladProjekty,
  skupiny,
  t,
  locale,
  rozbaleneSkupiny,
  prepnutSkupinu,
}: PanelProps) {
  const nahladPocet = nahladProjekty.length;

  const slovoProjekt =
    nahladPocet === 1 ? t.filter.projekt : nahladPocet >= 2 && nahladPocet <= 4 ? t.filter.projekty : t.filter.projektov;

  return (
    <>
      <div className="flex items-center justify-between p-5 md:p-6 border-b border-[var(--sivaTmava)] sticky top-0 bg-[var(--cierna)] z-10">
        <div>
          <h3 className="text-white text-lg">{t.filter.filtre}</h3>
          <p className="text-[var(--sivaSvetlsie)] text-xs mt-0.5">
            {t.filter.podnadpis}
          </p>
        </div>
        <button
          type="button"
          onClick={zavriet}
          className="w-9 h-9 rounded-full border border-[var(--sivaTmava)] flex items-center justify-center text-neutral-400 hover:text-white cursor-pointer shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 md:p-6">
        {skupiny.map((skupina) => (
          <SkupinaFiltrov
            key={skupina.kluc}
            nazov={skupina.nazov}
            moznosti={skupina.moznosti}
            vybrane={draftFiltre[skupina.kluc]}
            onKlik={(v) => prepnutFilter(skupina.kluc, v)}
            locale={locale}
            rozbalene={!!rozbaleneSkupiny[skupina.kluc]}
            naPrepnutie={() => prepnutSkupinu(skupina.kluc)}
          />
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-4 px-5 md:px-6 pb-5 md:pb-6">
        <span className="text-[var(--sivaSvetlsie)] text-xs tracking-widest uppercase">
          {t.filter.nahladVysledkov} ({nahladPocet})
        </span>

        {nahladPocet > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {nahladProjekty.slice(0, 9).map((item) => (
              <div
                key={item.IDENTIFIKATOR}
                className="flex flex-col gap-2 rounded-[var(--radiusInsie)] overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] rounded-[var(--radiusInsie)] overflow-hidden bg-white/[0.03]">
                  <Img
                    src={item.Fotka.src}
                    alt={item.Fotka.alt || item.NazovProjektu}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-[var(--bielasvetla)] text-xs truncate">
                  {item.NazovProjektu}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[var(--sivaSvetlsie)] text-sm py-4">
            {t.filter.ziadneVysledky}
          </p>
        )}
      </div>

      <div className="flex gap-3 p-5 md:p-6 border-t border-[var(--sivaTmava)] mt-auto sticky bottom-0 bg-[var(--cierna)]">
        <button
          type="button"
          onClick={resetovatFiltre}
          className="flex-1 h-12 rounded-[var(--radiusInsie)] border border-[var(--sivaTmava)] text-white text-sm cursor-pointer"
        >
          {t.filter.resetovat}
        </button>
        <button
          type="button"
          onClick={potvrditFiltre}
          className="flex-1 h-12 rounded-[var(--radiusInsie)] bg-[var(--biela)] text-[var(--cierna)] text-sm cursor-pointer"
        >
          {t.filter.zobrazit} {nahladPocet} {slovoProjekt}
        </button>
      </div>
    </>
  );
}

type SkupinaProps = {
  nazov: string;
  moznosti: readonly string[];
  vybrane: string[];
  onKlik: (hodnota: string) => void;
  locale: import("@/lib/i18n/locales").Locale;
  rozbalene: boolean;
  naPrepnutie: () => void;
};

function SkupinaFiltrov({
  nazov,
  moznosti,
  vybrane,
  onKlik,
  locale,
  rozbalene,
  naPrepnutie,
}: SkupinaProps) {
  return (
    <div className="flex flex-col gap-3 bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-4">
      <button
        type="button"
        onClick={naPrepnutie}
        aria-expanded={rozbalene}
        className="flex items-center justify-between gap-2 md:pointer-events-none cursor-pointer md:cursor-default"
      >
        <span className="text-[var(--sivaSvetlsie)] text-xs tracking-widest uppercase">
          {nazov}
          {vybrane.length > 0 && (
            <span className="ml-1.5 text-[var(--bielasvetla)] normal-case tracking-normal">
              ({vybrane.length})
            </span>
          )}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--sivaSvetlsie)] transition-transform md:hidden ${
            rozbalene ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`${rozbalene ? "flex" : "hidden"} md:flex flex-wrap gap-2`}>
        {moznosti.map((moznost) => {
          const jeVybrane = vybrane.includes(moznost);
          return (
            <button
              key={moznost}
              type="button"
              onClick={() => onKlik(moznost)}
              className={`text-sm rounded-full px-4 py-2 border transition-colors cursor-pointer ${
                jeVybrane
                  ? "bg-[var(--biela)] text-[var(--cierna)] border-[var(--biela)]"
                  : "border-[var(--sivaTmava)] text-[var(--bielasvetla)] hover:border-neutral-400"
              }`}
            >
              {prelozMoznost(moznost, locale)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
