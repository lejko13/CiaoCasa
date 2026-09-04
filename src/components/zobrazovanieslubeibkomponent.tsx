import { Link } from "react-router-dom";
import type { Obrazok } from '@/lib/types/content';
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import Img from "@/common/Img";



type Props = {
  nazov:string
  popis:string
  fotka:Obrazok
  index:number
  slug?:string
  comingSoon?:boolean
}

export default function ServicesSection({nazov,popis,fotka,slug,comingSoon} : Props) {
  const { t } = useLocale();
  return (
         <section className=" ">
      <div className=" mx-auto ">


        <div className="flex flex-col gap-8">

            <motion.div

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}

            >
              {(() => {
                const obsah = (
                  <>
                    <div className={`${comingSoon ? "" : "cursor-pointer"} aspect-[16/12] md:w-[40vw]   w-full rounded-[var(--radiusInsie)] overflow-hidden bg-secondary relative`}>
                      <Img
                        src={fotka.src}
                        alt={fotka.alt || nazov}
                        fill
                        className={`object-cover transition-transform duration-700 ${comingSoon ? "" : "group-hover:scale-105"}`}
                      />
                      {/* Jemné stmavenie fotky len pri službách "čoskoro", nech pôsobí menej výrazne/zvýraznené */}
                      {comingSoon && (
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-black/65 pointer-events-none"
                        />
                      )}
                    </div>

                    <div className=" h-full w-full flex flex-col gap-1   justify-between">

                      <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:opacity-80 transition-opacity flex items-center gap-3 flex-wrap">
                        {nazov}
                        {comingSoon && (
                          <span className="text-[11px] uppercase tracking-wide text-[var(--cierna)] bg-[var(--biela)] rounded-full px-2.5 py-1 font-sans">
                            {t.spolocne.coskoro}
                          </span>
                        )}
                      </h3>

                      <div className="w-full flex flex-col gap-2">
                        <p className=" text-sm leading-relaxed max-w-md text-[var(--bielasvetla)]">
                        {popis}
                        </p>

                        <div className="flex  justify-between gap-6 bg-[var(--cierna)] md:pt-[1vw] ">
                          <span className="text-xs text-[var(--sivaSvetlsie)] border border-neutral-800 rounded-full px-3 py-1 font-light">
                           {nazov}
                          </span>

                          {!comingSoon && (
                            <span className="inline-flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                              {t.sluzba.zistitViac}
                              {/* <ArrowRight className="w-4 h-4" /> */}
                            </span>
                          )}
                        </div>
                      </div>


                    </div>
                  </>
                );

                // Služba označená ako "čoskoro" ešte nemá vlastnú stránku
                // pripravenú na zverejnenie – riadok sa len zobrazí, ale
                // nedá sa naň kliknúť (žiadny odkaz).
                if (comingSoon) {
                  return (
                    <div className="group flex flex-col md:flex-row items-start gap-5 md:gap-8 cursor-default">
                      {obsah}
                    </div>
                  );
                }

                return (
                  <Link
                    to={slug ? `/sluzby/${slug}` : "/"}
                    className="group  flex flex-col  md:flex-row   items-start gap-5 md:gap-8"
                  >
                    {obsah}
                  </Link>
                );
              })()}

              <div className="pt-3 pb-6 md:pt-7">
                  <div className="w-full h-[1px] bg-neutral-800"></div>
              </div>

            </motion.div>

        </div>
      </div>




    </section>

  );
}
