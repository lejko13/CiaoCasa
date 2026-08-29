// Lokálne typy pre statický obsah webu (predtým generované zo Sanity schémy).
// Fotka/Obrazok teraz nie je referencia na Sanity asset, ale priama cesta
// k lokálnemu obrázku v /public (napr. "/images/projekt-1.jpg").

export type Obrazok = {
  src: string;
  alt: string;
};

export type Statistika = {
  cislo: number;
  popis: string;
  specialnyZnak?: string | null;
};

// Jeden krok v sekcii "Ako prebieha spolupráca" na stránke služby.
export type ProcesKrok = {
  Nazov: string;
  Trvanie: string;
  Popis: string;
};

export type SluzbaItem = {
  _id: string;
  Nazov: string;
  Popis: string;
  // Dlhší text zobrazený na samostatnej stránke služby (/sluzby/<slug>).
  PopisDlhy?: string;
  // Zoznam "Čo je zahrnuté" – zobrazí sa ako zaškrtávací zoznam na stránke služby.
  CoJeZahrnute?: string[];
  // Kroky spolupráce (zobrazené ako "01 / 02 / 03 / 04" karty).
  Proces?: ProcesKrok[];
  Obrazok: Obrazok;
  // Používa sa v adrese /sluzby/<slug> – musí byť unikátny a bez diakritiky/medzier.
  slug?: string;
  link?: string;
};

export type HeaderItem = {
  _id: string;
  Nazov: string;
  link: string;
  isActive: boolean;
  Referecnie?: SluzbaItem[];
};

export type InterierInfoPolozka = {
  Nazov: string;
  Hodnota: string;
  Ikona?: string;
};

// Možnosti pre filter na stránke /projekty. Hodnoty v data/projects.ts musia
// byť z tohto zoznamu, aby ich filter vedel správne priradiť. Pri pridávaní
// novej možnosti stačí doplniť reťazec sem aj do filtra sa automaticky prejaví.

export const TYP_PROJEKTU_MOZNOSTI = ["Komerčný", "Interiér", "Exteriér"] as const;

export const STAV_PROJEKTU_MOZNOSTI = [
  "Dokončené",
  "Koncept / Dizajn",
  "3D vizualizácia",
] as const;

export const STYL_DIZAJNU_MOZNOSTI = [
  "Minimalistický",
  "Moderný",
  "Rustikálny",
  "Luxusný",
] as const;

export const TYP_VYUZITIA_MOZNOSTI = [
  "Kuchyňa",
  "Obývačka",
  "Spálňa",
  "Komerčný priestor",
] as const;

export type Projekt = {
  _id: string;
  IDENTIFIKATOR: number;
  slug: { current: string };
  NazovProjektu: string;
  NadpisUvod: string;
  PopisKratkyUvod: string;
  PopsiDlhy: string;
  Popis: string;
  Rok: number;
  // Voľný text zobrazený ako "štítok" na karte projektu (napr. "Rodinný dom").
  Typ: string;
  // Nižšie sú polia pre filter na stránke /projekty (pozri *_MOZNOSTI vyššie).
  // Typ projektu – dá sa vybrať viac možností naraz.
  TypProjektu: string[];
  // Stav projektu – jedna aktuálna hodnota.
  StavProjektu: string;
  // Štýl dizajnu – dá sa vybrať viac možností naraz.
  StylDizajnu: string[];
  // Typ využitia priestoru – dá sa vybrať viac možností naraz.
  TypVyuzitia: string[];
  Fotka: Obrazok;
  Galeria?: Obrazok[];
  InterierInfo?: InterierInfoPolozka[];
  // Zoznam "Čo projekt zahŕňal" – zobrazí sa ako zaškrtávací zoznam na detaile projektu.
  CoZahruje?: string[];
};

export type OtazkaItem = {
  otazka: string;
  odpoved: string;
};

export type SekciaText = {
  BtnPocitactext: string;
  BtnMobiltext?: string;
  Hlavnytext: string;
  Malytext: string;
};

export type FooterObsah = {
  fotka: Obrazok;
  BtnPocitactext: string;
  Hlavnytext: string;
  Malytext: string;
};
