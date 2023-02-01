import React from 'react';
import teamtogether from '../../assets/teamtogether.webp';
import {
  IoDiamondOutline,
  IoFlagOutline,
  IoStatsChartOutline,
} from 'react-icons/io5';

import { JackInTheBox, Slide } from 'react-awesome-reveal';

import testimonial1 from '../../assets/testimonial1.webp';
import testimonial2 from '../../assets/testimonial2.webp';
import testimonial3 from '../../assets/testimonial3.webp';

import './aboutussection.css';

export const AboutUsSection = () => {
  return (
    <section className='about__hero'>
      <JackInTheBox triggerOnce delay={200}>
        <div className='image__container'>
          <img src={teamtogether} alt='team holding hands together' />
          <div className='card rounded-xl bg-bl-800 bg-opacity-90'>
            <p>
              <span>5,000+</span> <IoStatsChartOutline />{' '}
            </p>
            <p>Trusted customers all over the world.</p>

            <div className='icons flex'>
              <img src={testimonial1} alt='person1' />
              <img src={testimonial2} alt='person2' />
              <img src={testimonial3} alt='person3' />
            </div>
          </div>
        </div>
      </JackInTheBox>
      <div className='col'>
        <Slide direction='right' triggerOnce>
          <h3>About Us</h3>
          <h1>We Create The Perfect Tech Experience</h1>
          <p></p>

          <ul>
            <li>
              <span className='icon'>
                <IoDiamondOutline />
              </span>
              <div>
                <h4>Our Vision</h4>
                <p>
                  Our vision is to be the leading software development company
                  in sub-saharan Africa by providing services that are
                  cost-effective, reliable, and technologically advanced. We are
                  committed to providing our clients with the best possible
                  solutions.
                </p>
              </div>
            </li>
            <li>
              <span className='icon'>
                <IoFlagOutline />
              </span>
              <div>
                <h4>Our Mission</h4>
                <p>
                  Bluecaller's mission is to serve as a trusted partner to our
                  clients by responsibly providing software services that enable
                  growth and business development by creating new ways to
                  connect with your customers.
                </p>
              </div>
            </li>
          </ul>
        </Slide>
      </div>
    </section>
  );
};
