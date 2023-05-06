import React from 'react'

import Modal from "react-modal";
import { AnimatePresence, motion } from "framer-motion";

export default function FitlogModal(props: React.PropsWithChildren<{className?: string, isOpen: boolean, onCloseRequest?: () => void}>) {
  return (
    <div>
      <Modal
        className="outline-none"
        style={{ overlay: { background: "rgba(0, 0, 0, 0.9)" } }}
        ariaHideApp={false}
        isOpen={props.isOpen}
        onRequestClose={props.onCloseRequest}
        closeTimeoutMS={250}
      >
        <AnimatePresence>
          <motion.div
            variants={{
              open: {
                opacity: 1,
                y: 0,
              },
              exit: {
                y: 200,
                opacity: 0,
              },
            }}
            initial={{ opacity: 0, y: 200 }}
            animate={props.isOpen ? "open" : ""}
            exit={"exit"}
            transition={{ duration: 0.23 }}
            className={props.className}
          >
            {props.children}
          </motion.div>
        </AnimatePresence>
      </Modal>


    </div>
  )
}
