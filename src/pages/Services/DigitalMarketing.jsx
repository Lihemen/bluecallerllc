import React from "react";
import { PageHeader } from "../../components/PageHeader";

import { useTitle } from "../../hooks/useTitle";

export const DigitalMarketing = () => {
  useTitle("Services | Digital Marketing");
  return (
    <>
      <PageHeader
        name="digital marketing"
        link="services/digital-marketing"
        prev_link="services"
      />
      <h1>DigitalMarketing</h1>
    </>
  );
};

