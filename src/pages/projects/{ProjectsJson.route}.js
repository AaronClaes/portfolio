import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

import {
  SectionTitle,
  SectionSubTitle,
  SectionText,
  Buttons,
  ButtonGreen,
  ButtonPurple,
} from "../../components/Styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// styles
const ProjectContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }
`;

const Tools = styled.div`
  opacity: 1;
  visibility: visible;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 1rem 0;
  transition: visibility 0s, opacity 0.3s ease-in-out;
`;

const Tool = styled.div`
  display: flex;
  background-color: #212121;
  padding: 3px 7px;
  border-radius: 6px;
  white-space: nowrap;
`;

function Project({ data }) {
  const { tools, title, route, description, finished, images, goals, links } =
    data.projectsJson;

  const img = getImage(images.thumbnail);
  console.log(images.thumbnail);

  return (
    <Fragment>
      <Navbar />
      <ProjectContainer>
        <SectionTitle style={{ marginTop: "7rem", marginBottom: "3rem" }}>
          {title}
        </SectionTitle>
        <Tools className="hover-hide">
          {tools.map((tool, index) => {
            return (
              <Tool key={index}>
                <p>{tool}</p>
              </Tool>
            );
          })}
        </Tools>
        <GatsbyImage image={img} alt="project image" />
        <Buttons style={{ marginTop: "1rem" }}>
          <a
            href={links.live}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ButtonGreen>
              <p>Live Website</p>
            </ButtonGreen>
          </a>
          <a
            href={links.github}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ButtonPurple>
              <p>Github</p>
            </ButtonPurple>
          </a>
        </Buttons>
        <SectionSubTitle style={{ marginTop: "1rem", color: "#fff" }}>
          Goals
        </SectionSubTitle>
        <SectionText>{goals}</SectionText>
        <SectionSubTitle style={{ marginTop: "1rem", color: "#fff" }}>
          Description
        </SectionSubTitle>
        <SectionText>{description}</SectionText>
      </ProjectContainer>
    </Fragment>
  );
}

export const query = graphql`
  query ($id: String) {
    projectsJson(id: { eq: $id }) {
      id
      tools
      title
      route
      goals
      description
      finished
      links {
        github
        live
      }
      images {
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Project;
