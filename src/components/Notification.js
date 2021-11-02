import React from "react";
import styled from "styled-components";
import Close from "../images/close.svg";

// styles
const NotificationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #39ac6b;
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 3px solid #28834f;

  p {
    color: #fff;
  }
`;

function Notification({ message, onChange }) {
  return (
    <NotificationContainer>
      <p>{message}</p>
      <img
        height="35px"
        width="35px"
        src={Close}
        alt=""
        onClick={onChange}
        style={{ cursor: "pointer" }}
      />
    </NotificationContainer>
  );
}

export default Notification;
