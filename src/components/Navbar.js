import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
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
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5rem;
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

  const transitionNavbar = () => {
    if (window.scrollY > 40) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

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
              style={{ textDecoration: "none" }}
              activeClassName="active"
              paintDrip
              hex="#8464f0"
              duration={0.6}
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
            >
              <p>Contact me</p>
            </NavLink>
          </NavLinks>
        </NavContent>
      </Nav>
      {children}
    </Fragment>
  );
}

export default Navbar;
