import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  text: string;
  maxx: number;
  specialZnak?: string | null;
  index: number;
};

const Tusucisla = ({ text, maxx, specialZnak }: Props) => {
  const [cislo, setCislo] = useState<number>(0);
  const started = useRef(false);

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;
    if (started.current) return;

    started.current = true;

    const duration = 3000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);

      const value = Math.floor(progress * maxx);
      setCislo(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, maxx]);

  return (
    <div
      ref={ref}
      className=" text-white w-full h-fit flex flex-col gap-9 lg:gap-12 leading-none items-start pb-5"
    >
        <div

       className = {"border-b-1 w-full pb-3"

       }
       >


      <span className="text-[40px] md:text-[50px] lg:text-[70px] font-medium">
        {cislo}
        {specialZnak}
      </span>
        </div>

      <span className="text-[13px] md:text-[16px] text-[var(--bielasvetla)] ">
        {text}
      </span>
    </div>
  );
};

export default Tusucisla;
