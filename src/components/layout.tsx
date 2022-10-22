import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { HorizontalSpacer } from "./spacers";

interface LayoutProps {
  children: any;
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(255, 255, 255, 0.62);
    font-family: -apple-system, Montserrat, sans-serif, serif;
    color: black;
    margin-left: 0;
    padding-right: 1rem;
    overflow-x: hidden;
    width: 100vw;
  }
`;

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [navBarOpen, setNavBarOpen] = React.useState(false);

  return (
    <React.Fragment>
      <NavBar />
      <GlobalStyle />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
