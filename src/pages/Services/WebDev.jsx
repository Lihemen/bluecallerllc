import React from "react";
import { PageHeader } from "../../components/PageHeader";

import { useTitle } from "../../hooks/useTitle";

export const WebDev = () => {
  useTitle("Services | Website Development");

  return (
    <>
      <PageHeader
        name="website development"
        link="services/website-development"
        prev_link="services"
      />
      <h1>Web Dev</h1>
    </>
  );
};

