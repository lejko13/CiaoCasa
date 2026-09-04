import type { Locale } from "./locales";

// Slovník textov rozhrania (tlačidlá, nadpisy sekcií, popisky formulárov...).
// Obsah stránok (projekty, služby, FAQ...) sa prekladá samostatne v
// data/i18n/*.ts – tu sú len texty naviazané priamo na komponenty.
//
// Ako pridať nový text: doplň kľúč do typu `UiSlovnik` nižšie a potom priprav
// hodnotu pre všetky 3 jazyky (sk / en / it).

export type UiSlovnik = {
  spolocne: {
    domov: string;
    coskoro: string;
  };
  header: {
    kontaktovat: string;
    sluzby: string;
    projekty: string;
  };
  jazyk: {
    label: string;
  };
  footerCta: {
    hlavny: string;
    maly: string;
    btn: string;
  };
  footer: {
    navigacia: string;
    kontakt: string;
    socialneSiete: string;
    prefirmy: string;
    onas: string;
    kontaktNav: string;
    copyright: string;
    ochranaOsobnychUdajov: string;
    podmienky: string;
    icoLabel: string;
    dicLabel: string;
    posobimeOdRoku: string;
  };
  cookie: {
    text: string;
    odkaz: string;
    odmietnut: string;
    prijat: string;
  };
  filter: {
    zobrazitFiltre: string;
    filtre: string;
    podnadpis: string;
    resetovat: string;
    vymazatVsetko: string;
    nahladVysledkov: string;
    ziadneVysledky: string;
    ziadneVysledkyHlavne: string;
    zobrazit: string;
    projekt: string;
    projekty: string;
    projektov: string;
    typProjektu: string;
    stavProjektu: string;
    stylDizajnu: string;
    typVyuzitia: string;
  };
  galeria: {
    zavriet: string;
  };
  sluzba: {
    coJeZahrnute: string;
    proces: string;
    akoPrebiehaSpolupraca: string;
    nezavazneKontaktovat: string;
    mamZaujem: string;
    dalsieSluzby: string;
    zistitViac: string;
    mateProjektNaMysli: string;
    mateProjektText: string;
  };
  projektDetail: {
    coProjektZahrnal: string;
  };
  kontakt: {
    nadpis: string;
    napisteNamNa: string;
    zavolajteNam: string;
    adresa: string;
    sledujteNas: string;
    aleboNamNapiste: string;
    menoLabel: string;
    menoPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    telefonLabel: string;
    telefonPlaceholder: string;
    spravaLabel: string;
    spravaPlaceholder: string;
    odoslat: string;
    chybaVyplnte: string;
    chybaEmail: string;
    uspech: string;
  };
  jazykovaLista: {
    text: string;
  };
};

