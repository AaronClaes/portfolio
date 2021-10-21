import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Cross } from "./Styles";

// styles
const ModalContainer = styled.div`
  backdrop-filter: blur(4px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  position: relative;
  background-color: #3a3b3f;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  .gatsby-image-wrapper {
    flex-grow: 1;
    width: 90%;
    height: 90%;
    max-width: 100vh;

    img {
      width: 100%;
    }
  }
`;

const CrossIcon = styled(Cross)`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 32px;
  height: 32px;
  background-color: rgba(136, 136, 136, 0.6);
  border-radius: 5px;

  :hover {
    background-color: rgba(61, 61, 61, 0.6);
  }
`;

function ImageModal({ image, handleClickOutside }) {
  const img = getImage(image);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClickOutside();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [wrapperRef]);

  return (
    <ModalContainer>
      <Box ref={wrapperRef}>
        <GatsbyImage width={500} height={500} image={img} alt="certificate" />
        <CrossIcon id="cross" onClick={handleClickOutside} />
      </Box>
    </ModalContainer>
  );
}

export default ImageModal;
