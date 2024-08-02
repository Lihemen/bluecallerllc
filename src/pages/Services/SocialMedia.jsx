import React from "react";

import socialmedia from "../../assets/socialmedia.webp";
import { PageHeader } from "../../components/PageHeader";
import { SingleService } from "../../components/SingleService";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const SocialMedia = () => {
  useTitle("Services | Social Media Marketing");

  return (
    <Opacity>
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
        secondary_title="Audit and Improve Your Social Media Campaigns"
        secondary_summary="We create social media ad campaigns with organic content that connects your business with leads, by targeting specific audiences, posting, replying to comments and improving visibility. We track and measure social media campaign results over time and update you with the reports. We ensure your marketing goals are successfully met and identify areas of improvement."
      />
    </Opacity>
  );
};
