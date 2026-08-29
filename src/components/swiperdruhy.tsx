import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { useApp } from "@/providers/AppProvider";
import type { Projekt } from "@/lib/types/content";


import ProjectCardCenter from './karta2lenkarta/karta2lenkarta'
type Props = {
  pozadiedata: Projekt[];
};

export default function MySwiper({ pozadiedata }: Props) {

const { swiperRef } = useApp();

  if (!pozadiedata || pozadiedata.length === 0) return null;

  return (
   <Swiper

 modules={[Autoplay, Mousewheel]}
mousewheel={{
  forceToAxis: true,
  sensitivity: 1,
}}

  slidesPerView={3}
  spaceBetween={0}



  grabCursor={true}
  allowTouchMove={true}
  simulateTouch={true}



    breakpoints={{
    0: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 3,
    },

  }}
centeredSlides={true}

  loop={true}
  watchSlidesProgress={true}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
>
  {pozadiedata.map((item, i) => (
    <SwiperSlide key={i} className=" flex justify-center">
      {({ isActive }) => (
        <div
          className={`w-full    transition-all duration-500 ${
            isActive
              ? "scale-100 opacity-100 z-10"
              : "scale-85 opacity-60"
          }`}
        >

         <ProjectCardCenter
            project={{
                image: item.Fotka.src,
                title: item.NazovProjektu,
                year: item.Rok,
                tags:item.Typ,
                    slug: item.slug?.current
            }}

            ></ProjectCardCenter>




        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>
  );
}
