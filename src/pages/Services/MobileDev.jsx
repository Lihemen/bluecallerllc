import React from "react";

import { useTitle } from "../../hooks/useTitle";
import { PageHeader } from "../../components/PageHeader";

export const MobileDev = () => {
  useTitle("Services | Mobile App Development");

  return (
    <>
      <PageHeader
        name="mobile app development"
        link="services/app-development"
        prev_link="services"
      />
      <h1>MobileDev</h1>
    </>
  );
};

