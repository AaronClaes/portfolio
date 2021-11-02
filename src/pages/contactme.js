import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { SectionTitle } from "../components/Styles";

const AboutContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

function Contactme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://discord.com/api/webhooks/905182430045024276/2RftW3hv78T_Z4gg9pR2FRceBzxUcOYnqiA5R_RIGJtus2oFLeTgmZ6hbqJl9zh-1Z5N"
    );
    request.setRequestHeader("Content-type", "application/json");
    const params = {
      content: `Name: ${name}\r\nEmail: ${email}\r\nMessage: ${message} `,
    };
    request.send(JSON.stringify(params));
  }

  return (
    <Fragment>
      <AboutContainer>
        <SectionTitle style={{ marginTop: "7rem", marginBottom: "3rem" }}>
          Contact me
        </SectionTitle>
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={(e) => sendMessage(e)}> Message</button>
        </form>
      </AboutContainer>
      <Footer contact={false} />
    </Fragment>
  );
}

export default Contactme;
