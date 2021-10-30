import React, { Fragment } from "react";
import styled from "styled-components";
import Collapsible from "../components/Collapsible";

import Footer from "../components/Footer";
import ReactHelmet from "../components/ReactHelmet";
import {
  SectionTitle,
  SectionText,
  SectionSubTitle,
} from "../components/Styles";

// styles
const ProjectContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

const skills = [
  { title: "HTML", icon: null, level: null },
  {
    title: "CSS",
    tools: [
      { title: "Bootstrap", icon: null, level: null },
      { title: "SASS/SCSS", icon: null, level: null },
      { title: "Tailwind", icon: null, level: null },
    ],
    icon: null,
    level: null,
  },
  {
    title: "JavaScript",
    tools: [
      { title: "JQuery", icon: null, level: null },
      { title: "Three.js", icon: null, level: null },
    ],
    icon: null,
    level: null,
  },
  {
    title: "React JS",
    tools: [
      { title: "Redux", icon: null, level: null },
      { title: "Styled Components", icon: null, level: null },
      { title: "MUI", icon: null, level: null },
      { title: "Gatsby", icon: null, level: null },
    ],
    icon: null,
    level: null,
  },
  {
    title: "Node JS",
    tools: [
      { title: "Express", icon: null, level: null },
      { title: "Socket.io", icon: null, level: null },
    ],
    icon: null,
    level: null,
  },
  {
    title: "Mongo DB",
    tools: [{ title: "Mongoose", icon: null, level: null }],
    icon: null,
    level: null,
  },
  { title: "Firebase", icon: null, level: null },
  {
    title: "SQL",
    tools: [
      { title: "MySQL", icon: null, level: null },
      { title: "PhpMyAdmin", icon: null, level: null },
      { title: "Heidi SQL", icon: null, level: null },
    ],
    icon: null,
    level: null,
  },
  {
    title: "PHP",
    tools: [{ title: "Laravel", icon: null, level: null }],
    icon: null,
    level: null,
  },
];

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
        <SectionSubTitle style={{ color: "#fff" }}>Skills</SectionSubTitle>
        {skills.map((skill, index) => {
          const position =
            index === 0
              ? "first"
              : index + 1 === skills.length
              ? "last"
              : "middle";

          return (
            <Collapsible
              key={index}
              title={skill.title}
              tools={skill.tools}
              position={position}
            />
          );
        })}
        <SectionSubTitle style={{ color: "#fff" }}>Education</SectionSubTitle>
        <SectionSubTitle style={{ color: "#fff" }}>Experience</SectionSubTitle>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default Aboutme;
