import React from "react";

import type {Variants} from "framer-motion"
import { AnimatePresence,  motion } from "framer-motion";
import FitlogModalBase from "./FitlogModalBase";


const topVariant:  Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: -200,
    opacity: 0,
  },
}

const bottomVariant:  Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  exit: {
    y: 200,
    opacity: 0,
  },
}

const rightVariant:  Variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 200,
    opacity: 0,
  },
}

const leftVariant:  Variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: -200,
    opacity: 0,
  },
}



export default function FitlogModal(
  props: React.PropsWithChildren<{
    className?: string;
    isActive: boolean;
    onCloseRequest?: () => void;
    position: 'left' | 'right' | 'bottom' | 'top';
    duration?: number;
  }>) {
    let variant;
    switch(props.position) {
      case "left":
        variant = leftVariant
        break;
      case "right":
        variant = rightVariant
        break;
      case "bottom":
        variant = bottomVariant
        break;
      case "top":
        variant = topVariant
        break;
    }
    return (
      <div>
        <FitlogModalBase
          className="outline-none"
          isActive={props.isActive}
          onCloseRequest={props.onCloseRequest}
          closeTimeoutMS={250}
        >
          <AnimatePresence>
            <motion.div
              variants={variant}
              animate={props.isActive ? "open" : ""}
              exit={"exit"}
              initial={variant['exit'] as any}
              transition={{ duration: props.duration ? props.duration : 0.23 }}
              className={'absolute' + ` ${props.position}-0 ` + props.className}
            >
                {props.children}
            </motion.div>
          </AnimatePresence>
        </FitlogModalBase>
      </div>
    );
  }
