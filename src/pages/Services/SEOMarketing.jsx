import React from "react";

import { useTitle } from "../../hooks/useTitle";
import { PageHeader } from "../../components/PageHeader";

import { SingleService } from "../../components/SingleService";

import seo from "../../assets/seo.webp";

export const SEOMarketing = () => {
  useTitle("Services | SEO Marketing");
  return (
    <>
      <PageHeader
        name="seo marketing"
        link="services/seo-marketing"
        prev_link="services"
      />
      <SingleService
        title="Grow your audience and customer base with SEO Marketing"
        summary="There are 3.5 billion searches on Google daily. Clearly, consumers are turning more to search engines help them take buying decisions. Let's help you manage your search engine optimisation projects so that your brand can feature in your prospect's search. We use relevant keyword research tools, optimized content and analytics to make your brand visible on the web. <br> "
        image={seo}
        secondary_title="Title"
        secondary_summary="Summary"
      />
    </>
  );
};

