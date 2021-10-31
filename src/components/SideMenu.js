import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import styled from "styled-components";

import Close from "../images/close.svg";

// styles
const Container = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: #202020;
  padding: 0 20px;

  @media (min-width: 750px) {
    display: none;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
`;

const NavLinks = styled.div`
  margin-left: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 0.5rem;
`;

const NavLink = styled(AniLink)`
  width: 100%;
  padding: 1rem 20px;
  border-radius: 10px;
  background-color: transparent;

  p {
    color: #bdbdbd;
    font-size: 18px;
  }

  :hover {
    background-color: #494949;
    p {
      color: #fff;
    }
  }
  transition: all 0.1s ease-in;

  &.active {
    p {
      color: #fff;
    }
  }
`;

const SideMenu = ({ onChange }) => {
  const handleClick = () => {
    onChange();
  };

  return (
    <Container>
      <MenuHeader>
        <NavLogo to="/" style={{ textDecoration: "none" }}>
          <AniLink
            style={{ textDecoration: "none" }}
            hex="#8464f0"
            to="/"
            paintDrip
            duration={0.6}
          >
            <h3>Aaron Claes</h3>
          </AniLink>
        </NavLogo>
        <img onClick={handleClick} src={Close} alt="" />
      </MenuHeader>
      <NavLinks>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          activeClassName="active"
          paintDrip
          hex="#8464f0"
          duration={0.6}
          onClick={handleClick}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/aboutme"
          style={{ textDecoration: "none" }}
          activeClassName="active"
          paintDrip
          hex="#8464f0"
          duration={0.6}
          onClick={handleClick}
        >
          <p>About me</p>
        </NavLink>
        <NavLink
          to="/portfolio"
          style={{ textDecoration: "none" }}
          activeClassName="active"
          paintDrip
          hex="#8464f0"
          duration={0.6}
          onClick={handleClick}
        >
          <p>Portfolio</p>
        </NavLink>
        <NavLink
          to="/contactme"
          style={{ textDecoration: "none" }}
          activeClassName="active"
          paintDrip
          hex="#8464f0"
          duration={0.6}
          onClick={handleClick}
        >
          <p>Contact me</p>
        </NavLink>
      </NavLinks>
    </Container>
  );
};

export default SideMenu;
