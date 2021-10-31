import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Arrow from "../images/arrow2.svg";

// styles
const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 4px solid transparent;
  width: 100%;
  background-color: #202020;
  border-bottom: 1px solid #3a3b3f;
  padding: 1rem;
  cursor: ${(props) => (props.tools ? "pointer" : null)};
  border-radius: ${(props) => (props.radiustop === "first" ? "10px" : "0")}
    ${(props) => (props.radiustop === "first" ? "10px" : "0")}
    ${(props) => (props.radiustop === "last" && !props.open ? "10px" : "0")}
    ${(props) => (props.radiustop === "last" && !props.open ? "10px" : "0")};

  &:last-of-type {
    border-bottom: none;
  }

  :hover {
    &:before {
      position: absolute;
      background: #fff;
      border-radius: 100%;
      content: "";
      left: -25px;
      height: 10px;
      width: 10px;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    transform: ${(props) => (props.open ? "rotate(90deg)" : "rotate(-90deg)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const HeaderTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 10px;
  &:before {
    background: ${(props) => props.level};
    border-radius: 100%;
    content: "";

    height: 15px;
    width: 15px;
  }
`;

const HeaderSubTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  margin-left: 1.5rem;
  font-weight: 400;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.623);
`;

const Content = styled.div`
  width: 100%;
  background-color: #3a3b3f;
  padding: 1rem;
  border-bottom-left-radius: ${(props) =>
    props.radiustop === "last" && props.open ? "10px" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.radiustop === "last" && props.open ? "10px" : "0"};
`;

const Timeline = styled.ul`
  line-height: 1.4em;
  list-style: none;
  margin: 0;
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

const TimelineInfo = styled.p`
  width: fit-content;
  padding: 0 5px;
  white-space: nowrap;
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  width: 15px;
  &:before {
    background: transparent;
    border: 3px solid ${(props) => props.level || "#202020"};
    border-radius: 100%;
    content: "";
    display: block;
    height: 9px;
    width: 9px;
    position: absolute;
    top: 3px;
    left: 0;
  }
  &:after {
    content: "";
    width: 3px;
    background: #2b2b2b;
    display: block;
    position: absolute;
    border-radius: 20px;
    top: 22px;
    bottom: 0;
    left: 6px;
    margin-bottom: 2px;
  }

  &#last :after {
    content: none;
  }
`;
const TimelineContent = styled.div`
  padding-bottom: 25px;
`;

function Collapsible({ skill, position }) {
  const { level, title, tools } = skill;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Header
        onClick={() => setOpen(!open)}
        radiustop={position}
        open={open}
        tools={tools}
      >
        <HeaderTitle level={level.color}>{title}</HeaderTitle>
        {tools?.length > 0 && (
          <HeaderRight open={open}>
            <HeaderSubTitle>Framworks/Tools</HeaderSubTitle>
            <img src={Arrow} alt="" />
          </HeaderRight>
        )}
      </Header>
      {open && tools?.length > 0 ? (
        <Content radiustop={position} open={open}>
          <Timeline>
            {tools?.map((tool) => (
              <TimelineItem>
                <TimelineInfo level={tool?.level?.color}>
                  {tool.title}
                </TimelineInfo>
                <TimelineMarker level={tool?.level?.color}></TimelineMarker>
                <TimelineContent></TimelineContent>
              </TimelineItem>
            ))}
            <TimelineItem>
              <TimelineInfo>Always Learning!</TimelineInfo>
              <TimelineMarker id="last"></TimelineMarker>
            </TimelineItem>
          </Timeline>
        </Content>
      ) : null}
    </Fragment>
  );
}

export default Collapsible;
