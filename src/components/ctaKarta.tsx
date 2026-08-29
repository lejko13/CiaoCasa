import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Props = {
  nadpis: string;
  text?: string;
  btnText?: string;
  btnHref?: string;
};

// Veľká zvýraznená karta s výzvou na akciu (napr. na konci stránky služby).

export default function CtaKarta({
  nadpis,
  text,
  btnText = "Mám záujem",
  btnHref = "/kontakt",
}: Props) {
  return (
    <div className="w-full bg-white/[0.03] border border-[var(--sivaTmava)] rounded-[var(--radius)] p-8 md:p-16 flex flex-col items-center text-center gap-5">
      <h2 className="text-white text-3xl md:text-5xl font-light tracking-tight max-w-2xl">
        {nadpis}
      </h2>

      {text && (
        <p className="text-[var(--bielasvetla)] text-sm md:text-base max-w-xl">
          {text}
        </p>
      )}

      <Link
        to={btnHref}
        className="mt-2 h-12 px-6 bg-[var(--biela)] rounded-full inline-flex items-center gap-2 justify-center text-[var(--cierna)] text-sm"
      >
        {btnText}
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
