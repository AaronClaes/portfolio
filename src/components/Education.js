import React from "react";
import styled from "styled-components";

const Timeline = styled.ul`
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  margin-top: 1rem;
  padding: 0;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: inherit;
  }
`;

const TimelineItem = styled.li`
  padding-left: 40px;
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineInfo = styled.div`
  width: fit-content;
  padding: 0 5px;
  margin-bottom: 40px;
`;

const Year = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const School = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Study = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  color: #45d282;
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  width: 15px;
  &:before {
    background: transparent;
    border: 4px solid #45d282;
    border-radius: 100%;
    content: "";
    display: block;
    height: 16px;
    width: 16px;
    position: absolute;
    top: 0px;
    left: 0;
  }
  &:after {
    content: "";
    width: 3px;
    background: #8aeeb5;
    display: block;
    position: absolute;
    border-radius: 20px;
    top: 31px;
    bottom: 0;
    left: 10px;
    margin-bottom: 6px;
  }

  &#last :after {
    content: none;
  }
`;
const TimelineContent = styled.div`
  padding-bottom: 25px;
`;

function Education() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineInfo>
          <Year>2013 - 2019</Year>
          <School>Sint-Jan Berchmansinstituut</School>

          <Study>
            <span
              style={{
                color: "rgb(216, 216, 216)",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Secondary School:{" "}
            </span>
            Economics Modern Languages
          </Study>
        </TimelineInfo>
        <TimelineMarker></TimelineMarker>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineInfo>
          <Year>2019 - Now</Year>
          <School>Thomas More University</School>
          <Study>
            <span
              style={{
                color: "rgb(216, 216, 216)",
                fontWeight: "600",
                marginRight: "10px",
              }}
            >
              Bachelor Degree:
            </span>
            Interactive Multimedia Design
          </Study>
        </TimelineInfo>
        <TimelineMarker></TimelineMarker>
      </TimelineItem>
    </Timeline>
  );
}

export default Education;
