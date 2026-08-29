import { useState } from "react";

import { ChevronDown } from "lucide-react";
type Props = {
  prisposobujem?: string;
  podmienka: boolean | null;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export default function Kruzok({
  prisposobujem,
  podmienka,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = () => {
    if (disabled) return;

    setDisabled(true);
    onClick?.(); // safe call

    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        transition-transform duration-300
        ${podmienka ? "rotate-0" : "rotate-180"}
        w-8 h-8 rounded-full text-whiteCustom
        border border-sivaTmava
        flex justify-center items-center
        cursor-pointer bg-amber-300
        ${prisposobujem ?? ""}
      `}
    >
      <span className={`flex justify-center items-center `}>
  <ChevronDown
    className={`w-4 h-4 transition-transform  text-white duration-300 `}
  />
</span>
    </div>
  );
}
