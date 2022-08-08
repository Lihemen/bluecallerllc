import React from "react";

import { PageHeader } from "../../components/PageHeader";

import { LocationMap } from "../../components/Map";

export const Contact = () => {
  return (
    <>
      <PageHeader name="contact us" link="contact" />
      <LocationMap />
    </>
  );
};

