import React from 'react';
import { DesignProcess } from '../DesignProcess';
import { Slide, Fade } from 'react-awesome-reveal';

import './singleservice.css';

const NewLineText = ({ text }) => {
  return text.split('<br>').map((str, index) => <p key={index}>{str}</p>);
};
export const SingleService = ({
  title,
  image,
  summary,
  secondary_title,
  secondary_summary,
}) => {
  return (
    <div className='padding-x padding-y single__service-section leading-10 mb-32'>
      <div className='row'>
        <div className='col-md-8 leading-10'>
          <Slide direction='up' triggerOnce>
            <h2 className='pb-1r'>{title}</h2>
          </Slide>
          <Fade triggerOnce>
            <NewLineText text={summary} />
          </Fade>
        </div>
        <div className='col-md-4'>
          <img src={image} alt={title} className='object-cover h-[400px]' />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Slide direction='up' triggerOnce>
            <h2 className='py-1r'>{secondary_title} </h2>
          </Slide>
          <Fade triggerOnce>
            <NewLineText text={secondary_summary} />
          </Fade>
        </div>
      </div>

      <DesignProcess />
    </div>
  );
};
