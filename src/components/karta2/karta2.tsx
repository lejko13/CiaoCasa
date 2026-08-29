import { ChevronLeft, ChevronRight } from "lucide-react";

import ProjectsHeader from '../textt2/text2'

import { useApp } from "@/providers/AppProvider";
import MySwiper from '../swiperdruhy'
import type { Projekt, SekciaText } from '@/lib/types/content'

type Props = {
  pozadiedata:Projekt[],
  projektyuvodna:SekciaText[]
}


export default function ExclusiveProjects({pozadiedata,projektyuvodna} : Props) {

  const { swiperRef } = useApp();


  return (
    <div className="w-full  h-fit flex flex-col">
        <ProjectsHeader
        projektyuvodna = {projektyuvodna}
        ></ProjectsHeader>

        <div className="w-full">
            <MySwiper
            pozadiedata = {pozadiedata}
            ></MySwiper>



        </div>


        <div className="mt-7 flex gap-3 flex md:hidden items-end justify-end  w-full ">
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


  );
}
