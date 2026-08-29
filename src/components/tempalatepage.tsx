import type { Obrazok } from '@/lib/types/content'
import Img from '@/common/Img'

type Jeden = {

Vrchnytext:string
Spodnytext:string
Fotka?:Obrazok


}

type Props = {
  children?: React.ReactNode;
  text:Jeden[]

};
import { motion } from "framer-motion";
export default function Template({ children,text,}: Props) {

  const polozka = text?.[0];

  return (
    <>
    <div className="h-[700px] relative overflow-hidden md:h-screen w-[full] bg-[var(--cierna)] flex p-4 md:pt-5  md:px-[var(--stred)] lg:px-[var(--pcokrej)]">

      {polozka?.Fotka && (
      <Img
src={polozka.Fotka.src}
  alt={polozka.Fotka.alt}
  fill
  priority
  className="object-cover"
/>
      )}

      <div
       style={{
    background:
      "linear-gradient(to bottom, black 0%, transparent 0%, transparent 10%, black 100%)",
  }}
      className="absolute w-full h-full inset-0"></div>
<div className="w-full h-full relative flex items-end md:items-center justify-center ">

   <div className="flex flex-col  gap-6  lg:pt-[110px] ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center flex items-center justify-center"
        >
          <h1 className="max-w-[300px]    text-4xl  md:text-6xl  text-white md:max-w-[800px] lg:text-7xl  tracking-tight">
         {polozka?.Vrchnytext}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
          max-w-[300px]  text-lg  text-center    text-[var(--bielasvetla)]  md:max-w-xl mx-auto lg:text-xl "
        >
        {polozka?.Spodnytext}
        </motion.p>
        </div>

</div>



    </div>
    <div className="w-full h-fit">
                {children}

    </div>

    </>
  );
}
