import { AnimatePresence, motion } from "motion/react";
import type { FC, PropsWithChildren } from "react";
import { useLocation } from "react-router";

export const AnimatedPage: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
