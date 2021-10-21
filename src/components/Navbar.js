import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// styles
const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 0 20px;
  background-color: ${(props) => props.bg};

  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NavLogo = styled(Link)`
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

const NavLink = styled(Link)`
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

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
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
    <Nav bg={show ? "#202020" : "transparent"}>
      <NavContent>
        <NavLogo to="/" style={{ textDecoration: "none" }}>
          <Link>
            <h3>Aaron Claes</h3>
          </Link>
        </NavLogo>
        <NavLinks>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/about-me"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <p>About me</p>
          </NavLink>
          <NavLink
            to="/portfolio"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <p>Portfolio</p>
          </NavLink>
          <NavLink
            to="/contact-me"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <p>Contact me</p>
          </NavLink>
        </NavLinks>
      </NavContent>
    </Nav>
  );
}

export default Navbar;
