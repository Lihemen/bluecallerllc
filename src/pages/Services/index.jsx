import React from "react";

import { Clients } from "../../components/Clients";
import { DesignProcess } from "../../components/DesignProcess";
import { OurServices } from "../../components/OurServices";
import { PageHeader } from "../../components/PageHeader";
import { TopServices } from "../../components/TopServices";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const Services = () => {
  useTitle("Our Services");

  return (
    <>
      <PageHeader
        name="our services"
        link="services"
      />
      <Opacity>
        <OurServices />
        <Clients />
        <DesignProcess />
        <TopServices />
      </Opacity>
    </>
  );
};
