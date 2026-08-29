import { motion } from "framer-motion";

import Tusucisla from './pocitanie'

import type { Obrazok } from '@/lib/types/content'
import MySwiper from './posunobrazok'

type Ukazka = {
  cislo: number;
  popis: string;
  specialnyZnak?: string | null;
};

type Obrazte = {
  Fotka:Obrazok
}

type Props = {
    data:{ UvodnyText?: string; NizzsieText?: string }[]
    data2:Ukazka[]
    pozadiedata:Obrazte[]
}
export default  function Uvod({data,data2,pozadiedata} : Props) {
  const uvodneData = data?.[0];

  return (
    <div className=" w-full h-full  ">

<div className="absolute  h-[700px] md:h-screen  flex  z-0 inset-x-0 top-0">
  <MySwiper
  items = {pozadiedata}
  ></MySwiper>

</div>


<div
  className="w-full h-[700px] md:h-screen absolute inset-x-0"
  style={{
    background:
      "linear-gradient(to bottom, black 0%, transparent 0%, transparent 10%, black 100%)",
  }}
></div>

         <div className="w-full h-full    flex items-end  md:items-center lg:items-center  ">


        <div className="   gap-15 lg:gap-22

        h-full  relative  flex flex-col  justify-end lg:justify-center  mx-auto px-3 md:px-0 w-full lg:gap-14">
        {/* Heading */}

        <div className="flex flex-col  gap-6  lg:pt-[110px] ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex items-center justify-center"
        >
          {/* <h1 className="font-heading text-4xl  md:text-6xl lg:text-8xl text-foreground leading-[1.1] tracking-tight">
            Navrhneme a postavíme
            <br />
            váš vysnívaný dom
          </h1> */}
          <h1 className="max-w-[300px]    text-4xl  md:text-6xl  text-white md:max-w-[800px] lg:text-7xl  tracking-tight">
           {uvodneData?.UvodnyText}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
          max-w-[300px]  text-lg  text-center    text-[var(--bielasvetla)]  md:max-w-xl mx-auto lg:text-xl "
        >
         {uvodneData?.NizzsieText}
        </motion.p>
        </div>

        {/* Stats */}
        <motion.div

          className="hidden md:grid   grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6  w-full"
        >

         {data2.map((polozka, i) => (
          <Tusucisla
            key={i}
            index = {i}
            maxx = {polozka.cislo}
            text = {polozka.popis}
            specialZnak = {polozka.specialnyZnak}

          />
        ))}
        </motion.div>
      </div>




      </div>



    </div>
  );
}
