import { motion } from "framer-motion";

import Kruzok from './kruzok'

type Props = {
  onClick?: () => void;
  podmienka: boolean | null;
  otazka: string;
  odpvene: string;
};

const Hybemkomponent = ({
  onClick,
  podmienka,
  otazka,
  odpvene,
}: Props) => {
  return (
    <motion.div
      initial={{ height: "66px" }}
      animate={{
        minHeight: "66px",
        height: "fit-content",
      }}
      onClick={onClick}
      className="w-full h-full border border-[var(--sivaTmava)]  text-white rounded-[var(--radius)] pl-6 pr-6 rounded-velky cursor-pointer overflow-hidden"
    >
      <motion.div
        initial={{ height: "66px" }}
        className="w-full h-full flex pt-5 pb-5items-center"
      >
        <span className="w-full h-fit md:text-[17px]">
          {otazka}
        </span>

        <div className="w-fit h-full">

          <Kruzok
            podmienka={podmienka}
            prisposobujem="w-[20px] h-[20px] bg-black text-[13px] border-none"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ height: "0px" }}
        animate={{
          height: podmienka ? "fit-content" : "0px",
        }}
        transition={{ duration: 0.3 }}
        className="leading-snug overflow-hidden"
      >
        <span className="text-[13px] pb-4 flex text-[var(--bielasvetla)] md:text-[15px]">
          {odpvene}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Hybemkomponent;
