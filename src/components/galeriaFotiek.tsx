import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { Obrazok } from "@/lib/types/content"
import Img from "@/common/Img"

type Props = {
  obrazky: Obrazok[];
  nazov: string;
};

// Galéria fotiek na detaile projektu / služby. Prvá fotka je zobrazená
// veľká, ostatné v mriežke pod ňou. Kliknutím na ktorúkoľvek fotku sa otvorí
// fullscreen náhľad so šípkami na prechádzanie a klávesovými skratkami
// (šípky, Escape).

export default function GaleriaFotiek({ obrazky, nazov }: Props) {
  const [otvoreny, setOtvoreny] = useState<number | null>(null);

  useEffect(() => {
    if (otvoreny === null) return;

    const naStlacenie = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOtvoreny(null);
      if (e.key === "ArrowRight") {
        setOtvoreny((prev) => (prev === null ? null : (prev + 1) % obrazky.length));
      }
      if (e.key === "ArrowLeft") {
        setOtvoreny((prev) =>
          prev === null ? null : (prev - 1 + obrazky.length) % obrazky.length
        );
      }
    };

    document.addEventListener("keydown", naStlacenie);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", naStlacenie);
      document.body.style.overflow = "";
    };
  }, [otvoreny, obrazky.length]);

  if (!obrazky || obrazky.length === 0) {
    return null;
  }

  const [prva, ...ostatne] = obrazky;

  return (
    <>
      <div className="w-full h-full flex flex-col gap-4">
        <button
          type="button"
          onClick={() => setOtvoreny(0)}
          className="w-full aspect-[16/11] relative rounded-[var(--radiusInsie)] overflow-hidden cursor-pointer group"
        >
          <Img
            src={prva.src}
            alt={prva.alt || nazov}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {ostatne.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ostatne.map((obrazok, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setOtvoreny(i + 1)}
                className="w-full aspect-[4/3] relative rounded-[var(--radiusInsie)] overflow-hidden cursor-pointer group"
              >
                <Img
                  src={obrazok.src}
                  alt={obrazok.alt || nazov}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {otvoreny !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[95] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setOtvoreny(null)}
          >
            <button
              type="button"
              onClick={() => setOtvoreny(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-11 h-11 rounded-full border border-[var(--sivaTmava)] flex items-center justify-center text-white hover:border-neutral-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="absolute top-4 left-4 md:top-8 md:left-8 text-white/50 text-sm">
              {otvoreny + 1} / {obrazky.length}
            </span>

            {obrazky.length > 1 && (
              <>
                {/* desktop: šípky pri okrajoch */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOtvoreny((prev) =>
                      prev === null ? null : (prev - 1 + obrazky.length) % obrazky.length
                    );
                  }}
                  className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[var(--sivaTmava)] items-center justify-center text-white hover:border-neutral-400 cursor-pointer bg-black/40"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOtvoreny((prev) => (prev === null ? null : (prev + 1) % obrazky.length));
                  }}
                  className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-[var(--sivaTmava)] items-center justify-center text-white hover:border-neutral-400 cursor-pointer bg-black/40"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* mobil: šípky pri sebe, pod fotkou – ľahko dosiahnuteľné palcom */}
                <div
                  className="flex md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 gap-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOtvoreny((prev) =>
                        prev === null ? null : (prev - 1 + obrazky.length) % obrazky.length
                      )
                    }
                    className="w-12 h-12 rounded-full border border-[var(--sivaTmava)] flex items-center justify-center text-white bg-black/60 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setOtvoreny((prev) => (prev === null ? null : (prev + 1) % obrazky.length))
                    }
                    className="w-12 h-12 rounded-full border border-[var(--sivaTmava)] flex items-center justify-center text-white bg-black/60 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </>
            )}

            <motion.div
              key={otvoreny}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-5xl max-h-[65vh] md:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Img
                src={obrazky[otvoreny].src}
                alt={obrazky[otvoreny].alt || nazov}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
