import type { Locale } from "@/lib/i18n/locales";

// Obsah stránky /o-nas. Keďže vo firme pôsobíš sám, stránka je poňatá ako
// osobný profil zakladateľa namiesto tímovej strany. Meno, fotku a časti
// príbehu označené "[...]" nahraď svojimi skutočnými údajmi – sú tu zámerne
// ako zreteľne označené zástupné hodnoty (rovnaký princíp ako pri
// siteInfo.ico/dic = "— doplniť"), aby sa na webe nikdy nezobrazil vymyslený
// text tvárený ako fakt.

export type ObsahONas = {
  meno: string;
  rola: string;
  nadpis: string;
  uvod: string;
  pribehNadpis: string;
  pribeh: string[];
  hodnotyNadpis: string;
  hodnoty: { nazov: string; text: string }[];
  ctaNadpis: string;
  ctaText: string;
  ctaBtn: string;
};

const sk: ObsahONas = {
  meno: "[Vaše meno]",
  rola: "Zakladateľ, " + "CiaoCasa",
  nadpis: "O mne",
  uvod:
    "Som človek, ktorý stojí za každým projektom od prvého náčrtu až po odovzdanie kľúčov – bez veľkého tímu, ale o to osobnejšie a zodpovednejšie.",
  pribehNadpis: "Môj príbeh",
  pribeh: [
    "[Sem doplň pár viet o tom, ako si sa dostal k architektúre a stavaniu, koľko rokov v odbore pôsobíš a čo ťa na tejto práci baví najviac.]",
    "[Tu môžeš doplniť konkrétny príklad projektu alebo skúsenosti, ktorá najlepšie vystihuje tvoj prístup ku klientom.]",
  ],
  hodnotyNadpis: "Ako pracujem",
  hodnoty: [
    {
      nazov: "Osobný prístup",
      text: "S každým klientom komunikujem priamo ja – žiadne prepájanie cez viacero ľudí, žiadne stratené informácie.",
    },
    {
      nazov: "Transparentnosť",
      text: "O priebehu, rozpočte aj termínoch viete od prvého dňa – bez nepríjemných prekvapení.",
    },
    {
      nazov: "Dôraz na detail",
      text: "Každý projekt dotiahnem do detailu tak, ako keby som staval pre seba.",
    },
  ],
  ctaNadpis: "Poďme sa spoznať",
  ctaText: "Napíšte mi pár slov o vašom projekte – rád si s vami dohodnem nezáväzný úvodný rozhovor.",
  ctaBtn: "Napísať mi",
};

const en: ObsahONas = {
  meno: "[Your name]",
  rola: "Founder, CiaoCasa",
  nadpis: "About me",
  uvod:
    "I'm the person behind every project, from the first sketch to handing over the keys – no big team, just a more personal and accountable way of working.",
  pribehNadpis: "My story",
  pribeh: [
    "[Add a few sentences here about how you got into architecture and construction, how many years you've worked in the field, and what you enjoy most about it.]",
    "[You can add a specific project example or experience here that best captures your approach to clients.]",
  ],
  hodnotyNadpis: "How I work",
  hodnoty: [
    {
      nazov: "A personal approach",
      text: "I communicate directly with every client – no relaying through several people, no information getting lost.",
    },
    {
      nazov: "Transparency",
      text: "You know about progress, budget and deadlines from day one – no unpleasant surprises.",
    },
    {
      nazov: "Attention to detail",
      text: "I take every project through to the finest detail, as if I were building it for myself.",
    },
  ],
  ctaNadpis: "Let's get to know each other",
  ctaText: "Write me a few words about your project – I'd be glad to arrange a no-obligation introductory chat.",
  ctaBtn: "Write to me",
};

const it: ObsahONas = {
  meno: "[Il tuo nome]",
  rola: "Fondatore, CiaoCasa",
  nadpis: "Chi sono",
  uvod:
    "Sono la persona dietro ogni progetto, dal primo schizzo alla consegna delle chiavi – senza un grande team, ma con un approccio più personale e responsabile.",
  pribehNadpis: "La mia storia",
  pribeh: [
    "[Aggiungi qui qualche frase su come sei arrivato all'architettura e all'edilizia, da quanti anni lavori nel settore e cosa ti piace di più di questo lavoro.]",
    "[Qui puoi aggiungere un esempio concreto di progetto o un'esperienza che meglio rappresenta il tuo approccio con i clienti.]",
  ],
  hodnotyNadpis: "Come lavoro",
  hodnoty: [
    {
      nazov: "Un approccio personale",
      text: "Comunico direttamente con ogni cliente – nessun passaggio tra più persone, nessuna informazione persa.",
    },
    {
      nazov: "Trasparenza",
      text: "Conoscete l'andamento, il budget e le scadenze fin dal primo giorno – senza spiacevoli sorprese.",
    },
    {
      nazov: "Attenzione ai dettagli",
      text: "Porto ogni progetto fino al minimo dettaglio, come se lo costruissi per me stesso.",
    },
  ],
  ctaNadpis: "Conosciamoci",
  ctaText: "Scrivetemi qualche parola sul vostro progetto – sarò lieto di fissare un primo colloquio senza impegno.",
  ctaBtn: "Scrivimi",
};

export const OBSAH_ONAS: Record<Locale, ObsahONas> = { sk, en, it };
