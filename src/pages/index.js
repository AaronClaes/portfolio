import React, { Fragment, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import background from "../images/background.gif";
import backgroundVideo from "../images/background.mp4";

import ProjectThumbnail from "../components/projectThumbnail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HeaderTitle,
  SectionTitle,
  SectionSubTitle,
  ButtonGreen,
  ButtonPurple,
  SectionText,
} from "../components/Styles";

// styles
const Background = styled.header``;

const BackgroundVideo = styled.video`
  width: 95vw;
  height: 100vh;
  object-fit: scale-down;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100vh;
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const HeaderSubTitle = styled.h2`
  font-family: Roboto Mono;
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const AboutContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
  padding: 3rem 0;
  background-color: #3a3b3f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const AboutSection = styled.section`
  background-color: #3a3b3f;
  width: 100%;
`;

const PortfolioSection = styled.section`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 8rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson(limit: 3) {
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
            route
            description
            title
            finished
            tools
          }
        }
      }
    }
  `);

  useEffect(() => {
    document.querySelector("#backgroundVideo")?.play();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Background
        id="background"
        // style={{ backgroundImage: `url(${background})` }}
      >
        <HeaderContainer>
          <section>
            <BackgroundVideo
              id="backgroundVideo"
              playsinline
              autoplay
              muted
              loop
            >
              <source src={backgroundVideo} type="video/mp4" />
            </BackgroundVideo>
            <HeaderTitle>
              Front <br /> <span className="greenText">+</span> Backend <br />
              <span className="greenText">=</span> My Passion
              <span className="purpleText" id="dot">
                .
              </span>
            </HeaderTitle>
            <HeaderSubTitle>
              I am <span className="greenText">Full-Stack Developer</span> on an
              adventure <br /> in the digital world!
            </HeaderSubTitle>
            <Buttons>
              <ButtonPurple>
                <p>Projects</p>
              </ButtonPurple>
              <ButtonGreen>
                <p>Contact me</p>
              </ButtonGreen>
            </Buttons>
          </section>
        </HeaderContainer>
      </Background>
      <main>
        <AboutSection>
          <AboutContainer>
            <div>
              <StaticImage
                width={1600}
                height={1600}
                src="https://st.depositphotos.com/1032577/4274/i/950/depositphotos_42748913-stock-photo-about-me.jpg"
                alt="about me image"
              />
            </div>
            <div>
              <SectionTitle style={{ marginBottom: "1rem" }}>
                About me
              </SectionTitle>
              <SectionSubTitle style={{ marginBottom: "0.5rem" }}>
                I am 20 Year old Full-Stack Developer from Belgium
              </SectionSubTitle>

              <SectionText style={{ marginBottom: "2rem" }}>
                When my journey in the digital world begon, I discovered a
                strong passion for web development and fell in love with writing
                code. The fact that I could make something visual with a few
                lines of code blew my mind and motivated me to dig dieper into
                the possibilities of the web!
              </SectionText>
              <ButtonGreen>
                <p>Learn more</p>
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
          <Buttons>
            <ButtonPurple>
              <p>All Projects</p>
            </ButtonPurple>
            <ButtonGreen>
              <p>Contact me</p>
            </ButtonGreen>
          </Buttons>
        </PortfolioSection>
      </main>
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
