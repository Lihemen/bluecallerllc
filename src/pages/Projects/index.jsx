import React from "react";
import { PageHeader } from "../../components/PageHeader";

import { useTitle } from "../../hooks/useTitle";
export const Projects = () => {
  useTitle("Our Latest Projects");

  return (
    <>
      <PageHeader name="Our Projects" link="projects" />
    </>
  );
};

