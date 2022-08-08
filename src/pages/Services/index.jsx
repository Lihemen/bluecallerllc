import React from "react";
import { PageHeader } from "../../components/PageHeader";
import { TopServices } from "../../components/TopServices";
import { OurServices } from "../../components/OurServices";
import { Clients } from "../../components/Clients";

export const Services = () => {
  return (
    <>
      <PageHeader name="our services" link="services" />
      <OurServices />
      <Clients />
      <TopServices />
    </>
  );
};

