import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Hero } from '../../components/Hero';
import { CompletedProjects } from '../../components/CompletedProjects';
import { OurServices } from '../../components/OurServices';
import { AboutUsSection } from '../../components/AboutUsSection';
import { TopServices } from '../../components/TopServices';
import { JoinTheTeam } from '../../components/JoinUs';

import Opacity from '../../motions/Opacity';

export const Home = () => {
  useTitle('Home');
  return (
    <Opacity duration={0.5}>
      <Hero />
      <CompletedProjects />
      <OurServices />
      <AboutUsSection />
      <TopServices />
      <JoinTheTeam />
    </Opacity>
  );
};
