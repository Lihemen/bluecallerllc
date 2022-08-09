import React from "react";

import { useTitle } from "../../hooks/useTitle";
import { PageHeader } from "../../components/PageHeader";

export const SEOMarketing = () => {
  useTitle("Services | SEO Marketing");
  return (
    <>
      <PageHeader
        name="seo marketing"
        link="services/seo-marketing"
        prev_link="services"
      />
      <h1>SEOMarketing</h1>
    </>
  );
};

