import type { Projekt } from "@/lib/types/content";
import {
  TYP_PROJEKTU_MOZNOSTI,
  STAV_PROJEKTU_MOZNOSTI,
  STYL_DIZAJNU_MOZNOSTI,
  TYP_VYUZITIA_MOZNOSTI,
} from "@/lib/types/content";

/**
 * ZOZNAM PROJEKTOV
 * -----------------
 * Toto je jediné miesto, kde sa spravujú realizované projekty zobrazené
 * na webe (domovská stránka, /projekty aj detail projektu).
 *
 * Ako pridať nový projekt:
 * 1. Nahraj fotky do priečinka `public/images/` (napr. projekt-6.jpg,
 *    projekt-6-2.jpg, projekt-6-3.jpg, ...).
 * 2. Skopíruj jednu z položiek nižšie a uprav hodnoty.
 * 3. `slug.current` musí byť unikátny a URL-friendly (bez diakritiky/medzier)
 *    – používa sa v adrese /detail/<slug>.
 *
 * Fotky v `Galeria` sa zobrazujú na stránke detailu projektu (prvá fotka je
 * veľká, ostatné v mriežke pod ňou). Odporúčame aspoň 5 – 7 fotiek na
 * projekt, aby galéria pôsobila plnohodnotne.
 *
 * FILTER na stránke /projekty:
 * Polia `TypProjektu`, `StavProjektu`, `StylDizajnu` a `TypVyuzitia` sa
 * používajú vo filtri na /projekty. Hodnoty vyber vždy len z povolených
 * možností nižšie (inak ich filter nebude vedieť priradiť):
 *
 * - TypProjektu (môže byť viac naraz):  "Komerčný" | "Interiér" | "Exteriér"
 * - StavProjektu (jedna hodnota):        "Dokončené" | "Koncept / Dizajn" | "3D vizualizácia"
 * - StylDizajnu (môže byť viac naraz):   "Minimalistický" | "Moderný" | "Rustikálny" | "Luxusný"
 * - TypVyuzitia (môže byť viac naraz):   "Kuchyňa" | "Obývačka" | "Spálňa" | "Komerčný priestor"
 *
 * (presný zoznam možností je aj v lib/types/content.ts – TYP_PROJEKTU_MOZNOSTI,
 * STAV_PROJEKTU_MOZNOSTI, STYL_DIZAJNU_MOZNOSTI, TYP_VYUZITIA_MOZNOSTI)
 *
 * `CoZahruje` je voliteľný zoznam bodov, ktorý sa na detaile projektu
 * zobrazí ako zaškrtávací zoznam "Čo projekt zahŕňal".
 *
 * Poznámka: `InterierInfo` (úžitková plocha, počet izieb, rok realizácie) je
 * pri týchto 5 projektoch zámerne vynechané – tieto konkrétne čísla nemáme
 * k dispozícii, takže radšej nezobrazujeme nič, než vymyslené hodnoty. Ak ich
 * budeš mať, doplň pole `InterierInfo` podľa vzoru v komentári nižšie.
 */

