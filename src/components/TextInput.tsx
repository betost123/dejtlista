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
}

const InputContainer = styled.div`
  border-bottom: 2px solid white;
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

const Input = styled.input`
  border: 0;
  outline: none;
  font-size: 16px;
  font-family: -apple-system, Montserrat, sans-serif, serif;
  width: 100%;
  background: transparent;
  color: white;

  ${MediaQuery.XS} {
    font-size: 14px;
  }
`;

const HintTextStyle = styled.div`
  font-size: 12px;
  color: white;
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
}) => {
  return (
    <>
      <InputContainer>
        <Body fontWeight={900} color='white'>
          {title}
        </Body>
        <Content>
          <Input placeholder={placeholder} />
          {endAdornmentText && <ActionText>{endAdornmentText}</ActionText>}
        </Content>
      </InputContainer>
      {hintText && <HintTextStyle>{hintText}</HintTextStyle>}
    </>
  );
};

export default TextInput;
