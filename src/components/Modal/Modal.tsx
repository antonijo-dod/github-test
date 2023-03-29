import React, { ReactElement } from "react";
import style from "./modal.module.css";
import ReactModal from "react-modal";

interface ModalProps {
  open: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onCloseModal, children }: ModalProps): ReactElement => {
  return (
    <ReactModal
      isOpen={open}
      contentLabel="onRequestClose Example"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <button onClick={() => onCloseModal()}>close</button>
      {children}
    </ReactModal>
  );
};

export default Modal;
