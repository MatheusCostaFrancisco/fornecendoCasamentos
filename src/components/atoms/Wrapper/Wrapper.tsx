import React from "react";
import "./style.css";
import { motion } from "framer-motion";
type WrapperProps = {
  children: JSX.Element;
};

export const Wrapper = ({ children }: WrapperProps) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="wrapper"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="wrapper__content" variants={item}>
        {children}
      </motion.div>
    </motion.div>
  );
};
