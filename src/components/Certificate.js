import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

// styles
const Container = styled.div`
  width: 300px;
  flex-grow: 1;
  cursor: pointer;
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

function Certificate({ data }) {
  const image = getImage(data.image);
  console.log(data.image, image);
  return (
    <Container>
      <Box>
        <GatsbyImage layout="fullwidth" image={image} alt="thumbnail Image" />
        <Tools className="hover-hide">
          {data.subjects.map((subject, index) => {
            return (
              <Tool key={index}>
                <p>{subject}</p>
              </Tool>
            );
          })}
        </Tools>
      </Box>
    </Container>
  );
}

export default Certificate;
