import { Link } from "gatsby";
import * as React from "react";
import { Hidden } from "react-grid-system";
import styled from "styled-components";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { Logo } from "./icons/logo";

const NavBarContainer = styled.div`
  width: 95%;
  color: black;
  font-family: Montserrat, serif;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  margin-top: -2rem;
  z-index: 3;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 2px;
  opacity: 0.8;
  color: black;
  margin-right: 1rem;

  :hover {
    opacity: 1;
    font-weight: 700;
  }
`;

const NavBar: React.FunctionComponent = () => {
  return (
    <NavBarContainer>
      <Link to='' style={{ transform: "scale(0.4)", marginLeft: "-10rem" }}>
        <Logo />
      </Link>
      <HamburgerIcon />
    </NavBarContainer>
  );
};

export default NavBar;
