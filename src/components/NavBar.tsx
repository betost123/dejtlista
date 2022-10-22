import { Link } from "gatsby";
import * as React from "react";
import { Hidden } from "react-grid-system";
import styled from "styled-components";
import { CrossIcon, HamburgerIcon } from "./icons/HamburgerIcon";
import { Logo } from "./icons/logo";
import { Spacer } from "./spacers";

const NavBarContainer = styled.div`
  width: 95%;
  color: black;
  font-family: Montserrat, serif;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  margin-top: -2rem;
  z-index: 100;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 2px;
  color: white;
  text-align: center;
  margin: 1rem;
  font-weight: 700;

  :hover {
    opacity: 1;
    font-weight: 700;
  }
`;

const HamburgerButton = styled.div<{ open?: boolean }>`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const MenuSlide = styled.div<{ open: boolean }>`
  height: 100%;
  width: 100%;
  background-color: #232323;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MenuContainer = styled.div<{ open: boolean }>`
  height: 100vh;
  position: absolute;
  top: 0;
  right: -6rem;
  width: 600px;
  display: ${(props) => (props.open ? "block" : "none")};
  margin-top: 2rem;
`;

const MenuTop = styled.div`
  width: 100%;
  background-color: #232323;
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
  cursor: pointer;
`;

const NavBar: React.FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <NavBarContainer>
      <Link to='' style={{ transform: "scale(0.4)", marginLeft: "-10rem" }}>
        <Logo />
      </Link>
      <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}>
        <HamburgerIcon />
      </HamburgerButton>
      <MenuContainer open={menuOpen}>
        <MenuTop onClick={() => setMenuOpen(!menuOpen)}>
          <CrossIcon />
          <Spacer spacing={6} />
        </MenuTop>
        <MenuSlide open={menuOpen}>
          <NavItem to='/' onClick={() => setMenuOpen(false)}>
            Hem
          </NavItem>
          <NavItem to='/my-pages' onClick={() => setMenuOpen(false)}>
            Mina sidor
          </NavItem>
          <NavItem to='/customer-service' onClick={() => setMenuOpen(false)}>
            Kundservice
          </NavItem>
        </MenuSlide>
      </MenuContainer>
    </NavBarContainer>
  );
};

export default NavBar;
