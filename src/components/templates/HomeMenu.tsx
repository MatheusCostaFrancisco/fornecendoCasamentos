import React from "react";
import { ItemMenu } from "../atoms/ItemMenu";
import "./style.css";
import { motion } from "framer-motion";

type HomeMenuProps = {
  handleNavigation: (route: string) => void;
};

export default function HomeMenu({ handleNavigation }: HomeMenuProps) {
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
    <motion.div className="home__content" variants={container}>
      <motion.div variants={item}>
        <ItemMenu
          name="Meus fornecedores"
          footerName="Visualizar"
          icon="eye"
          onClick={() => handleNavigation("providers")}
        />
      </motion.div>
      <motion.div variants={item}>
        <ItemMenu
          name="Produtos"
          footerName="Visualizar"
          icon="folder"
          onClick={() => handleNavigation("ProductsList")}
        />
      </motion.div>
      <motion.div variants={item}>
        <ItemMenu
          name="Serviços"
          footerName="Visualizar"
          icon="server"
          onClick={() => handleNavigation("ServicesList")}
        />
      </motion.div>
      <motion.div variants={item}>
        <ItemMenu
          name="Planejamento"
          footerName="Visualizar"
          icon="calendar"
          onClick={() => handleNavigation("planning")}
        />
      </motion.div>
    </motion.div>
  );
}
