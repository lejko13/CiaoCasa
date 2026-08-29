import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"
import { useLocale } from "@/lib/i18n/LocaleProvider"

type Props = {
  email: string;
};

type Stav = "idle" | "chyba" | "odoslane";
type ChybaKod = "vyplnte" | "email" | null;

// Kontaktný formulár. Táto stránka je čisto statická (bez vlastného
// backendu), takže formulár po odoslaní pripraví e-mail a otvorí ho v
// predvolenom e-mailovom klientovi návštevníka (cez "mailto:" odkaz) – nič sa
// neposiela cez internet zo servera, takže to funguje úplne bez nastavovania.

export default function KontaktFormular({ email }: Props) {
  const { t } = useLocale();
  const [meno, setMeno] = useState("");
  const [emailOdosielatela, setEmailOdosielatela] = useState("");
  const [telefon, setTelefon] = useState("");
  const [sprava, setSprava] = useState("");
  const [stav, setStav] = useState<Stav>("idle");
  const [chybaKod, setChybaKod] = useState<ChybaKod>(null);

  const validnyEmail = (hodnota: string) => /\S+@\S+\.\S+/.test(hodnota);

  const odoslat = (e: FormEvent) => {
    e.preventDefault();

    if (!meno.trim() || !emailOdosielatela.trim() || !sprava.trim()) {
      setStav("chyba");
      setChybaKod("vyplnte");
      return;
    }

    if (!validnyEmail(emailOdosielatela)) {
      setStav("chyba");
      setChybaKod("email");
      return;
    }

    const predmet = `Správa z webu od ${meno}`;
    const telo = [
      `Meno: ${meno}`,
      `E-mail: ${emailOdosielatela}`,
      telefon.trim() ? `Telefón: ${telefon}` : null,
      "",
      sprava,
    ]
      .filter(Boolean)
      .join("\n");

    const odkaz = `mailto:${email}?subject=${encodeURIComponent(
      predmet
    )}&body=${encodeURIComponent(telo)}`;

    window.location.href = odkaz;
    setStav("odoslane");
  };

  return (
    <form
      onSubmit={odoslat}
      className="w-full max-w-2xl flex flex-col gap-4 md:gap-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="meno" className="text-[11px] uppercase tracking-widest text-white/40">
            {t.kontakt.menoLabel}
          </label>
          <input
            id="meno"
            type="text"
            value={meno}
            onChange={(e) => setMeno(e.target.value)}
            placeholder={t.kontakt.menoPlaceholder}
            className="h-12 px-4 rounded-[var(--radiusInsie)] bg-white/[0.03] border border-[var(--sivaTmava)] text-white text-sm placeholder:text-white/30 outline-none focus:border-neutral-400 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[11px] uppercase tracking-widest text-white/40">
            {t.kontakt.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            value={emailOdosielatela}
            onChange={(e) => setEmailOdosielatela(e.target.value)}
            placeholder={t.kontakt.emailPlaceholder}
            className="h-12 px-4 rounded-[var(--radiusInsie)] bg-white/[0.03] border border-[var(--sivaTmava)] text-white text-sm placeholder:text-white/30 outline-none focus:border-neutral-400 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="telefon" className="text-[11px] uppercase tracking-widest text-white/40">
          {t.kontakt.telefonLabel}
        </label>
        <input
          id="telefon"
          type="tel"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          placeholder={t.kontakt.telefonPlaceholder}
          className="h-12 px-4 rounded-[var(--radiusInsie)] bg-white/[0.03] border border-[var(--sivaTmava)] text-white text-sm placeholder:text-white/30 outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="sprava" className="text-[11px] uppercase tracking-widest text-white/40">
          {t.kontakt.spravaLabel}
        </label>
        <textarea
          id="sprava"
          value={sprava}
          onChange={(e) => setSprava(e.target.value)}
          placeholder={t.kontakt.spravaPlaceholder}
          rows={5}
          className="px-4 py-3 rounded-[var(--radiusInsie)] bg-white/[0.03] border border-[var(--sivaTmava)] text-white text-sm placeholder:text-white/30 outline-none focus:border-neutral-400 transition-colors resize-none"
        />
      </div>

      {stav === "chyba" && (
        <p className="text-red-400 text-sm">
          {chybaKod === "email" ? t.kontakt.chybaEmail : t.kontakt.chybaVyplnte}
        </p>
      )}

      {stav === "odoslane" && (
        <p className="text-[var(--bielasvetla)] text-sm">
          {t.kontakt.uspech}{" "}
          <a href={`mailto:${email}`} className="underline underline-offset-2">
            {email}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        className="w-fit h-12 px-6 mt-1 bg-[var(--biela)] rounded-[var(--radiusInsie)] inline-flex items-center gap-2 justify-center text-[var(--cierna)] text-sm cursor-pointer"
      >
        {t.kontakt.odoslat}
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
