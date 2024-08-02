import React from "react";

import { PageHeader } from "../../components/PageHeader";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const Projects = () => {
  useTitle("Our Latest Projects");

  return (
    <Opacity>
      <PageHeader
        name="Our Projects"
        link="projects"
      />
    </Opacity>
  );
};
