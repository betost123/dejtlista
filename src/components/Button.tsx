import { motion } from "framer-motion";
import * as React from "react";
import styled from "styled-components";
import { Spacer } from "./spacers";
import { ActionText } from "./typography";

interface ButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "secondary" | "primary";
}

const ButtonContainer = styled.button<{ variant: "primary" | "secondary" }>`
  border: 0;
  background-color: ${(props) =>
    props.variant === "primary" ? "white" : "black"};
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
  variant = "primary",
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <ButtonContainer onClick={onClick} variant={variant}>
        <ActionText color={variant === "primary" ? "black" : "white"}>
          {title}
        </ActionText>
        <Spacer spacing={1} />
        {icon}
      </ButtonContainer>
    </motion.div>
  );
};

export default Button;
