import { Link } from "react-router-dom";
import FooterMain from "./zobrazzenie";
import type { FooterObsah } from "@/lib/types/content";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import Img from "@/common/Img";

type Props = {
  data: FooterObsah[];
};

export default function Footer2({ data }: Props) {
  const polozka = data?.[0];
  const { t } = useLocale();

  return (
    <>
      <div className="w-full min-h-[700px] bg-black relative p-4 md:pt-5 flex flex-col justify-center items-center pb-22 md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

        {polozka?.fotka && (
        <Img
          src={polozka.fotka.src}
          alt={polozka.fotka.alt}
          fill
          className="object-cover"
        />
        )}
        <div
      style={{
  background: "linear-gradient(to bottom, black 20%, transparent 50%, black 100%)",
}}
        className="w-full absolute h-full inset-0"></div>

        <div className="relative w-full flex flex-col items-center text-center gap-6 px-4">

            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl tracking-tight max-w-2xl">
              {t.footerCta.hlavny}
            </h2>

            <p className="text-[var(--bielasvetla)] text-sm md:text-base max-w-md">
              {t.footerCta.maly}
            </p>

            <Link
              to="/kontakt"
              className="mt-2 h-12 px-6 bg-[var(--biela)] rounded-[var(--radiusInsie)] flex items-center justify-center text-[var(--cierna)] text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t.footerCta.btn}
            </Link>

        </div>

      </div>

      <div className="w-full h-fit bg-black">
        <FooterMain />
      </div>
    </>
  );
}
