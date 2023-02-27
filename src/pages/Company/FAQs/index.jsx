import React from 'react';
import { PageHeader } from '../../../components/PageHeader';

import { useTitle } from '../../../hooks/useTitle';
import { TopQuestions } from '../../../components/TopQuestions';
import { RegularQuestions } from '../../../components/RegularQuestions';

import { ContactForm } from '../../../components/ContactForm';

import Opacity from '../../../motions/Opacity';

export const FAQs = () => {
  useTitle('Frequently Asked Questions');

  return (
    <Opacity>
      <PageHeader name='FAQs Page' link='company/faqs' />
      <section className='faqs'>
        <div className='padding-x padding-y'>
          <div className='space-y-8'>
            <TopQuestions />
            <RegularQuestions />
          </div>
        </div>

        <ContactForm />
      </section>
    </Opacity>
  );
};
