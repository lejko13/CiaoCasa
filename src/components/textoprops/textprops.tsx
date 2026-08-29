import type { SekciaText } from "@/lib/types/content";

type Props = {
  SluzbyUvodna:SekciaText[]
}

export default function ProjectsHeader({SluzbyUvodna} : Props ) {
  const polozka = SluzbyUvodna?.[0];

  return (
     <div className=" pt-1 gap-2  md:gap-8  flex flex-col  items-center  md:flex-row  mb-3 md:mb-20 pb-2 md:pb-0 ">

        <div className="pt-1  w-[40vw] flex justify-center md:justify-start ">
              <div className="flex items-center gap-2.5  w-fit   w-[200px]">
<span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-[pulse_2s_ease-in-out_infinite] inline-block" />


        <span className="cursor-pointer text-[var(--bielasvetla)]  whitespace-nowrap text-sm tracking-widest uppercase font-light">
          {polozka?.BtnPocitactext}
        </span>
      </div>

        </div>

        <div className="w-full h-fit  flex justify-center  md:justify-start">
            <h2 className="text-white  font-normal  w-fit  text-center md:text-start text-3xl md:text-[2.75rem] leading-tight font-light tracking-tight">
               {polozka?.Hlavnytext}

            </h2>

        </div>


    </div>
  );
}
