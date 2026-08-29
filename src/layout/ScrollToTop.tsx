import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pri každej zmene stránky (URL) okamžite vyskroluje na úplný vrch, aby sa
// nová stránka vždy zobrazila odznova zhora (žiadne "prilepené" scrollovanie
// z predchádzajúcej stránky).
//
// Súčasne (nižšie) vykreslí tenký pásik hore, ktorý sa pri každej zmene
// `pathname` remountne (vďaka `key={pathname}`) a odohrá čisto CSS animáciu
// (`route-progress` v index.css) – vizuálne to pôsobí ako krátke "načítanie"
// a robí prechod medzi stránkami konzistentný, bez potreby akéhokoľvek
// React stavu.

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      key={pathname}
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-white origin-left [animation:route-progress_0.5s_ease-out_forwards]"
    />
  );
}
