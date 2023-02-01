import React from 'react';

import { PageHeader } from '../../components/PageHeader';

import { LocationMap } from '../../components/Map';
import { ContactDetails } from '../../components/ContactDetails';
import { ContactForm } from '../../components/ContactForm';

import { useTitle } from '../../hooks/useTitle';
import Opacity from '../../motions/Opacity';

export const Contact = () => {
  useTitle('Contact Us');

  return (
    <Opacity>
      <PageHeader name='contact us' link='contact' />
      <ContactDetails />
      <ContactForm />
      <LocationMap />
    </Opacity>
  );
};
