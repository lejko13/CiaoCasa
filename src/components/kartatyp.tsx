import type { Obrazok } from '@/lib/types/content'
import Img from '@/common/Img'

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";

type Celok = {
    NazovOdboru:string
  fotka: Obrazok
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
      priblizujem:boolean
      textdlhy:string
      comingSoon?:boolean
}


export const KartaTyp  = ({NazovOdboru,fotka,onMouseEnter,onMouseLeave,priblizujem,textdlhy,comingSoon} : Celok) => {
  const { t } = useLocale();

    return <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`w-full h-[300px] bg-amber-700 flex relative overflow-hidden rounded-[var(--radius)] ${
      comingSoon ? "cursor-default" : "cursor-pointer"
    }`}>

  <Img src={fotka.src}
  alt={fotka.alt}
  fill
  className={`
    ${comingSoon ? "" : "cursor-pointer"}
    object-cover transition-transform duration-300 ${
    priblizujem ? "scale-105" : "scale-100"
  }`}
  />

{/* Stmavenie spodnej časti fotky, aby bol text vždy dobre čitateľný */}
<div
  aria-hidden
  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"
/>

{/* Extra stmavenie navyše len pri službách "čoskoro" */}
{comingSoon && (
  <div
    aria-hidden
    className="absolute inset-0 bg-black/60 pointer-events-none"
  />
)}

{comingSoon && (
  <span className="absolute top-3 right-3 z-10 text-[11px] uppercase tracking-wide text-white bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
    {t.spolocne.coskoro}
  </span>
)}

<motion.div
  animate={{
    height: priblizujem ? "fit-content" : "50px"
  }}
  transition={{ duration: 0.3 }}
className="absolute flex flex-col bottom-0 p-3 overflow-hidden">
  <h3 className="text-white text-lg md:text-xl font-light tracking-tight font-medium [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">{NazovOdboru}</h3>


<p  className={`
    ${priblizujem ? "opacity-100" : "opacity-0"}
    text-white text-sm mt-0.5 [text-shadow:0_1px_3px_rgba(0,0,0,0.7)]
  `}>
     {textdlhy}
          </p>

</motion.div>

</div>
}
