import type { Statistika, SekciaText, OtazkaItem } from "@/lib/types/content";

// Hlavný nadpis a podnadpis v hero sekcii domovskej stránky.
export const heroText = {
  UvodnyText: "Tvorím priestory, v ktorých sa dobre žije.",
  NizzsieText:
    "Interiér pre mňa nie je len o tom, ako dobre vyzerá. Je o pocite, ktorý vo vás priestor vyvolá, o detailoch a hlavne o tom, aby vám dával zmysel.",
};

// Poznámka: fotky v hero swiperi na pozadí (posunobrazok.tsx) sa preberajú
// priamo zo zoznamu projektov (data/projects.ts) – rovnako to fungovalo
// aj predtým, keď obe miesta čerpali z tej istej Sanity kolekcie "Projekty".

// Štatistiky pod hero textom.
export const statistiky: Statistika[] = [
  { cislo: 300, popis: "Úspešne zrealizovaných projektov na Slovensku a v Česku.", specialnyZnak: "+" },
  { cislo: 21, popis: "Odborníkov z rôznych profesií spojených pod jednou strechou.", specialnyZnak: "+" },
  { cislo: 2018, popis: "Rok, odkedy pomáhame klientom premeniť vízie na realitu." },
  { cislo: 100, popis: "Transparentnosť v komunikácii, rozpočte aj termínoch.", specialnyZnak: "%" },
];

// Nadpis sekcie "Vybrané projekty".
export const projektySekciaText: SekciaText = {
  BtnPocitactext: "Naša práca",
  BtnMobiltext: "Naša práca",
  Hlavnytext: "Vybrané projekty",
  Malytext: "Pozrite si niektoré z našich nedávnych realizácií.",
};

// Nadpis sekcie "Ďalšie projekty" na stránke detailu projektu.
export const dalsieProjektySekciaText: SekciaText = {
  BtnPocitactext: "Ďalšia inšpirácia",
  BtnMobiltext: "Ďalšia inšpirácia",
  Hlavnytext: "Ďalšie projekty",
  Malytext: "Pozrite si aj ostatné naše realizácie.",
};

// Nadpis sekcie "Naše služby".
export const sluzbySekciaText: SekciaText = {
  BtnPocitactext: "Čo ponúkame",
  Hlavnytext: "Naše služby",
  Malytext: "Komplexné služby od návrhu po realizáciu.",
};

// Nadpis sekcie FAQ.
export const faqSekciaText: SekciaText = {
  BtnPocitactext: "Časté otázky",
  Hlavnytext: "Máte otázky? Máme odpovede.",
  Malytext: "Odpovede na najčastejšie otázky ohľadom spolupráce.",
};

// Otázky a odpovede (FAQ).
export const otazky: OtazkaItem[] = [
  {
    otazka: "Ako dlho trvá výstavba rodinného domu na mieru?",
    odpoved:
      "V závislosti od rozsahu projektu obvykle 8 až 14 mesiacov od začiatku výstavby po odovzdanie kľúčov.",
  },
  {
    otazka: "Zabezpečujete aj projektovú dokumentáciu a povolenia?",
    odpoved:
      "Áno, komplexne zastrešíme návrh, projektovú dokumentáciu aj vybavenie potrebných povolení.",
  },
  {
    otazka: "Dá sa katalógový projekt upraviť podľa mojich predstáv?",
    odpoved:
      "Áno, katalógové projekty vieme prispôsobiť dispozícii pozemku aj vašim individuálnym požiadavkám.",
  },
  {
    otazka: "Pôsobíte aj mimo Bratislavy?",
    odpoved:
      "Áno, realizujeme projekty po celom Slovensku aj v Česku.",
  },
];
