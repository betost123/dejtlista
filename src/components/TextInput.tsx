import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "../utils/styling-helpers";
import { ActionText, Body } from "./typography";

interface TextInputProps {
  placeholder?: string;
  title?: string;
  endAdornmentText?: string;
  onChange?: (event: any) => void;
  hintText?: string;
  variant?: "secondary" | "primary";
}

const InputContainer = styled.div<{ variant: "primary" | "secondary" }>`
  border-bottom: ${(props) =>
    props.variant === "primary" ? "2px solid white" : "2px solid black"};
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem;
`;

const Input = styled.input<{ variant: "primary" | "secondary" }>`
  border: 0;
  outline: none;
  font-size: 16px;
  font-family: -apple-system, Montserrat, sans-serif, serif;
  width: 100%;
  background: transparent;
  color: ${(props) => (props.variant === "primary" ? "white" : "black")};

  ${MediaQuery.XS} {
    font-size: 14px;
  }
`;

const HintTextStyle = styled.div<{ variant: "primary" | "secondary" }>`
  font-size: 12px;
  color: ${(props) => (props.variant === "primary" ? "white" : "black")};
  opacity: 0.4;
  font-weight: 400;
  font-style: italic;
  margin-top: 8px;
`;

const TextInput: React.FunctionComponent<TextInputProps> = ({
  placeholder,
  title,
  endAdornmentText,
  hintText,
  variant = "primary",
}) => {
  return (
    <>
      <InputContainer variant={variant}>
        <Body
          fontWeight={900}
          color={variant === "primary" ? "white" : "black"}
        >
          {title}
        </Body>
        <Content>
          <Input placeholder={placeholder} variant={variant} />
          {endAdornmentText && (
            <ActionText color={variant === "primary" ? "white" : "black"}>
              {endAdornmentText}
            </ActionText>
          )}
        </Content>
      </InputContainer>
      {hintText && <HintTextStyle variant={variant}>{hintText}</HintTextStyle>}
    </>
  );
};

export default TextInput;
