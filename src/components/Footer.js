import React, { Fragment } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Styles
import { SectionTitle, SectionSubTitle, ButtonGreen } from "./Styles";

// Assets
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

const ContactSection = styled.section`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 5rem);
  margin: 8rem auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContactContainer = styled.div`
  background-color: #3a3b3f;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  border-radius: 10px;
  z-index: 2;
  text-align: center;
`;

const FooterContent = styled.footer`
  position: relative;
  background-color: #8464f0;

  height: 100%;
`;

const FooterContainer = styled.div`
  position: relative;
  top: -150px;
  background-color: #8464f0;
  width: 100%;
  height: 350px;
  z-index: 0;
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;

  :hover {
    border: 3px solid rgba(255, 255, 255, 1);
    transform: scale(1.05);
  }

  transition: all 0.15s ease-in-out;
`;

function Footer({ contact = true }) {
  return (
    <Fragment>
      <ContactSection>
        <ContactContainer>
          <SectionTitle>{contact ? "Contact me" : "Portfolio"}</SectionTitle>
          <SectionSubTitle style={{ color: "#d4d4d4" }}>
            {contact
              ? " Interested in working together? Have any questions? Lets talk!"
              : "Take a look at some of my recent work!"}
          </SectionSubTitle>
          <AniLink
            style={{ textDecoration: "none" }}
            hex="#8464f0"
            to={contact ? "/contact-me" : "/portfolio"}
            paintDrip
            duration={0.6}
          >
            <ButtonGreen>
              <p>{contact ? "Contact me" : "Portfolio"}</p>
            </ButtonGreen>
          </AniLink>
        </ContactContainer>
      </ContactSection>
      <FooterContent>
        <FooterContainer>
          <FooterIcons>
            <a
              href="https://github.com/AaronClaes"
              target="_blank"
              rel="noreferrer"
            >
              <Icon>
                <img
                  src={github}
                  alt="github icon"
                  width="24px"
                  height="24px"
                />
              </Icon>
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-claes-618626207/"
              rel="noreferrer"
              target="_blank"
            >
              <Icon>
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  width="24px"
                  height="24px"
                />
              </Icon>
            </a>
            <a
              href="mailto:aaronclaes22@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <Icon>
                <img src={email} alt="email icon" width="24px" height="24px" />
              </Icon>
            </a>
          </FooterIcons>
          <p>???The great aim of education is not knowledge but action.???</p>
          <p>Copyright ?? 2021 AaronClaes</p>
        </FooterContainer>
      </FooterContent>
    </Fragment>
  );
}

export default Footer;
