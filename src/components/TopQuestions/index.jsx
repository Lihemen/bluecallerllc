import { Accordion } from '@mantine/core';
import React from 'react';

import { Question } from '../Question';

export const TopQuestions = () => {
  return (
    <Accordion>
      <Question
        question='01. How do I get a quotation for my company project?'
        answer='Send us a message describing your project . Be sure to include any
          specific technical requirements. We will get back to you within 24
          hours.'
      />
      <Question
        question='02. What is the average turnaround time for a project?'
        answer='The turnaround time for any project depends on the scope of the
        project. We make sure we cover all the aspects and requirements of the
        project to ensure reliability. Projects are usually completed within 2
        - 6 months'
      />
      <Question
        question='03. How do you guarantee the quality of service so far?'
        answer='We follow best security practices and standards for all our projects
        to ensure the highest possible quality. All our solutions are
        guaranteed to meet or exceed the highest industry standards with an
        estimated SLA of 99.9%'
      />
      <Question
        question='04. What benefits do I get with working with your company?'
        answer='We offer a dominant combination of services and solutions to enhance your business potentiality. With cost-effective value-added IT solutions, we offer resolute focus on quality and effectiveness to translate the needs of our customers into reliable products and software. We are well equipped and experienced to handle your end to end needs, starting from product conceptualization to final deployment, covering the entire spectrum of the product life cycle.'
      />
    </Accordion>
  );
};
