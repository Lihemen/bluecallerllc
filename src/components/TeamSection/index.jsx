import React from 'react';
import profile from '../../assets/profile.webp';

import { Profile } from '../Profile';
import './teamsection.css';

export const TeamSection = () => {
  return (
    <div className='team__section'>
      <h3 className='service__sec-title'>Our Team</h3>
      <h1 className='service__title'>Meet Our Professionals</h1>
      <div className='team__grid'>
        <Profile
          name='shima aga'
          image={profile}
          title='co-founder'
          facebook='shimaaga'
          linkedin='shimaaga'
          twitter='shimaaga'
        />
        <Profile
          name='joseph obasi'
          image={profile}
          title='co-founder'
          facebook='josephobasi'
          linkedin='josephobasi'
          twitter='obasi2020'
        />
        <Profile
          name='Jamil Abubakar'
          image={profile}
          title='head of data'
          facebook='jamilabubakar'
          linkedin='jamilabubakar'
          twitter='jamilabubakar'
        />
        <Profile
          name='madu victor'
          image={profile}
          title='lead engineer'
          facebook='maduvictor'
          linkedin='maduvictor'
          twitter='maduvictor'
        />
      </div>
    </div>
  );
};
