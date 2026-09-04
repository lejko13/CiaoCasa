// Základné údaje o firme – predtým typ "zakladneInformacie" v Sanity.
// Kontaktné údaje sú prevzaté z pôvodnej pätičky (boli tam už natvrdo).

export const siteInfo = {
  nazovWebu: "CiaoCasa",
  // Krátky popis firmy zobrazený v pätičke webu.
  popis: "Architektonické štúdio zamerané na rodinné domy, interiéry a výstavbu na mieru.",
  // Rok vzniku – zobrazuje sa v pätičke ("... od roku ...").
  rokVzniku: 2018,
  // Presný obchodný názov firmy (podľa obchodného registra) – použitý len
  // v právnych textoch (Ochrana osobných údajov / Podmienky), kde treba
  // firmu formálne identifikovať. Značka "CiaoCasa" ostáva nezmenená všade
  // inde na webe.
  obchodneMeno: "TS DESIGN COMPANY s. r. o.",
  // IČO overené cez verejný register (finstat.sk/57292621).
  ico: "57292621",
  // DIČ nie je vo verejných registroch k dispozícii (firma pravdepodobne
  // nie je platcom DPH, prípadne DIČ ešte nebolo pridelené/zverejnené) –
  // doplň podľa osvedčenia o registrácii z daňového úradu. Kým je prázdne,
  // riadok "DIČ" sa v pätičke vôbec nezobrazuje (pozri zobrazzenie.tsx).
  dic: "",
  adresaSK: "Estónska 2 (8. poschodie), 821 06 Bratislava",
  adresaCZ: "",
  telefon: "+421 904 530 619",
  email: "info@domyodarchitektov.sk",
  socialneSiete: [
    { nazov: "Facebook", odkaz: "https://facebook.com" },
    { nazov: "Instagram", odkaz: "https://instagram.com" },
  ],
};

// Plná formálna identifikácia firmy – použitá len v právnych textoch
// (Ochrana osobných údajov / Podmienky), kde sa dopĺňa za "{NAZOV}". Značka
// zostáva na prvom mieste, presný obchodný názov a IČO nasledujú v zátvorke.
export const pravnyNazov = `${siteInfo.nazovWebu} (${siteInfo.obchodneMeno}, IČO: ${siteInfo.ico})`;
