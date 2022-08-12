import React from "react";
import { PageHeader } from "../../components/PageHeader";

import { useTitle } from "../../hooks/useTitle";
import { SingleService } from "../../components/SingleService";

import socialmedia from "../../assets/socialmedia.webp";

export const SocialMedia = () => {
  useTitle("Services | Social Media Marketing");

  return (
    <>
      <PageHeader
        name="social media marketing"
        link="services/social-media"
        prev_link="services"
      />
      <SingleService
        title="Connect with your Audience on Social Media"
        summary="Your customers and prospects are on Social media. Your brand should be too. Let's help you manage your social media marketing projects so that your brand can feature in your prospect's social media. We use relevant keyword research tools, optimized content and analytics to make your brand visible on the web. <br> 
        We help Clients leverage social media for their business growth by developing, implementing and managing social media marketing campaigns that create awareness, engage with prospects and turn followers into customers."
        image={socialmedia}
        secondary_title="Title"
        secondary_summary="Summary"
      />
    </>
  );
};