export const projekty: Projekt[] = [
  {
    _id: "projekt-altura-casa",
    IDENTIFIKATOR: 1,
    slug: { current: "altura-casa" },
    NazovProjektu: "Altura Casa",
    NadpisUvod: "Altura Casa",
    PopisKratkyUvod:
      "Moderný bytový interiér v teplých zemitých tónoch s výraznými dizajnovými doplnkami.",
    PopsiDlhy:
      "Obývací priestor postavený na kombinácii tehlového obkladu, terazzovej podlahy a nízkeho modulárneho sedačkového setu v teplých zemitých odtieňoch. Dizajnové doplnky a umelecké kúsky dotvárajú útulnú, no výrazne štýlovú atmosféru.",
    Popis:
      "Moderný bytový interiér v teplých zemitých tónoch s výraznými dizajnovými doplnkami.",
    Rok: 2025,
    Typ: "Interiér",
    TypProjektu: [TYP_PROJEKTU_MOZNOSTI[1]], // Interiér
    StavProjektu: STAV_PROJEKTU_MOZNOSTI[0], // Dokončené
    StylDizajnu: [STYL_DIZAJNU_MOZNOSTI[1], STYL_DIZAJNU_MOZNOSTI[3]], // Moderný, Luxusný
    TypVyuzitia: [TYP_VYUZITIA_MOZNOSTI[1]], // Obývačka
    Fotka: { src: "/images/altura-casa-1.jpg", alt: "Altura Casa" },
    Galeria: Array.from({ length: 12 }, (_, i) => ({
      src: `/images/altura-casa-${i + 1}.jpg`,
      alt: `Altura Casa – interiér ${i + 1}`,
    })),
    CoZahruje: [
      "Koncept a priestorové riešenie interiéru",
      "Výber materiálov, farieb a nábytku",
      "3D vizualizácie interiéru",
      "Kompletná realizácia na kľúč",
    ],
  },
  {
    _id: "projekt-heartz",
    IDENTIFIKATOR: 2,
    slug: { current: "heartz" },
    NazovProjektu: "Heartz",
    NadpisUvod: "Heartz",
    PopisKratkyUvod:
      "Luxusný bytový interiér s tmavou, sofistikovanou atmosférou a prírodnými materiálmi.",
    PopsiDlhy:
      "Interiér stavia na kombinácii tmavého dreva, mramoru a bronzových detailov. Voľne stojaca vaňa a kamenné umývadlo dotvárajú kúpeľňu do podoby súkromného wellness kúta, v súlade s celkovým luxusným, no útulným výrazom bytu.",
    Popis:
      "Luxusný bytový interiér s tmavou, sofistikovanou atmosférou a prírodnými materiálmi.",
    Rok: 2025,
    Typ: "Interiér",
    TypProjektu: [TYP_PROJEKTU_MOZNOSTI[1]], // Interiér
    StavProjektu: STAV_PROJEKTU_MOZNOSTI[0], // Dokončené
    StylDizajnu: [STYL_DIZAJNU_MOZNOSTI[3]], // Luxusný
    TypVyuzitia: [TYP_VYUZITIA_MOZNOSTI[1]], // Obývačka
    Fotka: { src: "/images/heartz-1.jpg", alt: "Heartz" },
    Galeria: Array.from({ length: 11 }, (_, i) => ({
      src: `/images/heartz-${i + 1}.jpg`,
      alt: `Heartz – interiér ${i + 1}`,
    })),
    CoZahruje: [
      "Koncept a priestorové riešenie interiéru",
      "Výber materiálov, farieb a nábytku",
      "3D vizualizácie interiéru",
      "Kompletná realizácia na kľúč",
    ],
  },
  {
    _id: "projekt-intermezzo",
    IDENTIFIKATOR: 3,
    slug: { current: "intermezzo" },
    NazovProjektu: "Intermezzo",
    NadpisUvod: "Intermezzo",
    PopisKratkyUvod: "Minimalistický penthouse interiér s prírodným drevom a jemnou hrou svetla.",
    PopsiDlhy:
      "Interiér spája teplé drevené obklady, zrkadlové plochy a jemne zaoblené tvary nábytku do pokojného, minimalistického celku s dôrazom na svetlo a materiál.",
    Popis: "Minimalistický penthouse interiér s prírodným drevom a jemnou hrou svetla.",
    Rok: 2025,
    Typ: "Interiér",
    TypProjektu: [TYP_PROJEKTU_MOZNOSTI[1]], // Interiér
    StavProjektu: STAV_PROJEKTU_MOZNOSTI[0], // Dokončené
    StylDizajnu: [STYL_DIZAJNU_MOZNOSTI[0], STYL_DIZAJNU_MOZNOSTI[1]], // Minimalistický, Moderný
    TypVyuzitia: [TYP_VYUZITIA_MOZNOSTI[1], TYP_VYUZITIA_MOZNOSTI[2]], // Obývačka, Spálňa
    Fotka: { src: "/images/intermezzo-1.jpg", alt: "Intermezzo" },
    Galeria: Array.from({ length: 12 }, (_, i) => ({
      src: `/images/intermezzo-${i + 1}.jpg`,
      alt: `Intermezzo – interiér ${i + 1}`,
    })),
    CoZahruje: [
      "Koncept a priestorové riešenie interiéru",
      "Výber materiálov, farieb a nábytku",
      "3D vizualizácie interiéru",
      "Kompletná realizácia na kľúč",
    ],
  },
  {
    _id: "projekt-skypark-koncept",
    IDENTIFIKATOR: 4,
    slug: { current: "skypark-koncept" },
    NazovProjektu: "SkyPark Koncept",
    NadpisUvod: "SkyPark Koncept",
    PopisKratkyUvod: "Koncept bytového interiéru s tmavou, hotelovou atmosférou.",
    PopsiDlhy:
      "Návrh interiéru pracuje s tmavými omietkami, plyšovými sedačkami a spálňou v teplých tónoch – výsledkom je útulná, no luxusná hotelová atmosféra.",
    Popis: "Koncept bytového interiéru s tmavou, hotelovou atmosférou.",
    Rok: 2025,
    Typ: "Interiér",
    TypProjektu: [TYP_PROJEKTU_MOZNOSTI[1]], // Interiér
    StavProjektu: STAV_PROJEKTU_MOZNOSTI[1], // Koncept / Dizajn
    StylDizajnu: [STYL_DIZAJNU_MOZNOSTI[3], STYL_DIZAJNU_MOZNOSTI[1]], // Luxusný, Moderný
    TypVyuzitia: [TYP_VYUZITIA_MOZNOSTI[2], TYP_VYUZITIA_MOZNOSTI[1]], // Spálňa, Obývačka
    Fotka: { src: "/images/skypark-koncept-1.jpg", alt: "SkyPark Koncept" },
    Galeria: Array.from({ length: 14 }, (_, i) => ({
      src: `/images/skypark-koncept-${i + 1}.jpg`,
      alt: `SkyPark Koncept – interiér ${i + 1}`,
    })),
    CoZahruje: [
      "Koncept a priestorové riešenie interiéru",
      "Výber materiálov, farieb a nábytku",
      "3D vizualizácie interiéru",
    ],
  },
  {
    _id: "projekt-vydrica-koncept",
    IDENTIFIKATOR: 5,
    slug: { current: "vydrica-koncept" },
    NazovProjektu: "Vydrica Koncept",
    NadpisUvod: "Vydrica Koncept",
    PopisKratkyUvod: "Koncept interiéru s luxusnými materiálmi – mramorom, mosadzou a kožou.",
    PopsiDlhy:
      "Návrh stavia na kontraste tmavého dreva a svetlého žilkovaného mramoru, doplnenom mosadznými a koženými detailmi pre nadčasový, luxusný výraz.",
    Popis: "Koncept interiéru s luxusnými materiálmi – mramorom, mosadzou a kožou.",
    Rok: 2025,
    Typ: "Interiér",
    TypProjektu: [TYP_PROJEKTU_MOZNOSTI[1]], // Interiér
    StavProjektu: STAV_PROJEKTU_MOZNOSTI[1], // Koncept / Dizajn
    StylDizajnu: [STYL_DIZAJNU_MOZNOSTI[3]], // Luxusný
    TypVyuzitia: [TYP_VYUZITIA_MOZNOSTI[1]], // Obývačka
    Fotka: { src: "/images/vydrica-koncept-1.jpg", alt: "Vydrica Koncept" },
    Galeria: Array.from({ length: 17 }, (_, i) => ({
      src: `/images/vydrica-koncept-${i + 1}.jpg`,
      alt: `Vydrica Koncept – interiér ${i + 1}`,
    })),
    CoZahruje: [
      "Koncept a priestorové riešenie interiéru",
      "Výber materiálov, farieb a nábytku",
      "3D vizualizácie interiéru",
    ],
  },
];

export function najdiProjektPodlaSlugu(slug: string): Projekt | undefined {
  return projekty.find((p) => p.slug.current === slug);
}
