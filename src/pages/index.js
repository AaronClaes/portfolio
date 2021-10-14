import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import ProjectThumbnail from "../components/projectThumbnail";
import styled from "styled-components";

// styles
const HeaderContainer = styled.header`
  margin: 0 20rem;
  display: flex;
  align-items: center;
  height: 100vh;
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

const AboutSection = styled.section`
  background-color: #3a3b3f;
  padding: 3rem 20rem;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const PortfolioSection = styled.section`
  margin: 5rem 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.div`
  border-radius: 10px;
  border: 2.5px solid #45d282;
  width: min-content;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  white-space: nowrap;
`;

const PortfolioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
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
          <div>
            <StaticImage
              style={{ width: "400px" }}
              src="https://us.123rf.com/450wm/asetrova/asetrova1709/asetrova170900095/86147094-hand-drawn-word-about-me.jpg?ver=6"
              alt="about me image"
            />
          </div>
          <div>
            <SectionTitle>About me</SectionTitle>
            <SectionSubTitle>
              I am 20 Year old Full-Stack Developer from Belgium
            </SectionSubTitle>
            <SectionText>
              Over the last few years, web development has become a real passion
              of mine. I have always been intrigued by websites. When I was just
              a little boy, I started exploring them by using website builders,
              using inspect element on websites, thinking I was an actual wizard
              when changing the websites, but never made the step to coding.
              Until it was time to go to college.
            </SectionText>
            <SectionText>
              At this moment, my journey in the digital world begon. I
              discovered a strong passion for web development and fell in love
              with writing code. The fact that I could make something visual
              with a few lines of code blew my mind and motivated me to dig
              dieper into the possibilities of the web.
            </SectionText>
            <Button>
              <p>READ MORE</p>
            </Button>
          </div>
        </AboutSection>
        <PortfolioSection>
          <SectionTitle>Some of my projects</SectionTitle>
          <PortfolioContainer>
            {data.allProjectsJson.edges.map((node) => (
              <ProjectThumbnail key={node.node.id} data={node.node} />
            ))}
          </PortfolioContainer>
        </PortfolioSection>
      </main>
    </Fragment>
  );
};

export default IndexPage;
