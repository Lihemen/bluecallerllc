import React from "react";
import { useTitle } from "../../hooks/useTitle";
import { Hero } from "../../components/Hero";
import { CompletedProjects } from "../../components/CompletedProjects";
import { OurServices } from "../../components/OurServices";
import { AboutUsSection } from "../../components/AboutUsSection";
import { TopServices } from "../../components/TopServices";

export const Home = () => {
  useTitle("Home");
  return (
    <>
      <Hero />
      <CompletedProjects />
      <OurServices />
      <AboutUsSection />
      <TopServices />
    </>
  );
};

