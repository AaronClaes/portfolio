import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ProjectThumbnail from "../components/projectThumbnail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  SectionTitle,
  SectionSubTitle,
  ButtonGreen,
  ButtonPurple,
  SectionText,
} from "../components/Styles";

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
  margin-bottom: 2rem;
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
      <Navbar />
      <HeaderContainer>
        <section>
          <HeaderTitle>
            Code <br /> <span className="greenText">+</span> Design <br />{" "}
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
              <p>PROJECTS</p>
            </ButtonPurple>
            <ButtonGreen>
              <p>CONTACT ME</p>
            </ButtonGreen>
          </Buttons>
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
          <Buttons>
            <ButtonPurple>
              <p>ALL PROJECTS</p>
            </ButtonPurple>
            <ButtonGreen>
              <p>CONTACT ME</p>
            </ButtonGreen>
          </Buttons>
        </PortfolioSection>
      </main>
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
