import React from 'react';
import { Accordion } from '@mantine/core';

export const Question = ({ question, answer }) => {
  return (
    <Accordion.Item value={question}>
      <Accordion.Control className='py-8 !font-bold leading-6'>
        {question}
      </Accordion.Control>
      <Accordion.Panel className='text-left leading-10'>
        {answer}
      </Accordion.Panel>
    </Accordion.Item>
  );
};
