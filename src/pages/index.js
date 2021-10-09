import * as React from "react";

// styles
const headerContainer = {
  margin: "0 20rem",
  marginTop: "15rem",
};

const headerTitle = {
  fontSize: "5rem",
  fontWeight: "700",
};

const headerSubTitle = {
  fontFamily: "Roboto Mono",
  fontSize: "1.25rem",
  fontWeight: "300",
};

const IndexPage = () => {
  return (
    <header style={headerContainer}>
      <h1 style={headerTitle}>
        Code <br /> <span className="greenText">+</span> Design <br />{" "}
        <span className="greenText">=</span> My Passion
        <span className="purpleText">.</span>
      </h1>
      <h3 style={headerSubTitle}>
        I am <span className="greenText">Full-Stack Developer</span> on an
        adventure <br /> in the digital world!
      </h3>
    </header>
  );
};

export default IndexPage;
