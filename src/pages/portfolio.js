import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SectionTitle } from "../components/Styles";
import ProjectThumbnail from "../components/projectThumbnail";
import Certificate from "../components/Certificate";
import ImageModal from "../components/ImageModal";

// styles
const Projects = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 2rem 0;
`;
const PortfolioContainer = styled.main`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

const targetElement = document.querySelector("body");

function Portfolio() {
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
            route
            description
            title
            finished
            tools
          }
        }
      }
      certificatesJson {
        certificates {
          subjects
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return (
    <Fragment>
      <Navbar />
      <PortfolioContainer>
        {showModal && (
          <ImageModal
            handleClickOutside={handleModalClose}
            image={selectedImage}
          />
        )}
        <SectionTitle style={{ marginTop: "7rem" }}>My Projects</SectionTitle>
        <Projects>
          {data.allProjectsJson.edges.map((node) => (
            <ProjectThumbnail key={node.node.id} data={node.node} />
          ))}
        </Projects>
        <SectionTitle style={{ marginTop: "5rem" }}>
          My Certificates
        </SectionTitle>
        <Projects>
          {data.certificatesJson.certificates.map((certificate) => (
            <Certificate
              clickEvent={() => handleCertificateClick(certificate.image)}
              data={certificate}
            />
          ))}
        </Projects>
      </PortfolioContainer>
      <Footer />
    </Fragment>
  );
}

export default Portfolio;
