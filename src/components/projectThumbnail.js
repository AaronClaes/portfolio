import React, { useState, Fragment } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// styles
const Container = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  flex-basis: 0;
  height: 250px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 2rem;

  img {
    width: 100px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
`;

const ProjectInfo = styled.div`
  backdrop-filter: blur(1px);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  p {
    text-align: center;
  }
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
  const [hover, setHover] = useState(false);

  const image = getImage(data.images.icon);
  return (
    <Container
      backgroundimage={data.images.thumbnail.publicURL}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <ProjectInfo>
          <p>{data.description}</p>
          <Button>
            {" "}
            <p>LEARN MORE</p>{" "}
          </Button>
        </ProjectInfo>
      ) : (
        <Fragment>
          <Tools>
            {data.tools.map((tool) => {
              return (
                <Tool>
                  <p>{tool}</p>
                </Tool>
              );
            })}
          </Tools>
          <GatsbyImage image={image} alt="project icon" />
          <ProjectTitle>{data.title}</ProjectTitle>
        </Fragment>
      )}
    </Container>
  );
};

export default ProjectThumbnail;
