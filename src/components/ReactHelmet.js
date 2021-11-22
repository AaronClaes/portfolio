import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

function ReactHelmet({
  title,
  description = "I am a Full Stack web developer on a journey in the digital world!",
  type = "website",
  image,
  path = "",
}) {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "website-thumbnail" } }) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `);

  const isBrowser = () => typeof window !== "undefined";

  const imageURL = `https://aaronclaes.be${data.allFile.edges[0].node.publicURL}`;

  return (
    <div>
      <Helmet>
        {console.log(isBrowser() && window.location.origin)}
        <meta property="og:title" content={title} />
        <meta property="og:type" content={type} />
        <meta property="og:image" content={image || imageURL} />
        <meta property="og:url" content={`https://aaronclaes.be/${path}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="https://aaronclaes.be" />
        <meta name="twitter:site" content="@aaronclaes" />
        <meta name="twitter:creator" content="@aaronclaes" />
        <meta name="twitter:image" content={image || imageURL} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={`https://aaronclaes.be/${path}`} />
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
