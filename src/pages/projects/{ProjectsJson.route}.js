import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/Navbar";

function Project({ data }) {
  console.log(data);

  const { tools, title, route, description, finished } = data.projectsJson;

  return (
    <div>
      <Navbar />
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    projectsJson(id: { eq: $id }) {
      id
      tools
      title
      route
      description
      finished
    }
  }
`;

export default Project;
