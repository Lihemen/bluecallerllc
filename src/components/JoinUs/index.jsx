import React from 'react';

export const JoinTheTeam = () => {
  return (
    <div className='padding-x padding-y flex flex-col justify-center items-center text-center gap-10 leading-10 bg-bluecaller-900 my-20 lg:my-32 text-white '>
      <h1 className='text-bl-400 uppercase text-2xl font-serif'>
        We are Hiring!!!
      </h1>
      <h3 className='text-lg xl:text-2xl xl:w-3/5 '>
        <span className='underline underline-offset-4'>Creative thinkers</span>,
        design oriented developers, data analysts and user experience engineers
        apply for work with us{' '}
      </h3>
      <button className='bg-bluecaller-400 w-max rounded-xl uppercase text-white p-4 hover:bg-bluecaller-600 transition active:scale-90'>
        join the team!
      </button>
    </div>
  );
};
