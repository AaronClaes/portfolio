import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import ProjectThumbnail from "../components/projectThumbnail";
import styled from "styled-components";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

// styles
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;

const HeaderSubTitle = styled.h2`
  font-family: Roboto Mono;
  font-size: 1.25rem;
  font-weight: 300;
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
`;

const SectionSubTitle = styled.h4`
  padding: 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: #dddddd;
`;

const SectionText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const AboutContainer = styled.div`
  background-color: #3a3b3f;
  display: flex;
  justify-content: center;
  gap: 100px;
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
  padding: 3rem 0;
`;

const AboutSection = styled.section`
  background-color: #3a3b3f;
  display: flex;
  width: 100%;
  align-items: center;
`;

const PortfolioSection = styled.section`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.div`
  border-radius: 10px;
  width: min-content;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;

  transition: all 0.15s ease-in-out;
`;

const ButtonGreen = styled(Button)`
  border: 2.5px solid #45d282;

  :hover {
    background-color: #45d282;
  }
`;

const ButtonPurple = styled(Button)`
  background-color: #8464f0;

  :hover {
    background-color: #6e4be2;
  }
`;

const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 2rem 0;
`;

const PortfolioButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const ContactSection = styled.section`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 5rem);
  margin: 12rem auto;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContactContainer = styled.div`
  background-color: #3a3b3f;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  border-radius: 10px;
  z-index: 2;
  text-align: center;
`;

const Footer = styled.footer`
  position: relative;
  height: 100%;
`;

const FooterContainer = styled.div`
  position: absolute;
  top: -150px;
  background-color: #8464f0;
  width: 100%;
  height: 450px;
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            id
            images {
              thumbnail {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            id
            description
            title
            finished
            tools
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <HeaderContainer>
        <section>
          <HeaderTitle>
            Code <br /> <span className="greenText">+</span> Design <br />{" "}
            <span className="greenText">=</span> My Passion
            <span className="purpleText">.</span>
          </HeaderTitle>
          <HeaderSubTitle>
            I am <span className="greenText">Full-Stack Developer</span> on an
            adventure <br /> in the digital world!
          </HeaderSubTitle>
        </section>
      </HeaderContainer>
      <main>
        <AboutSection>
          <AboutContainer>
            <StaticImage
              src="https://us.123rf.com/450wm/asetrova/asetrova1709/asetrova170900095/86147094-hand-drawn-word-about-me.jpg?ver=6"
              alt="about me image"
            />
            <div>
              <SectionTitle>About me</SectionTitle>
              <SectionSubTitle>
                I am 20 Year old Full-Stack Developer from Belgium
              </SectionSubTitle>
              <SectionText>
                Over the last few years, web development has become a real
                passion of mine. I have always been intrigued by websites. When
                I was just a little boy, I started exploring them by using
                website builders, using inspect element on websites, thinking I
                was an actual wizard when changing the websites, but never made
                the step to coding. Until it was time to go to college.
              </SectionText>
              <SectionText>
                At this moment, my journey in the digital world begon. I
                discovered a strong passion for web development and fell in love
                with writing code. The fact that I could make something visual
                with a few lines of code blew my mind and motivated me to dig
                dieper into the possibilities of the web.
              </SectionText>
              <ButtonGreen>
                <p>READ MORE</p>
              </ButtonGreen>
            </div>
          </AboutContainer>
        </AboutSection>
        <PortfolioSection>
          <SectionTitle>Some of my projects</SectionTitle>
          <Projects>
            {data.allProjectsJson.edges.map((node) => (
              <ProjectThumbnail key={node.node.id} data={node.node} />
            ))}
          </Projects>
          <PortfolioButtons>
            <ButtonPurple>
              <p>ALL PROJECTS</p>
            </ButtonPurple>
            <ButtonGreen>
              <p>CONTACT ME</p>
            </ButtonGreen>
          </PortfolioButtons>
        </PortfolioSection>
        <ContactSection>
          <ContactContainer>
            <SectionTitle>Contact me</SectionTitle>
            <SectionSubTitle>
              Interested in working together? Have any questions? Lets talk!
            </SectionSubTitle>
            <ButtonGreen>
              <p>CONTACT ME</p>
            </ButtonGreen>
          </ContactContainer>
        </ContactSection>
      </main>
      <Footer>
        <FooterContainer>
          <FooterIcons>
            <Icon>
              <img src={github} alt="github icon" />
            </Icon>
            <Icon>
              <img src={linkedin} alt="linkedin icon" />
            </Icon>
            <Icon>
              <img src={email} alt="email icon" />
            </Icon>
          </FooterIcons>
          <p>“The great aim of education is not knowledge but action.”</p>
          <p>Copyright © 2021 AaronClaes</p>
        </FooterContainer>
      </Footer>
    </Fragment>
  );
};

export default IndexPage;
