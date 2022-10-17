import { Link } from "gatsby";
import * as React from "react";
import { Hidden } from "react-grid-system";
import styled from "styled-components";
import { Logo } from "./icons/logo";
import { Spacer } from "./spacers";

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  color: black;
  font-family: Montserrat, serif;
  padding: 1rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  position: fixed;
  margin-left: -4rem;
  top: 0;
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
      <Link to='' style={{ transform: "scale(0.6)", marginLeft: "-1rem" }}>
        <Logo />
      </Link>
      <Hidden xs>
        <NavItem
          to=''
          activeStyle={{
            opacity: 1,
            textDecoration: "underline",
            textDecorationThickness: 1,
          }}
        >
          Hyresgäst
        </NavItem>
        <NavItem to='/rent'>Hyreslöfte</NavItem>
        <NavItem to='/rent'>Kontakt</NavItem>
        <NavItem to='/rent'>Mina sidor</NavItem>
      </Hidden>
    </NavBarContainer>
  );
};

export default NavBar;
