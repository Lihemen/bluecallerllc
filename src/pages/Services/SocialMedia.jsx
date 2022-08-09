import React from "react";
import { PageHeader } from "../../components/PageHeader";

import { useTitle } from "../../hooks/useTitle";

export const SocialMedia = () => {
  useTitle("Services | Social Media Marketing");

  return (
    <>
      <PageHeader
        name="social media marketing"
        link="services/social-media"
        prev_link="services"
      />
      <h1>SocialMedia</h1>
    </>
  );
};

