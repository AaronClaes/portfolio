import React, { Fragment } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// styles
const Projects = styled.main``;

function portfolio() {
  return (
    <Fragment>
      <Navbar />
      <Projects></Projects>
      <Footer />
    </Fragment>
  );
}

export default portfolio;
