import type { Locale } from "@/lib/i18n/locales";

// Obsah stránky /pre-firmy – ponuka pre firemných/komerčných klientov
// (developerov, prevádzky, kancelárie a pod.), oddelená od bežnej ponuky
// pre súkromných klientov na /sluzby.

export type ObsahPreFirmy = {
  nadpis: string;
  uvod: string;
  ponukaNadpis: string;
  ponuka: string[];
  procesNadpis: string;
  proces: { nazov: string; text: string }[];
  ctaNadpis: string;
  ctaText: string;
  ctaBtn: string;
};

const sk: ObsahPreFirmy = {
  nadpis: "Pre firmy",
  uvod:
    "Okrem rodinných domov a bytov navrhujeme a realizujeme aj priestory pre firmy – kancelárie, obchodné a prevádzkové priestory, showroomy či developerské projekty. Jeden kontaktný bod od návrhu až po odovzdanie.",
  ponukaNadpis: "Čo pre firmy zabezpečíme",
  ponuka: [
    "Návrh a projektovú dokumentáciu komerčných priestorov",
    "Interiérový dizajn kancelárií, prevádzok a showroomov",
    "Spoluprácu na developerských projektoch",
    "Rekonštrukcie a úpravy existujúcich priestorov",
    "Koordináciu výstavby a dodávateľov na kľúč",
    "Individuálne obchodné a cenové podmienky pri väčšom rozsahu spolupráce",
  ],
  procesNadpis: "Ako spolupráca prebieha",
  proces: [
    {
      nazov: "Úvodné stretnutie",
      text: "Preberieme zámer, rozsah priestoru a vaše požiadavky na funkčnosť aj rozpočet.",
    },
    {
      nazov: "Návrh a ponuka",
      text: "Pripravíme koncept riešenia spolu s orientačnou cenou a harmonogramom.",
    },
    {
      nazov: "Realizácia",
      text: "Zastrešíme dokumentáciu, koordináciu dodávateľov aj priebežnú kontrolu kvality.",
    },
  ],
  ctaNadpis: "Máte firemný projekt?",
  ctaText:
    "Napíšte nám o vašom priestore a plánoch – radi si dohodneme nezáväznú konzultáciu a pripravíme ponuku na mieru.",
  ctaBtn: "Kontaktovať nás",
};

const en: ObsahPreFirmy = {
  nadpis: "For companies",
  uvod:
    "Besides family homes and apartments, we also design and build spaces for businesses – offices, retail and operational spaces, showrooms and developer projects. One point of contact from design to handover.",
  ponukaNadpis: "What we take care of for companies",
  ponuka: [
    "Design and project documentation for commercial spaces",
    "Interior design for offices, retail spaces and showrooms",
    "Collaboration on developer projects",
    "Renovations and adaptations of existing spaces",
    "Turnkey coordination of construction and suppliers",
    "Individual commercial and pricing terms for larger-scale collaboration",
  ],
  procesNadpis: "How we work together",
  proces: [
    {
      nazov: "Initial meeting",
      text: "We discuss the intent, the scope of the space, and your functional and budget requirements.",
    },
    {
      nazov: "Design and proposal",
      text: "We prepare a concept together with an indicative price and timeline.",
    },
    {
      nazov: "Realization",
      text: "We take care of documentation, supplier coordination and ongoing quality control.",
    },
  ],
  ctaNadpis: "Have a corporate project in mind?",
  ctaText:
    "Tell us about your space and plans – we'd be glad to arrange a no-obligation consultation and prepare a tailored offer.",
  ctaBtn: "Contact us",
};

const it: ObsahPreFirmy = {
  nadpis: "Per le aziende",
  uvod:
    "Oltre a case unifamiliari e appartamenti, progettiamo e realizziamo anche spazi per aziende – uffici, spazi commerciali e operativi, showroom e progetti immobiliari. Un unico punto di contatto dalla progettazione alla consegna.",
  ponukaNadpis: "Cosa ci occupiamo per le aziende",
  ponuka: [
    "Progettazione e documentazione di progetto per spazi commerciali",
    "Interior design per uffici, spazi operativi e showroom",
    "Collaborazione su progetti immobiliari",
    "Ristrutturazioni e adattamenti di spazi esistenti",
    "Coordinamento chiavi in mano di costruzione e fornitori",
    "Condizioni commerciali e di prezzo individuali per collaborazioni di maggiore portata",
  ],
  procesNadpis: "Come funziona la collaborazione",
  proces: [
    {
      nazov: "Incontro iniziale",
      text: "Discutiamo l'obiettivo, l'ampiezza dello spazio e i vostri requisiti funzionali e di budget.",
    },
    {
      nazov: "Progetto e offerta",
      text: "Prepariamo un concept insieme a un prezzo indicativo e ai tempi previsti.",
    },
    {
      nazov: "Realizzazione",
      text: "Ci occupiamo della documentazione, del coordinamento dei fornitori e del controllo qualità continuo.",
    },
  ],
  ctaNadpis: "Avete un progetto aziendale?",
  ctaText:
    "Raccontateci il vostro spazio e i vostri piani – saremo lieti di fissare una consulenza senza impegno e preparare un'offerta su misura.",
  ctaBtn: "Contattateci",
};

export const OBSAH_PRE_FIRMY: Record<Locale, ObsahPreFirmy> = { sk, en, it };
