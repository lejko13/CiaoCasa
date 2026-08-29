"use client";

import { createContext, useContext, useState, useSyncExternalStore } from "react";
import { DEFAULT_LOCALE, jeLocale, type Locale } from "./locales";
import { UI, type UiSlovnik } from "./ui";

const KLUC_ULOZISKA = "timothy-jazyk";

// Poskytuje zvolený jazyk webu (sk/en/it) a k nemu prislúchajúci slovník
// textov rozhrania (`t`) hocikomu v strome komponentov. Voľba jazyka sa
// ukladá do localStorage, takže si ju prehliadač návštevníka pamätá aj
// nabudúce – rovnaký princíp ako pri súhlase s cookies (CookieConsent).
//
// Počiatočná hodnota sa číta cez useSyncExternalStore (bezpečné pre SSR),
// zmena jazyka (klik v LanguageSwitcher) sa potom drží v lokálnom stave –
// bežný event handler, nie efekt, takže to nekoliduje s pravidlom
// "žiadny setState synchrónne v efekte" (react-hooks/set-state-in-effect).

function citajUlozenyJazyk(): Locale | null {
  try {
    const hodnota = window.localStorage.getItem(KLUC_ULOZISKA);
    return hodnota && jeLocale(hodnota) ? hodnota : null;
  } catch {
    return null;
  }
}

function prihlasOdber(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function serverovaHodnota(): Locale | null {
  return null;
}

type LocaleContextType = {
  locale: Locale;
  setLocale: (novy: Locale) => void;
  t: UiSlovnik;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const jazykZUlozista = useSyncExternalStore(
    prihlasOdber,
    citajUlozenyJazyk,
    serverovaHodnota
  );
  const [lokalnyJazyk, setLokalnyJazyk] = useState<Locale | null>(null);

  const locale = lokalnyJazyk ?? jazykZUlozista ?? DEFAULT_LOCALE;

  const setLocale = (novy: Locale) => {
    try {
      window.localStorage.setItem(KLUC_ULOZISKA, novy);
    } catch {
      // localStorage nemusí byť dostupný (napr. súkromný režim) – voľba
      // potom platí len pre aktuálnu návštevu vďaka lokálnemu stavu nižšie.
    }
    setLokalnyJazyk(novy);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: UI[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
