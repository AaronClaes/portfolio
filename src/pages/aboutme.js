import React, { Fragment } from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import ReactHelmet from "../components/ReactHelmet";
import { SectionTitle, SectionText } from "../components/Styles";

// styles
const ProjectContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

function Aboutme() {
  return (
    <Fragment>
      <ReactHelmet title="Aaron Claes - About me" />
      <ProjectContainer>
        <SectionTitle style={{ marginTop: "7rem", marginBottom: "3rem" }}>
          About me
        </SectionTitle>
        <SectionText>
          Over the last few years, web development has become a real passion of
          mine. I have always been intrigued by websites. When I was just a
          little boy, I started exploring them by using website builders, using
          inspect element on websites, thinking I was an actual wizard when
          changing the websites, but never made the step to coding. Until it was
          time to go to college.
        </SectionText>
        <SectionText>
          At this moment, my journey in the digital world begon. I discovered a
          strong passion for web development and fell in love with writing code.
          The fact that I could make something visual with a few lines of code
          blew my mind and motivated me to dig dieper into the possibilities of
          the web.
        </SectionText>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default Aboutme;
