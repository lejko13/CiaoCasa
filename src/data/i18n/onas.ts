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
  meno: "Timothy Smon",
  rola: "Zakladateľ, " + "CiaoCasa",
  nadpis: "O mne",
  uvod:
    "Interiér pre mňa nie je len o tom, ako dobre vyzerá. Je o pocite, ktorý vo vás priestor vyvolá, o detailoch a hlavne o tom, aby vám dával zmysel.",
  pribehNadpis: "Môj príbeh",
  pribeh: [
    "Každý projekt začínam od vás – od vášho životného štýlu, vkusu a predstavy o tom, ako chcete svoj priestor využívať. Mojou úlohou je tieto predstavy pochopiť, doplniť ich o vlastný pohľad a vytvoriť interiér, ktorý bude nadčasový, osobitý a hlavne váš.",
    "ciao Casa nie je o jednom konkrétnom štýle. Každý interiér má svoj vlastný charakter, preto ku každému projektu pristupujem individuálne a hľadám riešenia, ktoré fungujú vizuálne aj v každodennom živote.",
    "Od prvého návrhu až po realizáciu dohliadam na dôležité detaily a spolupracujem s overenými dodávateľmi, ktorým dôverujem.",
    "Pre mňa je dobrý interiér taký, ktorý nepotrebuje vysvetľovať, prečo je dobrý. Jednoducho sa v ňom cítite dobre.",
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
  meno: "Timothy Smon",
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
  meno: "Timothy Smon",
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
