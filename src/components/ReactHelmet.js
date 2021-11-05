import React from "react";
import { Helmet } from "react-helmet";

function ReactHelmet({
  title,
  description = "I am a Full Stack web developer on a journey in the digital world!",
}) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
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
