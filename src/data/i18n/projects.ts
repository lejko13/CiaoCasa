import type { Locale } from "@/lib/i18n/locales";

// Preklady obsahu projektov (data/projects.ts zostáva slovenský zdroj
// pravdy). Kľúč najvyššej úrovne = _id projektu z data/projects.ts. Stačí
// doplniť polia, ktoré chceš preložiť – čokoľvek chýba, zobrazí sa v
// pôvodnej slovenčine (viď lib/i18n/resolveContent.ts).
//
// Pridáš nový projekt do data/projects.ts? Skopíruj sem blok pre jeho _id a
// prelož NazovProjektu/PopisKratkyUvod/PopsiDlhy/CoZahruje/Typ – dovtedy sa
// jednoducho zobrazí po slovensky aj v EN/IT verzii webu (nič sa nezlomí).

export type ProjektPreklad = {
  NazovProjektu?: string;
  PopisKratkyUvod?: string;
  PopsiDlhy?: string;
  CoZahruje?: string[];
  Typ?: string;
};

export const PROJEKTY_PREKLAD: Record<string, Partial<Record<Locale, ProjektPreklad>>> = {
  "projekt-altura-casa": {
    en: {
      NazovProjektu: "Altura Casa",
      PopisKratkyUvod:
        "A modern apartment interior in warm earthy tones with striking design accents.",
      PopsiDlhy:
        "A living space built on a combination of brick cladding, terrazzo flooring and a low modular sofa set in warm earthy shades. Design accents and art pieces complete a cosy yet distinctly stylish atmosphere.",
      Typ: "Interior",
      CoZahruje: [
        "Interior concept and spatial design",
        "Selection of materials, colours and furniture",
        "3D interior visualizations",
        "Complete turnkey realization",
      ],
    },
    it: {
      NazovProjektu: "Altura Casa",
      PopisKratkyUvod:
        "Un interno di appartamento moderno in tonalità calde e terrose con accenti di design decisi.",
      PopsiDlhy:
        "Uno spazio abitativo costruito sulla combinazione di rivestimento in mattoni, pavimento in terrazzo e un divano modulare basso in tonalità calde e terrose. Accenti di design e opere d'arte completano un'atmosfera accogliente ma decisamente stilosa.",
      Typ: "Interni",
      CoZahruje: [
        "Concept e soluzione spaziale dell'interno",
        "Scelta di materiali, colori e arredi",
        "Visualizzazioni 3D dell'interno",
        "Realizzazione completa chiavi in mano",
      ],
    },
  },

  "projekt-heartz": {
    en: {
      NazovProjektu: "Heartz",
      PopisKratkyUvod:
        "A luxury apartment interior with a dark, sophisticated atmosphere and natural materials.",
      PopsiDlhy:
        "The interior is built on a combination of dark wood, marble and bronze details. A freestanding tub and stone basin turn the bathroom into a private wellness corner, in keeping with the apartment's overall luxurious yet cosy expression.",
      Typ: "Interior",
      CoZahruje: [
        "Interior concept and spatial design",
        "Selection of materials, colours and furniture",
        "3D interior visualizations",
        "Complete turnkey realization",
      ],
    },
    it: {
      NazovProjektu: "Heartz",
      PopisKratkyUvod:
        "Un interno di appartamento di lusso con un'atmosfera scura e sofisticata e materiali naturali.",
      PopsiDlhy:
        "L'interno si basa sulla combinazione di legno scuro, marmo e dettagli in bronzo. Una vasca freestanding e un lavabo in pietra trasformano il bagno in un angolo wellness privato, in linea con l'espressione complessiva lussuosa ma accogliente dell'appartamento.",
      Typ: "Interni",
      CoZahruje: [
        "Concept e soluzione spaziale dell'interno",
        "Scelta di materiali, colori e arredi",
        "Visualizzazioni 3D dell'interno",
        "Realizzazione completa chiavi in mano",
      ],
    },
  },

  "projekt-intermezzo": {
    en: {
      NazovProjektu: "Intermezzo",
      PopisKratkyUvod:
        "A minimalist penthouse interior with natural wood and a subtle play of light.",
      PopsiDlhy:
        "The interior combines warm wood cladding, mirrored surfaces and gently rounded furniture shapes into a calm, minimalist whole with an emphasis on light and material.",
      Typ: "Interior",
      CoZahruje: [
        "Interior concept and spatial design",
        "Selection of materials, colours and furniture",
        "3D interior visualizations",
        "Complete turnkey realization",
      ],
    },
    it: {
      NazovProjektu: "Intermezzo",
      PopisKratkyUvod:
        "Un interno di attico minimalista con legno naturale e un delicato gioco di luce.",
      PopsiDlhy:
        "L'interno unisce rivestimenti in legno caldo, superfici a specchio e forme d'arredo dolcemente arrotondate in un insieme minimalista e sereno, con particolare attenzione alla luce e al materiale.",
      Typ: "Interni",
      CoZahruje: [
        "Concept e soluzione spaziale dell'interno",
        "Scelta di materiali, colori e arredi",
        "Visualizzazioni 3D dell'interno",
        "Realizzazione completa chiavi in mano",
      ],
    },
  },

  "projekt-skypark-koncept": {
    en: {
      NazovProjektu: "SkyPark Koncept",
      PopisKratkyUvod: "An apartment interior concept with a dark, hotel-like atmosphere.",
      PopsiDlhy:
        "The interior design works with dark plaster, plush sofas and a bedroom in warm tones – the result is a cosy yet luxurious, hotel-like atmosphere.",
      Typ: "Interior",
      CoZahruje: [
        "Interior concept and spatial design",
        "Selection of materials, colours and furniture",
        "3D interior visualizations",
      ],
    },
    it: {
      NazovProjektu: "SkyPark Koncept",
      PopisKratkyUvod: "Un concept di interno d'appartamento con un'atmosfera scura, da hotel.",
      PopsiDlhy:
        "Il progetto d'interni lavora con intonaci scuri, divani in tessuto morbido e una camera da letto in tonalità calde: il risultato è un'atmosfera accogliente ma lussuosa, da hotel.",
      Typ: "Interni",
      CoZahruje: [
        "Concept e soluzione spaziale dell'interno",
        "Scelta di materiali, colori e arredi",
        "Visualizzazioni 3D dell'interno",
      ],
    },
  },

  "projekt-vydrica-koncept": {
    en: {
      NazovProjektu: "Vydrica Koncept",
      PopisKratkyUvod: "An interior concept with luxurious materials – marble, brass and leather.",
      PopsiDlhy:
        "The design builds on the contrast between dark wood and light veined marble, complemented with brass and leather details for a timeless, luxurious expression.",
      Typ: "Interior",
      CoZahruje: [
        "Interior concept and spatial design",
        "Selection of materials, colours and furniture",
        "3D interior visualizations",
      ],
    },
    it: {
      NazovProjektu: "Vydrica Koncept",
      PopisKratkyUvod: "Un concept d'interni con materiali di lusso – marmo, ottone e pelle.",
      PopsiDlhy:
        "Il progetto si basa sul contrasto tra legno scuro e marmo venato chiaro, arricchito da dettagli in ottone e pelle per un'espressione lussuosa e senza tempo.",
      Typ: "Interni",
      CoZahruje: [
        "Concept e soluzione spaziale dell'interno",
        "Scelta di materiali, colori e arredi",
        "Visualizzazioni 3D dell'interno",
      ],
    },
  },
};
