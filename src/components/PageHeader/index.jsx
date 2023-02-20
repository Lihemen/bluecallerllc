import React from 'react';

import { Link } from 'react-router-dom';

import './pageheader.css';

export const PageHeader = ({ name, link, prev_link }) => {
  return (
    <section className='single__page__header'>
      <h2 className='font-serif'>{name}</h2>

      <ul>
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
