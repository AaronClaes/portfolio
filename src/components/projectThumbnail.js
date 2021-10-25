import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ButtonGreen, ButtonPurple } from "./Styles";
import truncate from "../utils/truncate";

// styles
const Container = styled.div`
  width: 300px;
  flex-grow: 1;
`;

const Box = styled.figure`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  :hover \ #projectInfo {
    visibility: visible;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  :hover \ .hover-hide {
    visibility: hidden;
    opacity: 0;
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
  line-height: 1.3rem;

  gap: 20px;
  p {
    text-align: center;
  }

  transition: visibility 0s, opacity 0.3s ease-in-out;
`;

const Tools = styled.div`
  opacity: 1;
  visibility: visible;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;

  transition: visibility 0s, opacity 0.3s ease-in-out;
`;

const Tool = styled.div`
  display: flex;
  background-color: #3a3b3f;
  padding: 3px 7px;
  border-radius: 6px;
  white-space: nowrap;
`;

const Progress = styled.div`
  background-color: #202020;
  padding: 3px 7px;
  border-radius: 6px;
  opacity: 1;
  visibility: visible;
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  transition: visibility 0s, opacity 0.3s ease-in-out;
`;

const Dot = styled.span`
  background-color: red;
  border-radius: 100%;
  width: 10px;
  height: 10px;
`;

const ProjectThumbnail = ({ data }) => {
  const image = getImage(data.images.thumbnail);
  return (
    <Container>
      <Box>
        <GatsbyImage image={image} alt="thumbnail Image" />
        <Tools className="hover-hide">
          {data.tools.map((tool, index) => {
            return (
              <Tool key={index}>
                <p>{tool}</p>
              </Tool>
            );
          })}
        </Tools>
        {!data.finished && (
          <Progress className="hover-hide">
            <Dot />
            <p> in progress</p>
          </Progress>
        )}
        <ProjectInfo id="projectInfo">
          <p>{truncate(data.description, 75)}</p>
          <Link
            to={`/projects/${data.route}`}
            style={{ textDecoration: "none" }}
          >
            <ButtonPurple>
              <p>{data.title}</p>
            </ButtonPurple>
          </Link>
        </ProjectInfo>
      </Box>
    </Container>
  );
};

export default ProjectThumbnail;
