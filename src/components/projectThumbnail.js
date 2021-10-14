import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// styles
const Container = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;

const Box = styled.figure`
  position: relative;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  :hover \ #projectInfo {
    visibility: visible;
    opacity: 1;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;

    img {
      width: 100%;
    }
  }
`;

const ProjectInfo = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: none;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  gap: 20px;
  p {
    text-align: center;
  }

  transition: visibility 0s, opacity 0.3s ease-in-out;
`;

const Tools = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
`;

const Tool = styled.div`
  display: flex;
  background-color: #2d2e32;
  padding: 3px 7px;
  border-radius: 6px;
`;

const Button = styled.div`
  border-radius: 10px;
  border: 2.5px solid #45d282;
  width: min-content;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  white-space: nowrap;

  :hover {
    background-color: #45d282;
  }
`;

const ProjectThumbnail = ({ data }) => {
  const image = getImage(data.images.thumbnail);
  return (
    <Container>
      <Box backgroundimage={data.images.thumbnail.publicURL}>
        <GatsbyImage image={image} alt="thumbnail Image" />
        <Tools>
          {data.tools.map((tool, index) => {
            return (
              <Tool key={index}>
                <p>{tool}</p>
              </Tool>
            );
          })}
        </Tools>
        <ProjectInfo id="projectInfo">
          <p>{data.description}</p>
          <Button>
            <p>LEARN MORE</p>
          </Button>
        </ProjectInfo>
      </Box>
    </Container>
  );
};

export default ProjectThumbnail;
