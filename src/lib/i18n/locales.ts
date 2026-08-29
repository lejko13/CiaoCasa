// Podporované jazyky webu. Pridanie nového jazyka: doplň kód sem, potom
// doplň chýbajúce preklady v lib/i18n/ui.ts a v data/i18n/*.<kod>.ts
// (stačí skopírovať anglickú verziu a preložiť hodnoty).

export const LOCALES = ["sk", "en", "it"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "sk";

export const LOCALE_LABELS: Record<Locale, string> = {
  sk: "Slovenčina",
  en: "English",
  it: "Italiano",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  sk: "SK",
  en: "EN",
  it: "IT",
};

export function jeLocale(hodnota: string): hodnota is Locale {
  return (LOCALES as readonly string[]).includes(hodnota);
}
