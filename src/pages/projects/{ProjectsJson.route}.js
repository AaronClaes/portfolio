import React, { Fragment, useState } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Navbar from "../../components/Navbar";

import {
  SectionTitle,
  SectionSubTitle,
  SectionText,
  Buttons,
  ButtonGreen,
  ButtonPurple,
} from "../../components/Styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageModal from "../../components/ImageModal";

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

const Thumbnail = styled.div`
  .gatsby-image-wrapper {
    max-height: 400px;
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

const Images = styled.div`
  margin: 0.5rem 0;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

const Image = styled.div`
  cursor: pointer;
  width: 300px;

  height: 100%;
  flex-grow: 1;
  display: flex;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

const targetElement = document.querySelector("body");

function Project({ data }) {
  const { tools, title, route, description, finished, images, goals, links } =
    data.projectsJson;

  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCertificateClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
    disableBodyScroll(targetElement);
  };

  const handleModalClose = (img) => {
    setSelectedImage(null);
    setShowModal(false);
    enableBodyScroll(targetElement);
  };

  const img = getImage(images.thumbnailBig);

  return (
    <Fragment>
      <Navbar />
      <ProjectContainer>
        {showModal && (
          <ImageModal
            handleClickOutside={handleModalClose}
            image={selectedImage}
          />
        )}
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
        <Thumbnail>
          <GatsbyImage id="thumbnail" image={img} alt="project image" />
        </Thumbnail>
        <Buttons style={{ marginTop: "1rem" }}>
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ButtonGreen>
                <p>Live Website</p>
              </ButtonGreen>
            </a>
          )}
          {links.live && (
            <a
              href={links.github}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <ButtonPurple>
                <p>Github</p>
              </ButtonPurple>
            </a>
          )}
        </Buttons>
        <SectionSubTitle style={{ marginTop: "1rem", color: "#fff" }}>
          Goals
        </SectionSubTitle>
        <SectionText>{goals}</SectionText>
        <SectionSubTitle style={{ marginTop: "1rem", color: "#fff" }}>
          Description
        </SectionSubTitle>
        <SectionText>{description}</SectionText>
        <SectionSubTitle style={{ marginTop: "1rem", color: "#fff" }}>
          Images
        </SectionSubTitle>
        <Images>
          {images?.showcase?.map((image, index) => {
            const img = getImage(image);
            return (
              <Image onClick={() => handleCertificateClick(image)}>
                <GatsbyImage image={img} alt="project image" />
              </Image>
            );
          })}
        </Images>
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
        thumbnailBig {
          childImageSharp {
            gatsbyImageData
          }
        }
        showcase {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Project;
