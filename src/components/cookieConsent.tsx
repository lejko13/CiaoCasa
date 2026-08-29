import { useState, useSyncExternalStore } from "react"
import { Link } from "react-router-dom"
import { useLocale } from "@/lib/i18n/LocaleProvider"

const KLUC_ULOZISKA = "timothy-cookie-suhlas";

type Volba = "prijate" | "odmietnute";

// Banner so súhlasom s cookies. Voľba sa ukladá do localStorage v prehliadači
// návštevníka, takže sa banner druhýkrát nezobrazí, kým si prehliadač/zariadenie
// nezmení (alebo si dáta nevymaže). Toto je čisto funkčný súhlas na strane
// klienta – ak web v budúcnosti pridá analytické/marketingové cookies, práve
// tu (podľa `volba`) je miesto, kde ich podmienene načítať.
//
// Počiatočná hodnota sa číta cez useSyncExternalStore (bezpečné pri prvom
// vykreslení aj pre viac otvorených kariet), zmena voľby (klik na tlačidlo)
// sa potom drží v lokálnom stave – to je bežný event handler, nie efekt,
// takže nič nekoliduje s pravidlom "žiadny setState synchrónne v efekte".

function citajUlozenuVolbu(): Volba | null {
  try {
    return window.localStorage.getItem(KLUC_ULOZISKA) as Volba | null;
  } catch {
    return null;
  }
}

function prihlasOdber(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function serverovaHodnota(): Volba | null {
  return null;
}

export default function CookieConsent() {
  const { t } = useLocale();
  const volbaZUlozista = useSyncExternalStore(
    prihlasOdber,
    citajUlozenuVolbu,
    serverovaHodnota
  );
  const [lokalnaVolba, setLokalnaVolba] = useState<Volba | null>(null);

  const volba = lokalnaVolba ?? volbaZUlozista;

  const rozhodnut = (nova: Volba) => {
    try {
      window.localStorage.setItem(KLUC_ULOZISKA, nova);
    } catch {
      // localStorage nemusí byť dostupný (napr. súkromný režim) – voľba
      // potom platí len pre aktuálnu návštevu vďaka lokálnemu stavu nižšie.
    }
    setLokalnaVolba(nova);
  };

  if (volba) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[90]">
      <div className="bg-[var(--cierna)] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-5 flex flex-col gap-4 shadow-2xl">
        <p className="text-[var(--bielasvetla)] text-sm leading-relaxed">
          {t.cookie.text}{" "}
          <Link to="/ochrana-osobnych-udajov" className="underline underline-offset-2 hover:text-white">
            {t.cookie.odkaz}
          </Link>
          .
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => rozhodnut("odmietnute")}
            className="flex-1 h-11 rounded-[var(--radiusInsie)] border border-[var(--sivaTmava)] text-white text-sm cursor-pointer hover:border-neutral-400 transition-colors"
          >
            {t.cookie.odmietnut}
          </button>
          <button
            type="button"
            onClick={() => rozhodnut("prijate")}
            className="flex-1 h-11 rounded-[var(--radiusInsie)] bg-[var(--biela)] text-[var(--cierna)] text-sm cursor-pointer"
          >
            {t.cookie.prijat}
          </button>
        </div>
      </div>
    </div>
  );
}
