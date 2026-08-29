import type { Obrazok } from '@/lib/types/content'
import Img from '@/common/Img'

import { motion } from "framer-motion";

type Celok = {
    NazovOdboru:string
  fotka: Obrazok
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
      onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
      priblizujem:boolean
      textdlhy:string
}


export const KartaTyp  = ({NazovOdboru,fotka,onMouseEnter,onMouseLeave,priblizujem,textdlhy} : Celok) => {

    return <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="w-full h-[300px] bg-amber-700 flex   cursor-pointer relative overflow-hidden  rounded-[var(--radius)]  ">

  <Img src={fotka.src}
  alt={fotka.alt}
  fill
  className={`
    cursor-pointer
    object-cover transition-transform duration-300 ${
    priblizujem ? "scale-105" : "scale-100"
  }`}
  />


<motion.div
  animate={{
    height: priblizujem ? "fit-content" : "50px"
  }}
  transition={{ duration: 0.3 }}
className="absolute flex flex-col bottom-0 p-3 overflow-hidden">
  <h3 className="text-white text-lg md:text-xl font-light tracking-tight font-medium">{NazovOdboru}</h3>


<p  className={`
    ${priblizujem ? "opacity-100" : "opacity-0"}
    text-white text-sm mt-0.5
  `}>
     {textdlhy}
          </p>

</motion.div>

</div>
}
