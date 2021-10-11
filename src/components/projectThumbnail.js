import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// styles
const Container = styled.div`
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(33% - 0.5rem);
  height: 300px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    min-width: 100px;
    width: 100px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
`;

const ProjectThumbnail = ({ data }) => {
  const image = getImage(data.images.icon);
  return (
    <Container backgroundimage={data.images.thumbnail.publicURL}>
      <GatsbyImage image={image} alt="project icon" />
      <ProjectTitle>{data.title}</ProjectTitle>
    </Container>
  );
};

export default ProjectThumbnail;
