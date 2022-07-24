import React, { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Icon } from "../../atoms/Icon/Icon";

export default function NavbarMenu() {
  const [open, cycleOpen] = useCycle(false, true);

  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", to: "Home", id: 1 },
    { name: "Planejamento", to: "Planning", id: 2 },
    { name: "Produto", to: "ProductsList", id: 3 },
    { name: "Serviços", to: "ServicesList", id: 4 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const handleNavigate = (route: string) => {
    navigate(`/${route}`);
  };

  const handleOpen = () => {
    cycleOpen();
  };
  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.2, duration: 0.3 },
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.div
                  key={id}
                  onClick={() => handleNavigate(to)}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <div onClick={handleOpen}>
          {!open ? (
            <Icon icon="align-justify" color="white" />
          ) : (
            <Icon icon="close" color="white" />
          )}
        </div>
      </div>
    </main>
  );
}
