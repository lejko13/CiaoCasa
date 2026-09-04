import type { SluzbaItem } from "@/lib/types/content";

// Zoznam služieb – zobrazuje sa v dropdown menu v hlavičke, na domovskej
// stránke (sekcia "Naše služby") a každá má aj vlastnú stránku na
// /sluzby/<slug> (pozri app/sluzby/[slug]/page.tsx). Uprav podľa reálnej
// ponuky. `slug` musí byť unikátny a bez diakritiky/medzier.
//
// CoJeZahrnute – zoznam bodov zobrazený ako zaškrtávací zoznam na stránke
// služby ("Čo je zahrnuté").
// Proces – kroky spolupráce zobrazené ako "01 / 02 / 03 / 04" kartičky
// (Nazov + Trvanie + Popis pre každý krok).

export const sluzby: SluzbaItem[] = [
  {
    _id: "sluzba-1",
    Nazov: "Rodinný dom na mieru",
    slug: "rodinny-dom-na-mieru",
    Popis:
      "Navrhneme a postavíme rodinný dom presne podľa vašich predstáv, od prvého náčrtu až po odovzdanie kľúčov.",
    PopisDlhy:
      "Rodinný dom na mieru znamená, že celý proces – od úvodnej konzultácie, cez architektonický návrh a projektovú dokumentáciu, až po samotnú výstavbu – prispôsobíme presne vašim potrebám, pozemku a rozpočtu. Sprevádzame vás každým krokom a komunikujeme transparentne, aby ste mali o priebehu prehľad od prvého dňa až po odovzdanie kľúčov.",
    CoJeZahrnute: [
      "Úvodná konzultácia a analýza pozemku",
      "Architektonická štúdia na mieru",
      "Kompletná projektová dokumentácia",
      "Vybavenie stavebného povolenia",
      "Výber materiálov a technológií",
      "Koordinácia a dohľad počas výstavby",
    ],
    Proces: [
      {
        Nazov: "Úvodná konzultácia",
        Trvanie: "1 týždeň",
        Popis: "Zoznámime sa, preberieme vaše predstavy a analyzujeme pozemok.",
      },
      {
        Nazov: "Návrh a vizualizácie",
        Trvanie: "3 – 5 týždňov",
        Popis: "Pripravíme architektonickú štúdiu a 3D vizualizácie domu.",
      },
      {
        Nazov: "Projektová dokumentácia",
        Trvanie: "4 – 8 týždňov",
        Popis: "Spracujeme dokumentáciu pre stavebné povolenie a realizáciu.",
      },
      {
        Nazov: "Výstavba",
        Trvanie: "8 – 14 mesiacov",
        Popis: "Koordinujeme remeselníkov a dohliadame na priebeh výstavby.",
      },
    ],
    Obrazok: { src: "/images/sluzba-1.jpg", alt: "Rodinný dom na mieru" },
  },
  {
    _id: "sluzba-2",
    Nazov: "Interiérový dizajn",
    slug: "interierovy-dizajn",
    Popis:
      "Vytvoríme interiér, ktorý spája funkčnosť, estetiku a váš osobný štýl.",
    PopisDlhy:
      "Pri návrhu interiéru sa zameriavame na to, aby priestor pôsobil harmonicky a zároveň fungoval presne tak, ako ho každý deň potrebujete. Pripravíme koncept, výber materiálov, farieb a nábytku, 3D vizualizácie aj sprievod realizáciou – od bytov, cez rodinné domy, až po komerčné priestory.",
    CoJeZahrnute: [
      "Úvodná konzultácia a analýza priestoru",
      "Dispozičné a funkčné riešenie",
      "Výber materiálov, farieb a povrchov",
      "3D vizualizácie a renderingy",
      "Návrh osvetlenia a elektroinštalácie",
      "Koordinácia a dohľad pri realizácii",
    ],
    Proces: [
      {
        Nazov: "Úvodná konzultácia",
        Trvanie: "1 týždeň",
        Popis: "Zoznámime sa, preberieme vaše predstavy a analyzujeme priestor.",
      },
      {
        Nazov: "Koncept a vizualizácie",
        Trvanie: "3 – 4 týždne",
        Popis: "Vytvoríme dispozičný návrh a 3D vizualizácie vrátane výberu materiálov.",
      },
      {
        Nazov: "Realizačná dokumentácia",
        Trvanie: "2 – 3 týždne",
        Popis: "Pripravíme detailné výkresy a technickú dokumentáciu pre realizáciu.",
      },
      {
        Nazov: "Realizácia",
        Trvanie: "4 – 12 týždňov",
        Popis: "Koordinujeme remeselníkov a dohliadame na priebeh prác.",
      },
    ],
    Obrazok: { src: "/images/sluzba-2.jpg", alt: "Interiérový dizajn" },
  },
  {
    _id: "sluzba-3",
    Nazov: "Výstavba",
    slug: "vystavba",
    comingSoon: true,
    Popis:
      "Kompletnú realizáciu stavby zastrešíme od základov až po strechu.",
    PopisDlhy:
      "Kompletnú realizáciu stavby zastrešíme od základov až po strechu vrátane koordinácie remeselníkov, dodávateľov materiálu a priebežnej kontroly kvality. Vďaka jednému kontaktnému bodu počas celej výstavby máte istotu, že projekt postupuje podľa harmonogramu aj rozpočtu.",
    CoJeZahrnute: [
      "Príprava staveniska a zemné práce",
      "Hrubá stavba a strecha",
      "Rozvody vody, elektriny a kúrenia",
      "Kompletné dokončovacie práce",
      "Priebežná kontrola kvality",
      "Odovzdanie stavby na kľúč",
    ],
    Proces: [
      {
        Nazov: "Príprava a zemné práce",
        Trvanie: "2 – 3 týždne",
        Popis: "Pripravíme stavenisko, základy a inžinierske siete.",
      },
      {
        Nazov: "Hrubá stavba",
        Trvanie: "2 – 4 mesiace",
        Popis: "Realizujeme nosné konštrukcie, strop a strechu.",
      },
      {
        Nazov: "Rozvody a inštalácie",
        Trvanie: "1 – 2 mesiace",
        Popis: "Zabezpečíme elektroinštaláciu, vodoinštaláciu a kúrenie.",
      },
      {
        Nazov: "Dokončovacie práce",
        Trvanie: "2 – 3 mesiace",
        Popis: "Omietky, podlahy, obklady a finálne úpravy pred odovzdaním.",
      },
    ],
    Obrazok: { src: "/images/sluzba-3.jpg", alt: "Výstavba" },
  },
  {
    _id: "sluzba-4",
    Nazov: "Katalógové projekty",
    slug: "katalogove-projekty",
    Popis:
      "Overené typové projekty, ktoré vieme prispôsobiť vášmu pozemku a potrebám.",
    PopisDlhy:
      "Katalógové projekty sú overené a odskúšané riešenia, ktoré vám ušetria čas aj náklady na návrh od nuly. Každý typový projekt vieme prispôsobiť konkrétnemu pozemku, orientácii na svetové strany aj vašim individuálnym požiadavkám, takže výsledok pôsobí rovnako osobne ako dom navrhnutý na mieru.",
    CoJeZahrnute: [
      "Výber z overených typových projektov",
      "Prispôsobenie projektu pozemku",
      "Úpravy dispozície podľa požiadaviek",
      "Kompletná projektová dokumentácia",
      "Vybavenie stavebného povolenia",
      "Možnosť nadväzujúcej výstavby",
    ],
    Proces: [
      {
        Nazov: "Výber projektu",
        Trvanie: "1 týždeň",
        Popis: "Spolu vyberieme typový projekt, ktorý najlepšie sedí vašim potrebám.",
      },
      {
        Nazov: "Prispôsobenie",
        Trvanie: "2 – 3 týždne",
        Popis: "Projekt upravíme podľa pozemku a vašich individuálnych požiadaviek.",
      },
      {
        Nazov: "Dokumentácia a povolenia",
        Trvanie: "4 – 6 týždňov",
        Popis: "Pripravíme dokumentáciu a vybavíme potrebné povolenia.",
      },
      {
        Nazov: "Realizácia",
        Trvanie: "podľa dohody",
        Popis: "Na želanie zastrešíme aj samotnú výstavbu domu.",
      },
    ],
    Obrazok: { src: "/images/sluzba-4.jpg", alt: "Katalógové projekty" },
  },
];

export function najdiSluzbuPodlaSlugu(slug: string): SluzbaItem | undefined {
  return sluzby.find((s) => s.slug === slug);
}
