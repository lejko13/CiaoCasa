import { Link } from "react-router-dom";
import { siteInfo } from "@/data/siteInfo";
import { sluzby } from "@/data/sluzby";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { POPIS_FIRMY } from "@/data/i18n/siteInfo";

export default function FooterMain() {
  const { t, locale } = useLocale();
  const rok = new Date().getFullYear();
  // Odkazy na služby vedú na svoje stránky /sluzby/<slug> a preberajú názov
  // priamo z data/sluzby.ts (nič sa tu neduplikuje). "Pre firmy" a "O nás" už
  // majú vlastné podstránky.
  const navLinks = [
    { label: t.spolocne.domov, href: "/" },
    { label: t.header.projekty, href: "/projekty" },
    ...sluzby.map((s) => ({ label: s.Nazov, href: `/sluzby/${s.slug}` })),
    { label: t.footer.prefirmy, href: "/pre-firmy" },
    { label: t.footer.onas, href: "/o-nas" },
    { label: t.footer.kontaktNav, href: "/kontakt" },
  ];

  return (
    <footer className="bg-[var(--cierna)] text-white">
      {/* Horná časť */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 md:pt-20 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {/* O firme */}
            <div className="sm:col-span-2 md:col-span-1 flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/logo.png"
                  alt={siteInfo.nazovWebu}
                  className="h-8 w-auto object-contain"
                />
              </div>

              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                {POPIS_FIRMY[locale]}
                {siteInfo.rokVzniku ? ` ${t.footer.posobimeOdRoku} ${siteInfo.rokVzniku}.` : ""}
              </p>

              <p className="text-xs text-white/40 leading-relaxed">
                {t.footer.icoLabel}: {siteInfo.ico}
                {siteInfo.dic && (
                  <>
                    <br />
                    {t.footer.dicLabel}: {siteInfo.dic}
                  </>
                )}
              </p>
            </div>

            {/* Navigácia */}
            <nav className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                {t.footer.navigacia}
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Kontakt */}
            <div className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                {t.footer.kontakt}
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteInfo.email}
                </a>
                <a
                  href={`tel:${siteInfo.telefon.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteInfo.telefon}
                </a>
                <p className="text-white/70 leading-relaxed">{siteInfo.adresaSK}</p>
              </div>
            </div>

            {/* Sociálne siete */}
            <div className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-widest text-white/40">
                {t.footer.socialneSiete}
              </p>
              <div className="flex flex-col gap-2">
                {siteInfo.socialneSiete.map((odkaz, i) => (
                  <a
                    key={i}
                    href={odkaz.odkaz}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {odkaz.nazov}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spodná lišta – copyright + právne odkazy */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto border-t border-white/10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {rok} {siteInfo.nazovWebu}. {t.footer.copyright}
          </p>
          <div className="flex gap-5">
            <Link
              to="/ochrana-osobnych-udajov"
              className="text-xs text-white/40 hover:text-white transition-colors underline underline-offset-2"
            >
              {t.footer.ochranaOsobnychUdajov}
            </Link>
            <Link
              to="/podmienky"
              className="text-xs text-white/40 hover:text-white transition-colors underline underline-offset-2"
            >
              {t.footer.podmienky}
            </Link>
          </div>
        </div>
      </div>

      {/* Veľký brand nápis */}
      <div className="px-6 md:px-12 lg:px-20 pb-8 pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-display font-bold text-white/90 leading-[0.9] tracking-tight truncate">
            {siteInfo.nazovWebu}
          </div>
        </div>
      </div>
    </footer>
  );
}
