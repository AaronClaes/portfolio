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

const Colors = styled.div`
  display: flex;
  gap: 10px;
  margin: 1rem;
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

const levels = {
  advanced: { title: "Advanced", color: "#6E4BE2" },
  intermediate: { title: "Intermediate", color: "#fcd80e" },
  beginner: { title: "Played Around!", color: "#45D282" },
};

const skills = [
  { title: "HTML", icon: null, level: levels.advanced },
  {
    title: "CSS",
    tools: [
      { title: "Bootstrap", icon: null, level: levels.intermediate },
      { title: "SASS/SCSS", icon: null, level: levels.intermediate },
      { title: "Tailwind", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.advanced,
  },
  {
    title: "JavaScript",
    tools: [
      { title: "JQuery", icon: null, level: levels.intermediate },
      { title: "Three.js", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.advanced,
  },
  {
    title: "React JS",
    tools: [
      { title: "Redux", icon: null, level: levels.intermediate },
      { title: "Styled Components", icon: null, level: levels.intermediate },
      { title: "MUI", icon: null, level: levels.intermediate },
      { title: "Gatsby", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.advanced,
  },
  {
    title: "Node JS",
    tools: [
      { title: "Express", icon: null, level: levels.intermediate },
      { title: "Socket.io", icon: null, level: levels.beginner },
    ],
    icon: null,
    level: levels.intermediate,
  },
  {
    title: "Mongo DB",
    tools: [{ title: "Mongoose", icon: null, level: levels.intermediate }],
    icon: null,
    level: levels.intermediate,
  },
  {
    title: "SQL",
    tools: [
      { title: "MySQL", icon: null, level: levels.intermediate },
      { title: "PhpMyAdmin", icon: null, level: levels.intermediate },
      { title: "Heidi SQL", icon: null, level: levels.intermediate },
    ],
    icon: null,
    level: levels.intermediate,
  },
  { title: "Firebase", icon: null, level: levels.beginner },
  {
    title: "PHP",
    tools: [{ title: "Laravel", icon: null, level: levels.beginner }],
    icon: null,
    level: levels.beginner,
  },
];

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
          return (
            <Collapsible
              key={index}
              level={skill.level}
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
