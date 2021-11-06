import React, { Fragment } from "react";
import styled from "styled-components";
import Collapsible from "../components/Collapsible";

import Footer from "../components/Footer";
import ReactHelmet from "../components/ReactHelmet";
import Education from "../components/Education";
import {
  SectionTitle,
  SectionText,
  SectionSubTitle,
} from "../components/Styles";
import { levels, skills } from "../data/skills";

// styles
const ProjectContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 1rem;
  margin-left: 0;
`;

const Color = styled.div`
  display: flex;
  background-color: #3a3b3f;
  padding: 3px 10px;
  border-radius: 6px;
  white-space: nowrap;
  align-items: center;
  gap: 5px;

  &:before {
    background: ${(props) => props.level};
    border-radius: 100%;
    content: "";

    height: 10px;
    width: 10px;
  }
`;

const getPosition = (index) => {
  return index === 0
    ? "first"
    : index + 1 === skills.length
    ? "last"
    : "middle";
};

function Aboutme() {
  return (
    <Fragment>
      <ReactHelmet
        title="About me - Aaron Claes Full Stack Developer"
        description="My name is Aaron and I am a full-stack Developer from Belgium!"
      />
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
        <SectionSubTitle style={{ color: "#fff" }}>Skills</SectionSubTitle>
        <Colors>
          {Object.keys(levels).map(function (key, index) {
            return (
              <Color level={levels[key].color}>
                <p>{levels[key].title}</p>
              </Color>
            );
          })}
        </Colors>
        {skills.map((skill, index) => {
          const position = getPosition(index);

          console.log(skill);
          return <Collapsible key={index} skill={skill} position={position} />;
        })}
        <SectionSubTitle style={{ color: "#fff", marginTop: "2rem" }}>
          Education
        </SectionSubTitle>
        <Education />
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default Aboutme;
