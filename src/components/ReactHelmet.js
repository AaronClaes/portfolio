import React from "react";
import { Helmet } from "react-helmet";

function ReactHelmet({
  title,
  description = "I am a Full Stack web developer on a journey in the digital world!",
  type = "website",
  image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png",
  path = "",
}) {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://aaronclaes.be/${path}`} />
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
