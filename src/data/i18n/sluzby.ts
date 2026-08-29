import type { Locale } from "@/lib/i18n/locales";

// Preklady obsahu služieb (data/sluzby.ts zostáva slovenský zdroj pravdy).
// Kľúč najvyššej úrovne = _id služby z data/sluzby.ts. Stačí doplniť polia,
// ktoré chceš preložiť – čokoľvek chýba, zobrazí sa v pôvodnej slovenčine
// (viď lib/i18n/resolveContent.ts).
//
// Pridáš novú službu do data/sluzby.ts? Skopíruj sem blok pre jej _id a
// prelož Nazov/Popis/PopisDlhy/CoJeZahrnute/Proces – dovtedy sa jednoducho
// zobrazí po slovensky aj v EN/IT verzii webu (nič sa nezlomí).

export type ProcesKrokPreklad = {
  Nazov?: string;
  Trvanie?: string;
  Popis?: string;
};

export type SluzbaPreklad = {
  Nazov?: string;
  Popis?: string;
  PopisDlhy?: string;
  CoJeZahrnute?: string[];
  Proces?: ProcesKrokPreklad[];
};

export const SLUZBY_PREKLAD: Record<string, Partial<Record<Locale, SluzbaPreklad>>> = {
  "sluzba-1": {
    en: {
      Nazov: "Custom family home",
      Popis:
        "We design and build a family home exactly the way you imagine it, from the first sketch to handing over the keys.",
      PopisDlhy:
        "A custom family home means the entire process – from the initial consultation, through architectural design and project documentation, to the construction itself – is tailored exactly to your needs, plot and budget. We guide you through every step and communicate transparently, so you have a clear overview from day one until the keys are handed over.",
      CoJeZahrnute: [
        "Initial consultation and plot analysis",
        "Custom architectural study",
        "Complete project documentation",
        "Obtaining the building permit",
        "Selection of materials and technologies",
        "Coordination and supervision during construction",
      ],
      Proces: [
        {
          Nazov: "Initial consultation",
          Trvanie: "1 week",
          Popis: "We get to know each other, discuss your ideas and analyze the plot.",
        },
        {
          Nazov: "Design and visualizations",
          Trvanie: "3–5 weeks",
          Popis: "We prepare the architectural study and 3D visualizations of the house.",
        },
        {
          Nazov: "Project documentation",
          Trvanie: "4–8 weeks",
          Popis: "We prepare documentation for the building permit and construction.",
        },
        {
          Nazov: "Construction",
          Trvanie: "8–14 months",
          Popis: "We coordinate the tradespeople and supervise the construction process.",
        },
      ],
    },
    it: {
      Nazov: "Casa unifamiliare su misura",
      Popis:
        "Progettiamo e costruiamo la casa unifamiliare esattamente come la immaginate, dal primo schizzo alla consegna delle chiavi.",
      PopisDlhy:
        "Una casa su misura significa che l'intero processo – dalla consulenza iniziale, alla progettazione architettonica e alla documentazione di progetto, fino alla costruzione vera e propria – viene adattato esattamente alle vostre esigenze, al terreno e al budget. Vi accompagniamo in ogni fase e comunichiamo in modo trasparente, così avete sempre il quadro della situazione dal primo giorno fino alla consegna delle chiavi.",
      CoJeZahrnute: [
        "Consulenza iniziale e analisi del terreno",
        "Studio architettonico su misura",
        "Documentazione di progetto completa",
        "Ottenimento del permesso di costruzione",
        "Scelta di materiali e tecnologie",
        "Coordinamento e supervisione durante la costruzione",
      ],
      Proces: [
        {
          Nazov: "Consulenza iniziale",
          Trvanie: "1 settimana",
          Popis: "Ci conosciamo, discutiamo le vostre idee e analizziamo il terreno.",
        },
        {
          Nazov: "Progetto e visualizzazioni",
          Trvanie: "3–5 settimane",
          Popis: "Prepariamo lo studio architettonico e le visualizzazioni 3D della casa.",
        },
        {
          Nazov: "Documentazione di progetto",
          Trvanie: "4–8 settimane",
          Popis: "Prepariamo la documentazione per il permesso di costruzione e la realizzazione.",
        },
        {
          Nazov: "Costruzione",
          Trvanie: "8–14 mesi",
          Popis: "Coordiniamo gli artigiani e supervisioniamo l'andamento della costruzione.",
        },
      ],
    },
  },

  "sluzba-2": {
    en: {
      Nazov: "Interior design",
      Popis: "We create an interior that combines functionality, aesthetics and your personal style.",
      PopisDlhy:
        "When designing an interior, we focus on making the space feel harmonious while working exactly the way you need it every day. We prepare the concept, selection of materials, colours and furniture, 3D visualizations and guidance through the whole realization – from apartments and family homes to commercial spaces.",
      CoJeZahrnute: [
        "Initial consultation and space analysis",
        "Layout and functional solution",
        "Selection of materials, colours and finishes",
        "3D visualizations and renderings",
        "Lighting and electrical design",
        "Coordination and supervision during realization",
      ],
      Proces: [
        {
          Nazov: "Initial consultation",
          Trvanie: "1 week",
          Popis: "We get to know each other, discuss your ideas and analyze the space.",
        },
        {
          Nazov: "Concept and visualizations",
          Trvanie: "3–4 weeks",
          Popis: "We create the layout design and 3D visualizations, including material selection.",
        },
        {
          Nazov: "Realization documentation",
          Trvanie: "2–3 weeks",
          Popis: "We prepare detailed drawings and technical documentation for realization.",
        },
        {
          Nazov: "Realization",
          Trvanie: "4–12 weeks",
          Popis: "We coordinate the tradespeople and supervise the progress of the work.",
        },
      ],
    },
    it: {
      Nazov: "Interior design",
      Popis: "Creiamo un interno che unisce funzionalità, estetica e il vostro stile personale.",
      PopisDlhy:
        "Nella progettazione degli interni ci concentriamo affinché lo spazio risulti armonioso e allo stesso tempo funzioni esattamente come vi serve ogni giorno. Prepariamo il concept, la scelta di materiali, colori e arredi, le visualizzazioni 3D e vi accompagniamo nella realizzazione – da appartamenti e case unifamiliari fino a spazi commerciali.",
      CoJeZahrnute: [
        "Consulenza iniziale e analisi dello spazio",
        "Soluzione distributiva e funzionale",
        "Scelta di materiali, colori e finiture",
        "Visualizzazioni 3D e rendering",
        "Progetto illuminotecnico ed elettrico",
        "Coordinamento e supervisione durante la realizzazione",
      ],
      Proces: [
        {
          Nazov: "Consulenza iniziale",
          Trvanie: "1 settimana",
          Popis: "Ci conosciamo, discutiamo le vostre idee e analizziamo lo spazio.",
        },
        {
          Nazov: "Concept e visualizzazioni",
          Trvanie: "3–4 settimane",
          Popis: "Creiamo la planimetria e le visualizzazioni 3D, inclusa la scelta dei materiali.",
        },
        {
          Nazov: "Documentazione esecutiva",
          Trvanie: "2–3 settimane",
          Popis: "Prepariamo disegni dettagliati e documentazione tecnica per la realizzazione.",
        },
        {
          Nazov: "Realizzazione",
          Trvanie: "4–12 settimane",
          Popis: "Coordiniamo gli artigiani e supervisioniamo l'andamento dei lavori.",
        },
      ],
    },
  },

  "sluzba-3": {
    en: {
      Nazov: "Construction",
      Popis: "We handle the complete construction, from the foundations to the roof.",
      PopisDlhy:
        "We handle the complete construction from the foundations to the roof, including coordination of tradespeople, material suppliers and ongoing quality control. Thanks to a single point of contact throughout the construction, you can be sure the project stays on schedule and on budget.",
      CoJeZahrnute: [
        "Site preparation and earthworks",
        "Shell construction and roof",
        "Water, electrical and heating installations",
        "Complete finishing works",
        "Ongoing quality control",
        "Turnkey handover of the building",
      ],
      Proces: [
        {
          Nazov: "Preparation and earthworks",
          Trvanie: "2–3 weeks",
          Popis: "We prepare the site, foundations and utility networks.",
        },
        {
          Nazov: "Shell construction",
          Trvanie: "2–4 months",
          Popis: "We build the load-bearing structures, ceiling and roof.",
        },
        {
          Nazov: "Installations",
          Trvanie: "1–2 months",
          Popis: "We handle the electrical, plumbing and heating installations.",
        },
        {
          Nazov: "Finishing works",
          Trvanie: "2–3 months",
          Popis: "Plastering, flooring, tiling and final touches before handover.",
        },
      ],
    },
    it: {
      Nazov: "Costruzione",
      Popis: "Ci occupiamo della realizzazione completa dell'edificio, dalle fondamenta al tetto.",
      PopisDlhy:
        "Ci occupiamo della realizzazione completa dell'edificio dalle fondamenta al tetto, incluso il coordinamento di artigiani, fornitori di materiali e il controllo qualità continuo. Grazie a un unico punto di contatto durante tutta la costruzione, avete la certezza che il progetto proceda secondo i tempi e il budget previsti.",
      CoJeZahrnute: [
        "Preparazione del cantiere e movimento terra",
        "Struttura grezza e tetto",
        "Impianti idrici, elettrici e di riscaldamento",
        "Lavori di finitura completi",
        "Controllo qualità continuo",
        "Consegna dell'edificio chiavi in mano",
      ],
      Proces: [
        {
          Nazov: "Preparazione e movimento terra",
          Trvanie: "2–3 settimane",
          Popis: "Prepariamo il cantiere, le fondamenta e gli allacciamenti.",
        },
        {
          Nazov: "Struttura grezza",
          Trvanie: "2–4 mesi",
          Popis: "Realizziamo le strutture portanti, il solaio e il tetto.",
        },
        {
          Nazov: "Impianti",
          Trvanie: "1–2 mesi",
          Popis: "Realizziamo l'impianto elettrico, idraulico e di riscaldamento.",
        },
        {
          Nazov: "Lavori di finitura",
          Trvanie: "2–3 mesi",
          Popis: "Intonaci, pavimenti, rivestimenti e ultimi ritocchi prima della consegna.",
        },
      ],
    },
  },

  "sluzba-4": {
    en: {
      Nazov: "Catalogue projects",
      Popis: "Proven ready-made designs that we can adapt to your plot and needs.",
      PopisDlhy:
        "Catalogue projects are tried-and-tested designs that save you time and the cost of designing from scratch. We can adapt every catalogue project to a specific plot, orientation and your individual requirements, so the result feels just as personal as a fully custom-designed house.",
      CoJeZahrnute: [
        "Choice from proven catalogue designs",
        "Adapting the design to the plot",
        "Layout adjustments based on your requirements",
        "Complete project documentation",
        "Obtaining the building permit",
        "Option of follow-up construction",
      ],
      Proces: [
        {
          Nazov: "Choosing the project",
          Trvanie: "1 week",
          Popis: "Together we choose the catalogue design that best fits your needs.",
        },
        {
          Nazov: "Adaptation",
          Trvanie: "2–3 weeks",
          Popis: "We adjust the design to the plot and your individual requirements.",
        },
        {
          Nazov: "Documentation and permits",
          Trvanie: "4–6 weeks",
          Popis: "We prepare the documentation and obtain the necessary permits.",
        },
        {
          Nazov: "Construction",
          Trvanie: "by agreement",
          Popis: "On request, we also handle the construction of the house itself.",
        },
      ],
    },
    it: {
      Nazov: "Progetti a catalogo",
      Popis: "Progetti tipo collaudati, che possiamo adattare al vostro terreno e alle vostre esigenze.",
      PopisDlhy:
        "I progetti a catalogo sono soluzioni collaudate che vi fanno risparmiare tempo e i costi di una progettazione da zero. Possiamo adattare ogni progetto tipo al terreno specifico, all'orientamento e alle vostre esigenze individuali, così il risultato risulta personale quanto una casa progettata su misura.",
      CoJeZahrnute: [
        "Scelta tra progetti tipo collaudati",
        "Adattamento del progetto al terreno",
        "Modifiche alla planimetria su richiesta",
        "Documentazione di progetto completa",
        "Ottenimento del permesso di costruzione",
        "Possibilità di costruzione successiva",
      ],
      Proces: [
        {
          Nazov: "Scelta del progetto",
          Trvanie: "1 settimana",
          Popis: "Scegliamo insieme il progetto tipo più adatto alle vostre esigenze.",
        },
        {
          Nazov: "Adattamento",
          Trvanie: "2–3 settimane",
          Popis: "Adattiamo il progetto al terreno e alle vostre esigenze individuali.",
        },
        {
          Nazov: "Documentazione e permessi",
          Trvanie: "4–6 settimane",
          Popis: "Prepariamo la documentazione e otteniamo i permessi necessari.",
        },
        {
          Nazov: "Realizzazione",
          Trvanie: "su accordo",
          Popis: "Su richiesta ci occupiamo anche della costruzione della casa stessa.",
        },
      ],
    },
  },
};
