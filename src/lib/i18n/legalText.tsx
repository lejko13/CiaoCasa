import type { ReactNode } from "react";

// Pomocník pre právne stránky (/ochrana-osobnych-udajov, /podmienky):
// nahradí značky {NAZOV}/{ADRESA} obyčajným textom a značku {EMAIL} zmení na
// klikateľný "mailto:" odkaz – aby preklady v data/i18n/legal.ts mohli mať
// e-mail/názov firmy vložený priamo vo vete, vo všetkých 3 jazykoch rovnako.

type Hodnoty = {
  nazov?: string;
  adresa?: string;
  email: string;
};

export function vykresliPravnyText(text: string, hodnoty: Hodnoty): ReactNode {
  const doplneny = text
    .replaceAll("{NAZOV}", hodnoty.nazov ?? "")
    .replaceAll("{ADRESA}", hodnoty.adresa ?? "");

  const casti = doplneny.split("{EMAIL}");

  return casti.map((cast, i) => (
    <span key={i}>
      {cast}
      {i < casti.length - 1 && (
        <a href={`mailto:${hodnoty.email}`} className="underline underline-offset-2">
          {hodnoty.email}
        </a>
      )}
    </span>
  ));
}
