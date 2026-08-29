import type { HeaderItem } from "@/lib/types/content";
import { sluzby } from "./sluzby";

// Položky hlavného menu. isActive: true = položka po najazdení zobrazí
// rozbaľovací zoznam služieb (Referecnie) namiesto priameho odkazu.

export const headerNav: HeaderItem[] = [
  {
    _id: "nav-sluzby",
    Nazov: "Služby",
    link: "",
    isActive: true,
    Referecnie: sluzby,
  },
  {
    _id: "nav-projekty",
    Nazov: "Projekty",
    link: "/projekty",
    isActive: false,
  },
];

// Poznámka: samostatná položka "Kontakt" v navigácii bola odstránená, keďže
// hlavička už má jedno funkčné tlačidlo "Kontaktovať" (vedie na /kontakt) –
// dve odkazy na to isté miesto boli zbytočná duplicita.
