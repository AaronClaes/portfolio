import React, { Fragment, useState } from "react";
import styled from "styled-components";

// styles
const Header = styled.div`
  width: 100%;
  background-color: #202020;
  padding: 1rem;
  cursor: pointer;
  border-top-left-radius: ${(props) =>
    props.radiustop === "first" ? "10px" : "0"};
  border-top-right-radius: ${(props) =>
    props.radiustop === "first" ? "10px" : "0"};
  border-bottom-left-radius: ${(props) =>
    props.radiustop === "last" && !props.open ? "10px" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.radiustop === "last" && !props.open ? "10px" : "0"};
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
  white-space: nowrap;
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  width: 15px;
  &:before {
    background: #8464f0;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    width: 15px;
    position: absolute;
    top: 3px;
    left: 0;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }
  &:after {
    content: "";
    width: 3px;
    background: #c6b7f5;
    display: block;
    position: absolute;
    border-radius: 20px;
    top: 24px;
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

function Collapsible({ title, tools, position }) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Header onClick={() => setOpen(!open)} radiustop={position} open={open}>
        <h3>{title}</h3>
      </Header>
      {open && tools?.length > 0 ? (
        <Content radiustop={position} open={open}>
          <Timeline class="timeline">
            {tools?.map((tool) => (
              <TimelineItem class="timeline-item">
                <TimelineInfo class="timeline-info">{tool.title}</TimelineInfo>
                <TimelineMarker class="timeline-marker"></TimelineMarker>
                <TimelineContent class="timeline-content"></TimelineContent>
              </TimelineItem>
            ))}
            <TimelineItem class="timeline-item">
              <TimelineInfo class="timeline-info">
                Always Learning!
              </TimelineInfo>
              <TimelineMarker
                id="last"
                class="timeline-marker"
              ></TimelineMarker>
            </TimelineItem>
          </Timeline>
        </Content>
      ) : null}
    </Fragment>
  );
}

export default Collapsible;
