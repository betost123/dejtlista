import * as React from "react";
import { createGlobalStyle } from "styled-components";

interface LayoutProps {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: -apple-system, Montserrat, sans-serif, serif;
    color: white;
    margin-left: 0;
    padding-right: 1rem;
    overflow-x: hidden;
    width: 100vw;
  }
`;

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default Layout;
