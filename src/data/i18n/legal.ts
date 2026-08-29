import type { Locale } from "@/lib/i18n/locales";

// Preklady zástupného (vzorového) textu pre právne stránky /ochrana-osobnych-udajov
// a /podmienky. TOTO NIE JE PRÁVNE PORADENSTVO – pred spustením webu do
// ostrej prevádzky si dajte oba texty skontrolovať/napísať právnikom podľa
// reálneho spracúvania údajov a reálnej ponuky služieb.
//
// Značka "{EMAIL}" sa v texte automaticky nahradí klikateľným odkazom na
// kontaktný e-mail (pozri siteInfo.email) – nechaj ju presne v tomto tvare,
// ak chceš, aby sa na danom mieste zobrazil e-mail ako odkaz.

export type LegalSekcia = { nadpis: string; text: string };
export type LegalObsah = { nadpis: string; uvod: string; sekcie: LegalSekcia[] };

export const OCHRANA_OSOBNYCH_UDAJOV: Record<Locale, LegalObsah> = {
  sk: {
    nadpis: "Ochrana osobných údajov",
    uvod:
      "Toto je zástupný (vzorový) text – nenahrádza právne poradenstvo. Pred spustením webu si ho dajte skontrolovať/napísať podľa reálneho spracúvania údajov na vašom webe.",
    sekcie: [
      {
        nadpis: "Prevádzkovateľ",
        text: "Prevádzkovateľom tejto webovej stránky a spracúvateľom osobných údajov je {NAZOV}, {ADRESA}. V prípade otázok nás môžete kontaktovať na {EMAIL}.",
      },
      {
        nadpis: "Aké údaje spracúvame",
        text: "Ak nám napíšete cez kontaktný formulár alebo e-mail, spracúvame údaje, ktoré nám sami poskytnete (meno, e-mail, telefón, obsah správy) – výhradne za účelom vybavenia vašej požiadavky.",
      },
      {
        nadpis: "Cookies",
        text: "Web používa iba nevyhnutné cookies potrebné pre jeho základné fungovanie (napr. zapamätanie si vašej voľby v cookie lište). Nepoužívame analytické ani marketingové cookies, pokiaľ vám o tom nedáme vedieť v aktualizovanej verzii tejto stránky.",
      },
      {
        nadpis: "Vaše práva",
        text: "V súlade so zákonom o ochrane osobných údajov a nariadením GDPR máte právo na prístup k svojim údajom, ich opravu, vymazanie, obmedzenie spracúvania a právo namietať. Ak si chcete niektoré z týchto práv uplatniť, napíšte nám na {EMAIL}.",
      },
    ],
  },
  en: {
    nadpis: "Privacy Policy",
    uvod:
      "This is placeholder (sample) text – it does not replace legal advice. Before launching the website, have it reviewed/written to match the actual data processing on your website.",
    sekcie: [
      {
        nadpis: "Data controller",
        text: "The controller of this website and processor of personal data is {NAZOV}, {ADRESA}. If you have any questions, you can contact us at {EMAIL}.",
      },
      {
        nadpis: "What data we process",
        text: "If you write to us via the contact form or email, we process the data you provide yourself (name, email, phone, message content) – solely for the purpose of handling your request.",
      },
      {
        nadpis: "Cookies",
        text: "The website uses only cookies necessary for its basic functioning (e.g. remembering your choice in the cookie banner). We do not use analytics or marketing cookies unless we inform you in an updated version of this page.",
      },
      {
        nadpis: "Your rights",
        text: "In accordance with data protection law and the GDPR, you have the right to access your data, correct it, delete it, restrict its processing, and object to its processing. To exercise any of these rights, write to us at {EMAIL}.",
      },
    ],
  },
  it: {
    nadpis: "Privacy",
    uvod:
      "Questo è un testo segnaposto (esemplificativo) – non sostituisce una consulenza legale. Prima di lanciare il sito, fatelo verificare/redigere in base al reale trattamento dei dati sul vostro sito.",
    sekcie: [
      {
        nadpis: "Titolare del trattamento",
        text: "Il titolare di questo sito web e responsabile del trattamento dei dati personali è {NAZOV}, {ADRESA}. Per domande potete contattarci a {EMAIL}.",
      },
      {
        nadpis: "Quali dati trattiamo",
        text: "Se ci scrivete tramite il modulo di contatto o via email, trattiamo i dati che ci fornite voi stessi (nome, email, telefono, contenuto del messaggio) – esclusivamente allo scopo di gestire la vostra richiesta.",
      },
      {
        nadpis: "Cookie",
        text: "Il sito utilizza solo cookie necessari al suo funzionamento di base (ad es. per ricordare la vostra scelta nel banner cookie). Non utilizziamo cookie di analisi o marketing, a meno che non ve ne informiamo in una versione aggiornata di questa pagina.",
      },
      {
        nadpis: "I vostri diritti",
        text: "In conformità con la normativa sulla protezione dei dati e il GDPR, avete il diritto di accedere ai vostri dati, rettificarli, cancellarli, limitarne il trattamento e opporvi al trattamento. Per esercitare uno di questi diritti, scriveteci a {EMAIL}.",
      },
    ],
  },
};

