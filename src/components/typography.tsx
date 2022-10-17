import * as React from "react";
import styled from "styled-components";

interface TypographyProps {
  fontSize?: number;
  color?: string;
  fontWeight?: number;
}

export const Headline = styled.div<{
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}>`
  color: ${(props) => props.color ?? "black"};
  font-family: Montserrat, serif;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 600)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "22px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

export const Body = styled.div<{
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}>`
  color: ${(props) => props.color ?? "black"};
  font-family: Montserrat, serif;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 400)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "16px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

export const SmallHeadline = styled.div<{
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}>`
  color: ${(props) => props.color ?? "black"};
  font-family: Montserrat, serif;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 800)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "18px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

export const ActionText = styled.div<{
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
}>`
  color: ${(props) => props.color ?? "white"};
  font-family: Montserrat, serif;
  text-transform: uppercase;
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : 800)};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "14px")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
`;
