import * as React from "react";
import { motion } from "framer-motion";

export const SlideOutHeight: React.FunctionComponent<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: delay ?? 0 }}
    >
      {children}
    </motion.div>
  );
};
