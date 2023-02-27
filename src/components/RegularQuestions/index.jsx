import React from 'react';
import { Accordion } from '@mantine/core';
import { Question } from '../Question';

export const RegularQuestions = () => {
  return (
    <>
      <Accordion className='grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-10  mb-32'>
        <Question
          question='01. Where is your office location?'
          answer='We are located at Plot A212, P.O.W Mafemi Crescent, Opp. Daily Trust, Utako'
        />
        <Question
          question='02. What are your office hours?'
          answer='We are open 9am to 5pm every weekday'
        />
        <Question
          question='03. What do I need to know before contacting you?'
          answer='Well, the most important thing to know is what you want to accomplish. Why do I need this software? What for? What should it do? Having a clear vision in mind is crucial when ordering a software application.'
        />
        <Question
          question='04. Will my observations concerning the prototypes be factored into the final version?'
          answer='Of course. Thanks to the Agile Methodology we are able to iterate the project during its development and include your feedback to improve the product as it is being created.'
        />
        <Question
          question='05. Can the software be upgraded in the future as new technology becomes available?'
          answer='Of course! We are always happy to improve, upgrade and further develop our work.'
        />
        <Question
          question='06. How much do you charge?'
          answer='It depends on many things: project scope, time spent on the project and technological issues. We know it sounds vague but its simply honest. Remember that each project is different, especially if you had a particularly original idea.'
        />
        <Question
          question='07. Do you provide any services apart from Software Development?'
          answer='Yes, we can also help you with Product Design and Digital Transformation Strategy.'
        />
        <Question
          question='08. Do I need to be tech-savvy to cooperate with you and order a software application?'
          answer="You certainly do not have to be a software development expert, that's what we're here for. We welcome your experience in that matter if you happen to have any, but are prepared to guide you through the whole process"
        />
      </Accordion>
    </>
  );
};
