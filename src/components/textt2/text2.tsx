import { ChevronLeft, ChevronRight } from "lucide-react";
import { useApp } from "@/providers/AppProvider";
import type { SekciaText } from "@/lib/types/content";

type Props = {
  projektyuvodna:SekciaText[]
};



export default function ProjectsHeader({ projektyuvodna}: Props) {

  const { swiperRef } = useApp();
  const polozka = projektyuvodna?.[0];

  return (
    <div className=" gap-2 pt-1   grid grid-cols-1 md:flex  md:gap-8 mb-3 md:mb-20 items-start">

        <div className="pt-1  flex justify-center md:justify-start md:w-[40vw]">
              <div className="flex items-center gap-2.5  w-fit ">
<span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-[pulse_2s_ease-in-out_infinite] inline-block" />


        <span className="cursor-pointer text-[var(--bielasvetla)] text-sm tracking-widest uppercase font-light">
          {polozka?.BtnPocitactext}
        </span>
      </div>

        </div>
        {/* mobil */}

        <div className="w-full h-fit  flex justify-center md:justify-start  md:w-full md:hidden">
            <h2 className="text-white  w-fit   text-center md:text-start text-3xl md:text-[2.75rem] leading-tight font-light tracking-tight">
               {polozka?.Hlavnytext}

            </h2>

        </div>


      <div className="flex flex-col items-start md:items-end gap-5  md:hidden ">
          <p className="

          text-[var(--bielasvetla)] hidden lg:block w-fit mx-auto md:mx-0 text-sm md:text-base leading-relaxed max-w-xs text-center md:text-left">
              {polozka?.Malytext}
          </p>



        <div className="flex gap-3 hidden md:flex items-end justify-end  w-full">
          <button
 onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
             onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
       {/* mobil */}


       <div className="w-full  h-fit flex flex-row items-start hidden md:flex gap-7 ">

        <div className="">
          <h2 className="text-white font-normal  w-fit   text-center md:text-start text-3xl md:text-[2.75rem] leading-tight font-light tracking-tight">
               {polozka?.Hlavnytext}

            </h2>


        </div>

        <div className="0 flex flex-col gap-5">
          <p className="

          text-[var(--bielasvetla)] hidden lg:block w-fit mx-auto md:mx-0 text-sm md:text-base leading-relaxed max-w-xs text-center md:text-left">
              {polozka?.Malytext}
          </p>

           <div className="flex gap-3 hidden md:flex items-end justify-end  w-full">
          <button
 onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
             onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-neutral-400 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>


        </div>

       </div>




    </div>
  );
}
