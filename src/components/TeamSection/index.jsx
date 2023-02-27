import React from 'react';
import profile from '../../assets/profile.webp';

import { Profile } from '../Profile';

export const TeamSection = () => {
  return (
    <div className='padding-x '>
      <h3 className='section-title'>Our Team</h3>
      <h1 className='text-center'>Meet Our Professionals</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 padding-y text-center'>
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
          name='david ochouma'
          image={profile}
          title='lead engineer'
          facebook='davidochouma'
          linkedin='davidochouma'
          twitter='davidochouma'
        />
      </div>
    </div>
  );
};
