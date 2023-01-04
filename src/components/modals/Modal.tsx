import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

interface Props {
  handleClose: () => void;
  modalContent?: React.ReactNode;
}

const ModalStyle = styled(motion.div)`
  width: 100vw;
  height: 90vh;

  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

const dropIn = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: { y: 0, opacity: 1 },
  exit: {
    y: "100%",
    opacity: 0,
  },
};

const Modal: React.FunctionComponent<Props> = ({
  handleClose,
  modalContent,
}) => {
  return (
    <Backdrop>
      <ModalStyle
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {modalContent}
      </ModalStyle>
    </Backdrop>
  );
};

export default Modal;
