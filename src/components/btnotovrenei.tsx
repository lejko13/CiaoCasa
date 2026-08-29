import { motion } from "framer-motion";

import { useApp } from "@/providers/AppProvider";

import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"


type Sluzba = {
  _id: string;
  Nazov: string;
  slug?: string;
};

type Props = {
        text:string;

        onClick:() => void
        opacity:boolean;
         referencia?: Sluzba[];
        ano:boolean
        otvaram:boolean
        link?: string;
        onNavigate?: () => void;
}




export function BtnOtvarac({text,onClick,opacity,referencia,ano,link,onNavigate} : Props) {
  const { setOkno } = useApp();

  // Položky bez rozbaľovacieho zoznamu (napr. "Projekty") nemajú čo
  // prepínať – ide o priamy odkaz, takže sa musia správať ako Link, inak by
  // na mobile/tablete tapnutie nič neurobilo.
  if (!opacity) {
    return (
      <Link
        to={link || "/"}
        onClick={() => onNavigate?.()}
        className="flex justify-between w-full items-center h-12"
      >
        <span>{text}</span>
      </Link>
    );
  }

    return (
<motion.div
    animate={{ height:"fit-content"}}
   className=' items-center flex flex-col'
onClick={() => {
  if (opacity === true) {
    onClick();
    setOkno(prev => !prev)
    return
  }
}}
//    initial={{ height: 64 }}
//      animate={{ height:64}}

>
    <div className={`flex justify-between w-full  items-center h-12`}>
        <span>  {text}</span>
        <motion.div
          animate={{ rotate: ano ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className={`
            w-fit h-fit
            ${
        opacity === true ? "opacity-100" : "opacity-0"
        }`}
        ><ChevronDown/>
        </motion.div>
      </div>


{opacity && <motion.div
  initial={{ height: 0 }}
  animate={{ height:  ano ? "fit-content" : "0px" }}
 className={` w-full overflow-hidden grid  text-[var(--bielasvetla)] grid-rows-[auto] gap-1 ${ano ? "pb-3" : "pb-0"}`}
>
  {referencia?.map((item,i) => {
    return(
<Link
  key = {i}
  to={item.slug ? `/sluzby/${item.slug}` : "/"}
  className='h-8 flex items-center pl-3'
  onClick={(e) => e.stopPropagation()}
>{item.Nazov}</Link>
    )

  })}
</motion.div> }



</motion.div>

    )


}
