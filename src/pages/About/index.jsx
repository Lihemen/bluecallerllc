import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { PageHeader } from '../../components/PageHeader';
import { AboutUsSection } from '../../components/AboutUsSection';
import { Clients } from '../../components/Clients';
import { TeamSection } from '../../components/TeamSection';

import Opacity from '../../motions/Opacity';

export const About = () => {
  useTitle('About Us');
  return (
    <Opacity duration={0.5}>
      <PageHeader name='About Us' link='about' />
      <AboutUsSection />
      <Clients />
      <TeamSection />
    </Opacity>
  );
};