export const UI: Record<Locale, UiSlovnik> = {
  sk: {
    spolocne: { domov: "Domov", coskoro: "Čoskoro" },
    header: {
      kontaktovat: "Kontaktovať",
      sluzby: "Služby",
      projekty: "Projekty",
    },
    jazyk: { label: "Jazyk" },
    footerCta: {
      hlavny: "Máte v hlave svoj vysnívaný domov?",
      maly: "Ozvite sa nám a poďme ho spoločne naprojektovať.",
      btn: "Poďme na to spolu",
    },
    footer: {
      navigacia: "Navigácia",
      kontakt: "Kontakt",
      socialneSiete: "Sociálne siete",
      prefirmy: "Pre firmy",
      onas: "O nás",
      kontaktNav: "Kontakt",
      copyright: "Všetky práva vyhradené.",
      ochranaOsobnychUdajov: "Ochrana osobných údajov",
      podmienky: "Podmienky",
      icoLabel: "IČO",
      dicLabel: "DIČ",
      posobimeOdRoku: "Pôsobíme od roku",
    },
    cookie: {
      text: "Táto stránka používa cookies nevyhnutné pre jej fungovanie. Viac sa dozviete v",
      odkaz: "ochrane osobných údajov",
      odmietnut: "Odmietnuť",
      prijat: "Prijať všetky",
    },
    filter: {
      zobrazitFiltre: "Zobraziť filtre",
      filtre: "Filtre",
      podnadpis: "Vyberte si podľa toho, čo hľadáte",
      resetovat: "Resetovať",
      vymazatVsetko: "Vymazať všetko",
      nahladVysledkov: "Náhľad výsledkov",
      ziadneVysledky: "Tejto kombinácii filtrov nezodpovedá žiadny projekt.",
      ziadneVysledkyHlavne: "Žiadne projekty nezodpovedajú zvoleným filtrom.",
      zobrazit: "Zobraziť",
      projekt: "projekt",
      projekty: "projekty",
      projektov: "projektov",
      typProjektu: "Typ projektu",
      stavProjektu: "Stav projektu",
      stylDizajnu: "Štýl dizajnu",
      typVyuzitia: "Typ využitia",
    },
    galeria: { zavriet: "Zavrieť" },
    sluzba: {
      coJeZahrnute: "Čo je zahrnuté",
      proces: "Proces",
      akoPrebiehaSpolupraca: "Ako prebieha spolupráca",
      nezavazneKontaktovat: "Nezáväzne nás kontaktovať",
      mamZaujem: "Mám záujem",
      dalsieSluzby: "Ďalšie služby",
      zistitViac: "Zistiť viac",
      mateProjektNaMysli: "Máte projekt na mysli?",
      mateProjektText:
        "Napíšte nám pár slov o tom, čo plánujete – ozveme sa vám s nezáväznou ponukou a ďalšími krokmi.",
    },
    projektDetail: { coProjektZahrnal: "Čo projekt zahŕňal" },
    kontakt: {
      nadpis: "Kontakt",
      napisteNamNa: "Napíšte nám na",
      zavolajteNam: "Zavolajte nám",
      adresa: "Adresa",
      sledujteNas: "Sledujte nás",
      aleboNamNapiste: "Alebo nám napíšte priamo",
      menoLabel: "Meno a priezvisko",
      menoPlaceholder: "Vaše meno",
      emailLabel: "E-mail",
      emailPlaceholder: "vas@email.sk",
      telefonLabel: "Telefón (nepovinné)",
      telefonPlaceholder: "+421 900 000 000",
      spravaLabel: "Správa",
      spravaPlaceholder: "Napíšte nám pár slov o vašom projekte...",
      odoslat: "Odoslať správu",
      chybaVyplnte: "Prosím, vyplňte meno, e-mail a správu.",
      chybaEmail: "Zadajte, prosím, platnú e-mailovú adresu.",
      uspech:
        "Ďakujeme! Otvorili sme vám e-mailového klienta s pripravenou správou – stačí ju už len odoslať. Ak sa neotvoril automaticky, napíšte nám priamo na",
    },
    jazykovaLista: { text: "Táto stránka je dostupná aj v ďalších jazykoch." },
  },
  en: {
    spolocne: { domov: "Home", coskoro: "Coming soon" },
    header: {
      kontaktovat: "Contact us",
      sluzby: "Services",
      projekty: "Projects",
    },
    jazyk: { label: "Language" },
    footerCta: {
      hlavny: "Have your dream home in mind?",
      maly: "Get in touch and let's design it together.",
      btn: "Let's do this together",
    },
    footer: {
      navigacia: "Navigation",
      kontakt: "Contact",
      socialneSiete: "Social media",
      prefirmy: "For companies",
      onas: "About",
      kontaktNav: "Contact",
      copyright: "All rights reserved.",
      ochranaOsobnychUdajov: "Privacy policy",
      podmienky: "Terms",
      icoLabel: "Company ID",
      dicLabel: "Tax ID",
      posobimeOdRoku: "Active since",
    },
    cookie: {
      text: "This website uses cookies necessary for it to function. Learn more in our",
      odkaz: "privacy policy",
      odmietnut: "Decline",
      prijat: "Accept all",
    },
    filter: {
      zobrazitFiltre: "Show filters",
      filtre: "Filters",
      podnadpis: "Narrow down what you're looking for",
      resetovat: "Reset",
      vymazatVsetko: "Clear all",
      nahladVysledkov: "Preview of results",
      ziadneVysledky: "No project matches this combination of filters.",
      ziadneVysledkyHlavne: "No projects match the selected filters.",
      zobrazit: "Show",
      projekt: "project",
      projekty: "projects",
      projektov: "projects",
      typProjektu: "Project type",
      stavProjektu: "Project status",
      stylDizajnu: "Design style",
      typVyuzitia: "Room type",
    },
    galeria: { zavriet: "Close" },
    sluzba: {
      coJeZahrnute: "What's included",
      proces: "Process",
      akoPrebiehaSpolupraca: "How the collaboration works",
      nezavazneKontaktovat: "Get in touch, no obligation",
      mamZaujem: "I'm interested",
      dalsieSluzby: "Other services",
      zistitViac: "Learn more",
      mateProjektNaMysli: "Have a project in mind?",
      mateProjektText:
        "Tell us a bit about what you're planning – we'll get back to you with a no-obligation offer and next steps.",
    },
    projektDetail: { coProjektZahrnal: "What the project included" },
    kontakt: {
      nadpis: "Contact",
      napisteNamNa: "Write to us at",
      zavolajteNam: "Call us",
      adresa: "Address",
      sledujteNas: "Follow us",
      aleboNamNapiste: "Or write to us directly",
      menoLabel: "Full name",
      menoPlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      telefonLabel: "Phone (optional)",
      telefonPlaceholder: "+1 555 000 0000",
      spravaLabel: "Message",
      spravaPlaceholder: "Tell us a few words about your project...",
      odoslat: "Send message",
      chybaVyplnte: "Please fill in your name, email and message.",
      chybaEmail: "Please enter a valid email address.",
      uspech:
        "Thank you! We've opened your email client with the message ready – just hit send. If it didn't open automatically, write to us directly at",
    },
    jazykovaLista: { text: "This website is also available in other languages." },
  },
  it: {
    spolocne: { domov: "Home", coskoro: "Prossimamente" },
    header: {
      kontaktovat: "Contattaci",
      sluzby: "Servizi",
      projekty: "Progetti",
    },
    jazyk: { label: "Lingua" },
    footerCta: {
      hlavny: "Hai in mente la casa dei tuoi sogni?",
      maly: "Contattaci e progettiamola insieme.",
      btn: "Facciamolo insieme",
    },
    footer: {
      navigacia: "Navigazione",
      kontakt: "Contatto",
      socialneSiete: "Social media",
      prefirmy: "Per le aziende",
      onas: "Chi siamo",
      kontaktNav: "Contatto",
      copyright: "Tutti i diritti riservati.",
      ochranaOsobnychUdajov: "Privacy",
      podmienky: "Termini",
      icoLabel: "P. IVA",
      dicLabel: "Cod. fiscale",
      posobimeOdRoku: "Attivi dal",
    },
    cookie: {
      text: "Questo sito utilizza cookie necessari al suo funzionamento. Maggiori informazioni nella",
      odkaz: "informativa sulla privacy",
      odmietnut: "Rifiuta",
      prijat: "Accetta tutti",
    },
    filter: {
      zobrazitFiltre: "Mostra filtri",
      filtre: "Filtri",
      podnadpis: "Restringi la ricerca in base a ciò che cerchi",
      resetovat: "Reimposta",
      vymazatVsetko: "Cancella tutto",
      nahladVysledkov: "Anteprima dei risultati",
      ziadneVysledky: "Nessun progetto corrisponde a questa combinazione di filtri.",
      ziadneVysledkyHlavne: "Nessun progetto corrisponde ai filtri selezionati.",
      zobrazit: "Mostra",
      projekt: "progetto",
      projekty: "progetti",
      projektov: "progetti",
      typProjektu: "Tipo di progetto",
      stavProjektu: "Stato del progetto",
      stylDizajnu: "Stile di design",
      typVyuzitia: "Tipo di ambiente",
    },
    galeria: { zavriet: "Chiudi" },
    sluzba: {
      coJeZahrnute: "Cosa è incluso",
      proces: "Processo",
      akoPrebiehaSpolupraca: "Come funziona la collaborazione",
      nezavazneKontaktovat: "Contattaci senza impegno",
      mamZaujem: "Sono interessato",
      dalsieSluzby: "Altri servizi",
      zistitViac: "Scopri di più",
      mateProjektNaMysli: "Hai un progetto in mente?",
      mateProjektText:
        "Raccontaci qualche parola su cosa stai pianificando: ti risponderemo con un'offerta senza impegno e i prossimi passi.",
    },
    projektDetail: { coProjektZahrnal: "Cosa includeva il progetto" },
    kontakt: {
      nadpis: "Contatto",
      napisteNamNa: "Scrivici a",
      zavolajteNam: "Chiamaci",
      adresa: "Indirizzo",
      sledujteNas: "Seguici",
      aleboNamNapiste: "Oppure scrivici direttamente",
      menoLabel: "Nome e cognome",
      menoPlaceholder: "Il tuo nome",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.it",
      telefonLabel: "Telefono (facoltativo)",
      telefonPlaceholder: "+39 000 000 0000",
      spravaLabel: "Messaggio",
      spravaPlaceholder: "Scrivici qualche parola sul tuo progetto...",
      odoslat: "Invia messaggio",
      chybaVyplnte: "Inserisci nome, email e messaggio.",
      chybaEmail: "Inserisci un indirizzo email valido.",
      uspech:
        "Grazie! Abbiamo aperto il tuo client email con il messaggio pronto – devi solo inviarlo. Se non si è aperto automaticamente, scrivici direttamente a",
    },
    jazykovaLista: { text: "Questo sito è disponibile anche in altre lingue." },
  },
};
