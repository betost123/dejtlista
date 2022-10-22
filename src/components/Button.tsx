import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import { Spacer } from "./spacers";
import { ActionText } from "./typography";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const ButtonContainer = styled.button`
  border: 0;
  background-color: white;
  padding: 1rem;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  icon,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <ButtonContainer onClick={onClick}>
        <ActionText color='black'>{title}</ActionText>
        <Spacer spacing={1} />
        {icon}
      </ButtonContainer>
    </motion.div>
  );
};

export default Button;
