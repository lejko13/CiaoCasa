import type { Statistika, SekciaText, OtazkaItem } from "@/lib/types/content";
import type { Locale } from "@/lib/i18n/locales";
import {
  heroText as heroTextSk,
  statistiky as statistikySk,
  projektySekciaText as projektySekciaTextSk,
  dalsieProjektySekciaText as dalsieProjektySekciaTextSk,
  sluzbySekciaText as sluzbySekciaTextSk,
  faqSekciaText as faqSekciaTextSk,
  otazky as otazkySk,
} from "@/data/homepage";

// Preklady obsahu domovskej stránky (hero text, štatistiky, nadpisy sekcií,
// FAQ). Slovenská verzia (zdroj pravdy pre editáciu) zostáva v data/homepage.ts
// – tu sú len anglická a talianska "nadstavba" v rovnakom tvare. Ak pridáš
// novú štatistiku/otázku do data/homepage.ts, priprav pre ňu preklad aj tu
// (dovtedy sa na EN/IT verzii webu zobrazí len slovenský text tej položky).

export type ObsahDomovskej = {
  heroText: { UvodnyText: string; NizzsieText: string };
  statistiky: Statistika[];
  projektySekciaText: SekciaText;
  dalsieProjektySekciaText: SekciaText;
  sluzbySekciaText: SekciaText;
  faqSekciaText: SekciaText;
  otazky: OtazkaItem[];
};

const en: ObsahDomovskej = {
  heroText: {
    UvodnyText: "We design and build the home you've always dreamed of",
    NizzsieText:
      "From the first sketch to handing over the keys – everything under one roof. We create timeless spaces with an eye for detail and a focus on quality.",
  },
  statistiky: [
    { cislo: 300, popis: "Successfully completed projects in Slovakia and Czechia.", specialnyZnak: "+" },
    { cislo: 21, popis: "Specialists from different fields, united under one roof.", specialnyZnak: "+" },
    { cislo: 2018, popis: "The year we started helping clients turn visions into reality." },
    { cislo: 100, popis: "Transparency in communication, budget and deadlines.", specialnyZnak: "%" },
  ],
  projektySekciaText: {
    BtnPocitactext: "Our work",
    BtnMobiltext: "Our work",
    Hlavnytext: "Featured projects",
    Malytext: "Take a look at some of our recent work.",
  },
  dalsieProjektySekciaText: {
    BtnPocitactext: "More inspiration",
    BtnMobiltext: "More inspiration",
    Hlavnytext: "Other projects",
    Malytext: "Check out more of our completed work.",
  },
  sluzbySekciaText: {
    BtnPocitactext: "What we offer",
    Hlavnytext: "Our services",
    Malytext: "Complete services from design to construction.",
  },
  faqSekciaText: {
    BtnPocitactext: "Frequently asked",
    Hlavnytext: "Have questions? We have answers.",
    Malytext: "Answers to the most common questions about working with us.",
  },
  otazky: [
    {
      otazka: "How long does it take to build a custom family home?",
      odpoved:
        "Depending on the scope of the project, usually 8 to 14 months from the start of construction to handing over the keys.",
    },
    {
      otazka: "Do you also handle project documentation and permits?",
      odpoved:
        "Yes, we take care of the whole process – design, project documentation and obtaining the necessary permits.",
    },
    {
      otazka: "Can a catalogue project be adapted to my needs?",
      odpoved:
        "Yes, we can adapt catalogue projects to your plot layout as well as your individual requirements.",
    },
    {
      otazka: "Do you also work outside of Bratislava?",
      odpoved: "Yes, we carry out projects throughout Slovakia and in Czechia.",
    },
  ],
};

const it: ObsahDomovskej = {
  heroText: {
    UvodnyText: "Progettiamo e costruiamo la casa dei tuoi sogni",
    NizzsieText:
      "Dal primo schizzo alla consegna delle chiavi – tutto sotto lo stesso tetto. Creiamo spazi senza tempo, curati nei dettagli e con attenzione alla qualità.",
  },
  statistiky: [
    { cislo: 300, popis: "Progetti realizzati con successo in Slovacchia e Repubblica Ceca.", specialnyZnak: "+" },
    { cislo: 21, popis: "Specialisti di diverse professioni, uniti sotto lo stesso tetto.", specialnyZnak: "+" },
    { cislo: 2018, popis: "L'anno in cui abbiamo iniziato ad aiutare i clienti a realizzare le loro visioni." },
    { cislo: 100, popis: "Trasparenza nella comunicazione, nel budget e nelle scadenze.", specialnyZnak: "%" },
  ],
  projektySekciaText: {
    BtnPocitactext: "Il nostro lavoro",
    BtnMobiltext: "Il nostro lavoro",
    Hlavnytext: "Progetti in evidenza",
    Malytext: "Scopri alcune delle nostre realizzazioni più recenti.",
  },
  dalsieProjektySekciaText: {
    BtnPocitactext: "Altra ispirazione",
    BtnMobiltext: "Altra ispirazione",
    Hlavnytext: "Altri progetti",
    Malytext: "Scopri altre nostre realizzazioni.",
  },
  sluzbySekciaText: {
    BtnPocitactext: "Cosa offriamo",
    Hlavnytext: "I nostri servizi",
    Malytext: "Servizi completi dalla progettazione alla realizzazione.",
  },
  faqSekciaText: {
    BtnPocitactext: "Domande frequenti",
    Hlavnytext: "Hai domande? Abbiamo le risposte.",
    Malytext: "Risposte alle domande più frequenti sulla collaborazione.",
  },
  otazky: [
    {
      otazka: "Quanto tempo richiede la costruzione di una casa unifamiliare su misura?",
      odpoved:
        "A seconda dell'entità del progetto, di solito da 8 a 14 mesi dall'inizio dei lavori alla consegna delle chiavi.",
    },
    {
      otazka: "Vi occupate anche della documentazione di progetto e dei permessi?",
      odpoved:
        "Sì, ci occupiamo dell'intero processo: progettazione, documentazione di progetto e ottenimento dei permessi necessari.",
    },
    {
      otazka: "Un progetto a catalogo può essere adattato alle mie esigenze?",
      odpoved:
        "Sì, possiamo adattare i progetti a catalogo alla planimetria del terreno e alle vostre esigenze individuali.",
    },
    {
      otazka: "Operate anche fuori Bratislava?",
      odpoved: "Sì, realizziamo progetti in tutta la Slovacchia e in Repubblica Ceca.",
    },
  ],
};

const sk: ObsahDomovskej = {
  heroText: heroTextSk,
  statistiky: statistikySk,
  projektySekciaText: projektySekciaTextSk,
  dalsieProjektySekciaText: dalsieProjektySekciaTextSk,
  sluzbySekciaText: sluzbySekciaTextSk,
  faqSekciaText: faqSekciaTextSk,
  otazky: otazkySk,
};

export const OBSAH_DOMOVSKEJ: Record<Locale, ObsahDomovskej> = { sk, en, it };
