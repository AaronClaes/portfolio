import React from "react";
import { Helmet } from "react-helmet";

function ReactHelmet({ title }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta
          name="description"
          content="I am a Full Stack web developer on a journey in the digital world!"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Web Development, Frontend, backend, full stack"
        />
        <html lang="en" />
      </Helmet>
    </div>
  );
}

export default ReactHelmet;
