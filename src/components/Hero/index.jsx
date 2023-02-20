import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Typed from 'typed.js';

import heroimg1 from '../../assets/heroimg1.webp';
import heroimg2 from '../../assets/heroimg2.webp';

import './hero.css';

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'The Technology Works for Tomorrow',
        'The Technology to Innovate',
        'Bluecaller Integrated Services. Quality Assured',
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className='hero'>
      <Slide triggerOnce direction='up'>
        <div className='hero__text'>
          <h4 translate='no' className='company__name'>
            BLUECALLER INTEGRATED SERVICES
          </h4>
          <span className='hero__title relative' ref={el}></span>
          <p className='!text-base lg:!text-xl !leading-8 xl:!leading-[60px]'>
            Consulting. Integration. Innovation. Bluecaller is positioned to
            delivering the ideal solutions to scale your business and reach out
            to new customers.
          </p>
          <Link to='/services'>Learn More</Link>
        </div>

        <div className='hero__images'>
          <img src={heroimg1} alt='team meeting around a computer' />
          <img src={heroimg2} alt='developer pointing to a laptop' />
        </div>
      </Slide>
    </section>
  );
};
