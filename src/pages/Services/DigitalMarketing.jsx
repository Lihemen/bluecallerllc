import React from 'react';
import { PageHeader } from '../../components/PageHeader';

import { SingleService } from '../../components/SingleService';

import { useTitle } from '../../hooks/useTitle';

import digitalmarketing from '../../assets/digitalmarketing.webp';
import Opacity from '../../motions/Opacity';

export const DigitalMarketing = () => {
  useTitle('Services | Digital Marketing');
  return (
    <Opacity>
      <PageHeader
        name='digital marketing'
        link='services/digital-marketing'
        prev_link='services'
      />
      <SingleService
        title='Drive Business Growth with Digital and Inbound Marketing'
        summary="We create unique and useful content that makes audiences become loyal to your brand. We tell compelling stories about your brand that sell your products and services to potential customers through content marketing. <br> The choice for clients seeking to wow their audiences. We get to know your niche, customer base, and can represent your brand and the message you're trying to communicate in a positive and professional way."
        image={digitalmarketing}
        secondary_title='Content Marketing Tailored to your Specifications'
        secondary_summary='We work from the ground up to understand your business objectives and provide tailor-made digital strategy with the help of our carefully chosen partnered agencies. We develop content to engage with your audience, establish meaningful connections with high-quality prospects and increase the number of sales you close.'
      />
    </Opacity>
  );
};
