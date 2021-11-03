import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Hamburger from "../images/hamburger.svg";
import SideMenu from "./SideMenu";
import { CSSTransition } from "react-transition-group";

// styles
const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 0 20px;
  background-color: ${(props) => props.bg};

  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5rem;
  text-decoration: none;
  a {
    text-decoration: none;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

const Burger = styled.img`
  @media (min-width: 750px) {
    display: none;
  }
`;

const NavLink = styled(AniLink)`
  padding: 1rem 20px;
  border-radius: 10px;
  background-color: transparent;

  p {
    color: #bdbdbd;
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

function Navbar({ children }) {
  const [show, handleShow] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [targetElement, setTargetElement] = useState(null);

  const transitionNavbar = () => {
    if (window.scrollY > 40) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    setTargetElement(document.querySelector("body"));

    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const handleHamburgerClick = () => {
    setSideMenuOpen(!sideMenuOpen);

    if (sideMenuOpen) {
      enableBodyScroll(targetElement);
    } else {
      disableBodyScroll(targetElement);
    }
  };

  return (
    <Fragment>
      <Nav bg={show ? "#202020" : "transparent"}>
        <NavContent>
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
          <NavLinks>
            <NavLink
              to="/"
              activeClassName="active"
              paintDrip
              hex="#8464f0"
              duration={0.6}
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/aboutme"
              activeClassName="active"
              paintDrip
              hex="#8464f0"
              duration={0.6}
            >
              <p>About me</p>
            </NavLink>
            <NavLink
              to="/portfolio"
              activeClassName="active"
              paintDrip
              hex="#8464f0"
              duration={0.6}
            >
              <p>Portfolio</p>
            </NavLink>
            <NavLink
              to="/contactme"
              activeClassName="active"
              paintDrip
              hex="#8464f0"
              duration={0.6}
            >
              <p>Contact me</p>
            </NavLink>
          </NavLinks>
          <Burger src={Hamburger} onClick={handleHamburgerClick} />
        </NavContent>
      </Nav>
      <CSSTransition
        in={sideMenuOpen}
        timeout={300}
        classNames="sidebar"
        unmountOnExit
      >
        <SideMenu onChange={() => handleHamburgerClick()} />
      </CSSTransition>
      {children}
    </Fragment>
  );
}

export default Navbar;
