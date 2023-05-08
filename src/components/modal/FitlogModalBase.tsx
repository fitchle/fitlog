import { useSetAtom } from "jotai";
import React from "react";

import Modal from "react-modal";

export default function FitlogModalBase(
  props: React.PropsWithChildren<{
    className?: string;
    isActive: boolean;
    onCloseRequest?: () => void;
    overlayColor?: string;
    closeTimeoutMS?: number;
  }>
) {
  return (
    <div>
      <Modal
        className="outline-none"
        style={{ overlay: { background: props.overlayColor ? props.overlayColor : `rgba(0, 0, 0, 0.9)` } }}
        ariaHideApp={false}
        isOpen={props.isActive}
        onRequestClose={props.onCloseRequest}
        closeTimeoutMS={props.closeTimeoutMS ? props.closeTimeoutMS : 250}
        >
        <div className={props.className}>{props.children}</div>
      </Modal>
    </div>
  );
}
