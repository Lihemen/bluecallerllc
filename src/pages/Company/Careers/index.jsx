import React from 'react';
import { PageHeader } from '../../../components/PageHeader';
import Opacity from '../../../motions/Opacity';

import { useTitle } from '../../../hooks/useTitle';

export const Careers = () => {
  useTitle('We are Hiring');

  return (
    <Opacity>
      <PageHeader name='We are Hiring' link='company/careers' />
    </Opacity>
  );
};
