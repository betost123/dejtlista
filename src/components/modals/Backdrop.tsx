import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";

const BackdropStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Backdrop: React.FunctionComponent<{
  children: any;
  onClick: () => void;
}> = ({ children, onClick }) => {
  return (
    <BackdropStyle
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropStyle>
  );
};

export default Backdrop;
