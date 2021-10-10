import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";

// styles
const headerContainer = {
  margin: "0 20rem",
  display: "flex",
  alignItems: "center",
  height: "100vh",
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

const sectionTitle = {
  fontSize: "2.5rem",
  fontWeight: "700",
};

const sectionSubTitle = {
  padding: "0.5rem 0",
  fontSize: "1.25rem",
  fontWeight: "500",
  color: "#DDDDDD",
};

const sectionText = {
  fontSize: "1rem",
  fontWeight: "300",
  marginBottom: "1rem",
  lineHeight: "1.6",
};

const aboutSection = {
  backgroundColor: "#3A3B3F",
  padding: "3rem 20rem",
  display: "flex",
  justifyContent: "center",
  gap: "100px",
};

const portfolioSection = {
  margin: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const aboutImage = {
  width: "400px",
};

const button = {
  borderRadius: "10px",
  border: "2.5px solid #45d282",
  width: "fit-content",
  padding: "0.75rem 1.5rem",
  cursor: "pointer",
};

const IndexPage = () => {
  return (
    <Fragment>
      <header style={headerContainer}>
        <section>
          <h1 style={headerTitle}>
            Code <br /> <span className="greenText">+</span> Design <br />{" "}
            <span className="greenText">=</span> My Passion
            <span className="purpleText">.</span>
          </h1>
          <h2 style={headerSubTitle}>
            I am <span className="greenText">Full-Stack Developer</span> on an
            adventure <br /> in the digital world!
          </h2>
        </section>
      </header>
      <main>
        <section style={aboutSection}>
          <div>
            <StaticImage
              style={aboutImage}
              src="https://us.123rf.com/450wm/asetrova/asetrova1709/asetrova170900095/86147094-hand-drawn-word-about-me.jpg?ver=6"
              alt="about me image"
            />
          </div>
          <div>
            <h3 style={sectionTitle}>About me</h3>
            <h4 style={sectionSubTitle}>
              I am 20 Year old Full-Stack Developer from Belgium
            </h4>
            <p style={sectionText}>
              Over the last few years, web development has become a real passion
              of mine. I have always been intrigued by websites. When I was just
              a little boy, I started exploring them by using website builders,
              using inspect element on websites, thinking I was an actual wizard
              when changing the websites, but never made the step to coding.
              Until it was time to go to college.
            </p>
            <p style={sectionText}>
              At this moment, my journey in the digital world begon. I
              discovered a strong passion for web development and fell in love
              with writing code. The fact that I could make something visual
              with a few lines of code blew my mind and motivated me to dig
              dieper into the possibilities of the web.
            </p>
            <div style={button}>
              <p>READ MORE</p>
            </div>
          </div>
        </section>
        <section style={portfolioSection}>
          <h3 style={sectionTitle}>Some of my projects</h3>
        </section>
      </main>
    </Fragment>
  );
};

export default IndexPage;
