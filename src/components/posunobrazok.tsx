import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Img from "@/common/Img";
import type { Obrazok } from "@/lib/types/content";

type Projekt = {
  Fotka: Obrazok;
};

type Props = {
  items: Projekt[];
};

export default function MySwiper({ items }: Props) {
  return (
    <Swiper
      className="w-full h-full bg-black"
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1000} // 👈 plynulosť prechodu
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full flex items-center justify-center">
            <Img
              src={item.Fotka.src}
              alt={item.Fotka.alt}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
