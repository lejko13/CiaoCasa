import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();

  // 🔥 dôležité: useLayoutEffect + bez smooth
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
