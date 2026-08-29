import type { Locale } from "./locales";
import type { SluzbaItem, Projekt } from "@/lib/types/content";
import { SLUZBY_PREKLAD } from "@/data/i18n/sluzby";
import { PROJEKTY_PREKLAD } from "@/data/i18n/projects";
import { prelozMoznost } from "./moznosti";

// Zloží preloženú verziu položky (služba/projekt) z pôvodných slovenských
// dát + prekladovej "nadstavby" pre daný jazyk. Čokoľvek v nadstavbe chýba
// (napr. novú položku ešte nestihol nikto preložiť), ostáva v pôvodnej
// slovenčine – nič sa nikdy nezobrazí prázdne.

export function resolveSluzba(item: SluzbaItem, locale: Locale): SluzbaItem {
  if (locale === "sk") return item;

  const preklad = SLUZBY_PREKLAD[item._id]?.[locale];
  if (!preklad) return item;

  return {
    ...item,
    Nazov: preklad.Nazov ?? item.Nazov,
    Popis: preklad.Popis ?? item.Popis,
    PopisDlhy: preklad.PopisDlhy ?? item.PopisDlhy,
    CoJeZahrnute: preklad.CoJeZahrnute ?? item.CoJeZahrnute,
    Proces: item.Proces?.map((krok, i) => ({
      Nazov: preklad.Proces?.[i]?.Nazov ?? krok.Nazov,
      Trvanie: preklad.Proces?.[i]?.Trvanie ?? krok.Trvanie,
      Popis: preklad.Proces?.[i]?.Popis ?? krok.Popis,
    })),
  };
}

export function resolveSluzby(polozky: SluzbaItem[], locale: Locale): SluzbaItem[] {
  return polozky.map((p) => resolveSluzba(p, locale));
}

export function resolveProjekt(item: Projekt, locale: Locale): Projekt {
  // InterierInfo popisky ("Úžitková plocha", "Počet izieb"...) sú z pevnej
  // sady opakujúcich sa labelov, prekladajú sa cez moznosti.ts – nezávisí to
  // od toho, či je projekt inak preložený v data/i18n/projects.ts.
  const sPrelozenymiLabelmi: Projekt = {
    ...item,
    InterierInfo: item.InterierInfo?.map((polozka) => ({
      ...polozka,
      Nazov: prelozMoznost(polozka.Nazov, locale),
    })),
  };

  if (locale === "sk") return sPrelozenymiLabelmi;

  const preklad = PROJEKTY_PREKLAD[item._id]?.[locale];
  if (!preklad) return sPrelozenymiLabelmi;

  return {
    ...sPrelozenymiLabelmi,
    NazovProjektu: preklad.NazovProjektu ?? item.NazovProjektu,
    PopisKratkyUvod: preklad.PopisKratkyUvod ?? item.PopisKratkyUvod,
    PopsiDlhy: preklad.PopsiDlhy ?? item.PopsiDlhy,
    Popis: preklad.PopisKratkyUvod ?? item.Popis,
    CoZahruje: preklad.CoZahruje ?? item.CoZahruje,
    Typ: preklad.Typ ?? item.Typ,
  };
}

export function resolveProjekty(polozky: Projekt[], locale: Locale): Projekt[] {
  return polozky.map((p) => resolveProjekt(p, locale));
}