export const PODMIENKY: Record<Locale, LegalObsah> = {
  sk: {
    nadpis: "Podmienky",
    uvod:
      "Toto je zástupný (vzorový) text – nenahrádza právne poradenstvo. Pred spustením webu si ho dajte skontrolovať/napísať podľa reálnej ponuky vašich služieb.",
    sekcie: [
      {
        nadpis: "Všeobecné ustanovenia",
        text: "Tieto podmienky upravujú vzťah medzi {NAZOV} a klientmi, ktorí využívajú naše služby (návrh, projektová dokumentácia, výstavba, interiérový dizajn a súvisiace služby).",
      },
      {
        nadpis: "Objednávka služieb",
        text: "Konkrétny rozsah, cena a termíny každej zákazky sa dohodujú individuálne na základe nezáväznej konzultácie a následnej cenovej ponuky.",
      },
      {
        nadpis: "Kontakt",
        text: "V prípade otázok k týmto podmienkam nás kontaktujte na {EMAIL}.",
      },
    ],
  },
  en: {
    nadpis: "Terms",
    uvod:
      "This is placeholder (sample) text – it does not replace legal advice. Before launching the website, have it reviewed/written to match your actual range of services.",
    sekcie: [
      {
        nadpis: "General provisions",
        text: "These terms govern the relationship between {NAZOV} and clients who use our services (design, project documentation, construction, interior design and related services).",
      },
      {
        nadpis: "Ordering services",
        text: "The specific scope, price and timeline of each project is agreed individually, based on a no-obligation consultation and a subsequent price quote.",
      },
      {
        nadpis: "Contact",
        text: "If you have any questions about these terms, contact us at {EMAIL}.",
      },
    ],
  },
  it: {
    nadpis: "Termini",
    uvod:
      "Questo è un testo segnaposto (esemplificativo) – non sostituisce una consulenza legale. Prima di lanciare il sito, fatelo verificare/redigere in base alla vostra reale offerta di servizi.",
    sekcie: [
      {
        nadpis: "Disposizioni generali",
        text: "Questi termini regolano il rapporto tra {NAZOV} e i clienti che utilizzano i nostri servizi (progettazione, documentazione di progetto, costruzione, interior design e servizi correlati).",
      },
      {
        nadpis: "Richiesta dei servizi",
        text: "L'ambito specifico, il prezzo e le tempistiche di ogni incarico vengono concordati individualmente sulla base di una consulenza senza impegno e di un successivo preventivo.",
      },
      {
        nadpis: "Contatto",
        text: "Per domande su questi termini, contattateci a {EMAIL}.",
      },
    ],
  },
};
