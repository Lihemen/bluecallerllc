import React from 'react';

import { Link } from 'react-router-dom';

export const PageHeader = ({ name, link, prev_link }) => {
  return (
    <section className='bg-bluecaller-900 padding-x padding-y text-white text-center space-y-10 min-h-[50vh] flex items-center flex-col justify-center'>
      <h2 className='font-serif text-6xl capitalize'>{name}</h2>

      <ul className='flex list-inside list-disc items-center justify-center gap-10 flex-wrap capitalize'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {prev_link && (
          <li>
            <Link to={`/${prev_link}`}>{prev_link}</Link>
          </li>
        )}
        <li>
          <Link to={`/${link}`}>{name}</Link>
        </li>
      </ul>
    </section>
  );
};
