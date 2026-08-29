import type { Locale } from "./locales";

// Preklady popiskov pre filtrovacie možnosti (TYP_PROJEKTU_MOZNOSTI,
// STAV_PROJEKTU_MOZNOSTI, STYL_DIZAJNU_MOZNOSTI, TYP_VYUZITIA_MOZNOSTI
// v lib/types/content.ts). Kľúčom je vždy pôvodná slovenská hodnota – tá
// istá hodnota sa aj naďalej ukladá/porovnáva v dátach a vo filtri, mení sa
// len to, čo sa zobrazí návštevníkovi.
//
// Pridáš novú možnosť do *_MOZNOSTI? Doplň sem aj jej preklad, inak sa
// zobrazí len pôvodný slovenský text (bezpečný fallback, nič sa nezlomí).

export const MOZNOST_PREKLAD: Record<string, Record<Locale, string>> = {
  // TYP_PROJEKTU_MOZNOSTI
  "Komerčný": { sk: "Komerčný", en: "Commercial", it: "Commerciale" },
  "Interiér": { sk: "Interiér", en: "Interior", it: "Interni" },
  "Exteriér": { sk: "Exteriér", en: "Exterior", it: "Esterni" },

  // STAV_PROJEKTU_MOZNOSTI
  "Dokončené": { sk: "Dokončené", en: "Completed", it: "Completato" },
  "Koncept / Dizajn": {
    sk: "Koncept / Dizajn",
    en: "Concept / Design",
    it: "Concept / Design",
  },
  "3D vizualizácia": {
    sk: "3D vizualizácia",
    en: "3D visualization",
    it: "Visualizzazione 3D",
  },

  // STYL_DIZAJNU_MOZNOSTI
  "Minimalistický": { sk: "Minimalistický", en: "Minimalist", it: "Minimalista" },
  "Moderný": { sk: "Moderný", en: "Modern", it: "Moderno" },
  "Rustikálny": { sk: "Rustikálny", en: "Rustic", it: "Rustico" },
  "Luxusný": { sk: "Luxusný", en: "Luxury", it: "Lusso" },

  // TYP_VYUZITIA_MOZNOSTI
  "Kuchyňa": { sk: "Kuchyňa", en: "Kitchen", it: "Cucina" },
  "Obývačka": { sk: "Obývačka", en: "Living room", it: "Soggiorno" },
  "Spálňa": { sk: "Spálňa", en: "Bedroom", it: "Camera da letto" },
  "Komerčný priestor": {
    sk: "Komerčný priestor",
    en: "Commercial space",
    it: "Spazio commerciale",
  },

  // Popisky v InterierInfo na detaile projektu (data/projects.ts, pole
  // InterierInfo[].Nazov) – hodnoty (napr. "185 m²") sa neprekladajú.
  "Úžitková plocha": { sk: "Úžitková plocha", en: "Floor area", it: "Superficie utile" },
  "Počet izieb": { sk: "Počet izieb", en: "Number of rooms", it: "Numero di stanze" },
  "Počet bytov": { sk: "Počet bytov", en: "Number of units", it: "Numero di unità" },
  "Rok realizácie": { sk: "Rok realizácie", en: "Year completed", it: "Anno di realizzazione" },
};

export function prelozMoznost(hodnota: string, locale: Locale): string {
  return MOZNOST_PREKLAD[hodnota]?.[locale] ?? hodnota;
}
