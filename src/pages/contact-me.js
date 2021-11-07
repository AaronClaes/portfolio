import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import {
  SectionTitle,
  SectionSubTitle,
  ButtonGreen,
} from "../components/Styles";

import Notification from "../components/Notification";
import Toolbox from "../components/Toolbox";
import ReactHelmet from "../components/ReactHelmet";

const AboutContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  width: calc(100% - 3rem);
  margin: 0 auto;
`;

const FormContainer = styled.div`
  max-width: 500px;
  background-color: #3a3b3f;
  border-radius: 10px;
  padding: 2rem;
  margin: 0 auto;
`;

const Form = styled.div`
  max-width: 500px;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  label {
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    margin-bottom: 1.75rem;
    border: none;
    padding: 0.75rem;
    border-radius: 10px;
    color: black;
    background-color: rgb(223, 223, 223);
  }

  input {
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    max-height: 500px;
    min-height: 3rem;
  }

  #submit {
    width: 100%;
  }
`;

function Contactme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(false);

  function sendMessage(e) {
    setName("");
    setEmail("");
    setMessage("");
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open("POST", process.env.GATSBY_DISCORD_LINK);
    request.setRequestHeader("Content-type", "application/json");
    const params = {
      content: `<@356171072384663552> \r\nName: ${name}\r\nEmail: ${email}\r\nMessage: ${message} `,
    };
    request.send(JSON.stringify(params));

    setNotification(true);
    setTimeout(() => setNotification(false), 8000);
  }

  return (
    <Fragment>
      <ReactHelmet
        title="Contact me - Aaron Claes Full Stack Developer"
        description="Hey! My name is Aaron, I am a Full-Stack Developer in love with modern technologies! Have any questions for me? Get in touch!"
      />
      <AboutContainer>
        <Toolbox />
        {notification && (
          <Notification
            onChange={() => setNotification(false)}
            message={
              "Message sent! I will get back to you via Email as soon as possible!"
            }
          />
        )}
        <FormContainer>
          <SectionTitle>Contact me</SectionTitle>
          <SectionSubTitle style={{ marginBottom: "1rem" }}>
            Questions? Send me a message!
          </SectionSubTitle>
          <Form>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              rows="4"
              placeholder="Message"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <ButtonGreen id="submit" onClick={(e) => sendMessage(e)}>
              <p>Message</p>
            </ButtonGreen>
          </Form>
        </FormContainer>
      </AboutContainer>
      <Footer contact={false} />
    </Fragment>
  );
}

export default Contactme;
