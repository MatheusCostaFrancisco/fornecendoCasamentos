import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ThemeKeys } from "../../../helpers/ThemeKeys";
import { Button } from "../../atoms/Button";

export type ModalProps = {
  isOpen: boolean;
  buttons: ButtonsType[];
  message?: string;
  title?: string;
  onClose: () => void;
};

type ButtonsType = {
  name: string;
  action: () => void;
  background?: keyof ThemeKeys;
};

export default function Modal({
  isOpen,
  onClose,
  buttons,
  message,
  title,
}: ModalProps) {
  return (
    <>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 99999999,
            margin: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <AnimatePresence>
            <motion.div
              className="modal-wrapper"
              style={{
                padding: "30px",
                width: 300,
                height: 250,
                borderRadius: 15,
                backgroundColor: "#fff",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {title && <div className="modal-message">{title}</div>}
              {message && <div className="modal-message">{message}</div>}
              <div className="modal-buttons">
                <Button
                  label={buttons[0].name}
                  onClick={buttons[0].action}
                  backgroundColor={buttons[0].background}
                />
                <Button
                  label={buttons[1].name}
                  onClick={buttons[1].action}
                  backgroundColor="gray"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
