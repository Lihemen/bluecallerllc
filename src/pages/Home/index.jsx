import React from "react";

import { AboutUsSection } from "../../components/AboutUsSection";
import { CompletedProjects } from "../../components/CompletedProjects";
import { Hero } from "../../components/Hero";
import { JoinTheTeam } from "../../components/JoinUs";
import { OurServices } from "../../components/OurServices";
import { TopServices } from "../../components/TopServices";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const Home = () => {
  useTitle("Home");
  return (
    <Opacity duration={0.5}>
      <Hero />
      <CompletedProjects />
      <OurServices />
      <AboutUsSection />
      <JoinTheTeam />
      <TopServices />
    </Opacity>
  );
};
