import React from "react";
import { useTitle } from "../../hooks/useTitle";
import { PageHeader } from "../../components/PageHeader";
import { AboutUsSection } from "../../components/AboutUsSection";
import { Clients } from "../../components/Clients";
import { TeamSection } from "../../components/TeamSection";

export const About = () => {
  useTitle("About Us");
  return (
    <>
      <PageHeader name="About Us" link="about" />
      <AboutUsSection />
      <Clients />
      <TeamSection />
    </>
  );
};

