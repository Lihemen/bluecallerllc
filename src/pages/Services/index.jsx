import React from "react";
import { PageHeader } from "../../components/PageHeader";
import { TopServices } from "../../components/TopServices";
import { OurServices } from "../../components/OurServices";
import { Clients } from "../../components/Clients";
import { DesignProcess } from "../../components/DesignProcess";

import { useTitle } from "../../hooks/useTitle";

export const Services = () => {
  useTitle("Our Services");

  return (
    <>
      <PageHeader name="our services" link="services" />
      <OurServices />
      <Clients />
      <DesignProcess />
      <TopServices />
    </>
  );
};

