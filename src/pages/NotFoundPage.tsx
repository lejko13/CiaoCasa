import { Link } from "react-router-dom";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const TEXT = {
  sk: { nadpis: "Stránka sa nenašla", text: "Skúsená adresa neexistuje alebo bola presunutá.", btn: "Späť domov" },
  en: { nadpis: "Page not found", text: "The page you're looking for doesn't exist or has moved.", btn: "Back home" },
  it: { nadpis: "Pagina non trovata", text: "La pagina cercata non esiste o è stata spostata.", btn: "Torna alla home" },
} as const;

export default function NotFoundPage() {
  const { locale } = useLocale();
  const obsah = TEXT[locale];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 p-4 text-center">
      <h1 className="text-6xl md:text-8xl tracking-tight">404</h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight">{obsah.nadpis}</h2>
        <p className="text-[var(--bielasvetla)] text-sm md:text-base max-w-sm">{obsah.text}</p>
      </div>
      <Link
        to="/"
        className="h-12 px-6 bg-[var(--biela)] rounded-[var(--radiusInsie)] flex items-center justify-center text-[var(--cierna)] text-sm"
      >
        {obsah.btn}
      </Link>
    </div>
  );
}
