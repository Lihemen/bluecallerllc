import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import Typed from 'typed.js';

import hero from '../../assets/hero.jpg';

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'The Technology Works for Tomorrow_',
        'The Technology to Innovate_',
        'Bluecaller Integrated Services. Quality Assured_',
      ],
      startDelay: 0,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      className='h-[calc(100vh-80px)] w-full bg-no-repeat bg-cover bg-center xl:bg-top text-white padding-x'
      style={{ backgroundImage: `url('${hero}')` }}>
      <Slide
        triggerOnce
        direction='down'
        className='h-full w-full flex items-center justify-center text-center'>
        <div className='flex flex-col gap-10 items-center h-full justify-center text-center w-full pb-20'>
          <p className='uppercase text-white/90 tracking-wider text-xl'>
            we make innovation creation easy
          </p>
          <span
            className='text-4xl lg:text-6xl xl:text-[8rem] xl:leading-[120px] relative xl:w-4/5 font-serif'
            ref={el}></span>
          <Link
            to='/services'
            className='p-4 px-6 rounded-3xl bg-bluecaller-500 text-white tracking-widest uppercase'>
            Learn More
          </Link>
        </div>
      </Slide>
    </section>
  );
};
