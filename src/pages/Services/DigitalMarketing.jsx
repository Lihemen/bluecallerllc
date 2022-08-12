import React from "react";
import { PageHeader } from "../../components/PageHeader";

import { SingleService } from "../../components/SingleService";

import { useTitle } from "../../hooks/useTitle";

import digitalmarketing from "../../assets/digitalmarketing.webp";

export const DigitalMarketing = () => {
  useTitle("Services | Digital Marketing");
  return (
    <>
      <PageHeader
        name="digital marketing"
        link="services/digital-marketing"
        prev_link="services"
      />
      <SingleService
        title="Drive Business Growth with Digital and Inbound Marketing"
        summary="lorem ipsum"
        image={digitalmarketing}
        secondary_title="Title"
        secondary_summary="Summary"
      />
    </>
  );
};

