import React from "react";

import { AboutUsSection } from "../../components/AboutUsSection";
import { Bio } from "../../components/Bio";
import { Clients } from "../../components/Clients";
import { JoinTheTeam } from "../../components/JoinUs";
import { PageHeader } from "../../components/PageHeader";
import { TeamSection } from "../../components/TeamSection";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const About = () => {
  useTitle("About Us");
  return (
    <>
      <PageHeader
        name="About Us"
        link="about"
      />
      <Opacity duration={0.5}>
        <Bio />
        <AboutUsSection />
        <Clients />
        <JoinTheTeam />
        <TeamSection />
      </Opacity>
    </>
  );
};
