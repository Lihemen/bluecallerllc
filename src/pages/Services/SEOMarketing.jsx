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
        summary="There are 3.5 billion searches on Google daily. Clearly, consumers are turning more to search engines to help them take buying decisions. Let's help manage your search engine optimisation projects so that your brand can feature in your prospect's search. We use relevant keyword research tools, optimized content and analytics to make your brand visible on the web. <br> Grow your business globally with multiregional, multilingual &amp; multichannel SEO expertise. We guarantee to automatically fix all Pagespeed Core Web Vitals Media-related Errors and improve your website's performance."
        image={seo}
        secondary_title="Drive Sales with SEO Keywords"
        secondary_summary="We use relevant keyword research tools, optimized content and analytics that make your brand visible on the web. We leverage technology to make your page appear on the first page in search results. "
      />
    </>
  );
};

