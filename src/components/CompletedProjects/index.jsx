import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { Slide } from 'react-awesome-reveal';

import { TextInput } from '../TextInput';

import quoteimg from '../../assets/quoteimg.webp';

export const CompletedProjects = () => {
  const getQuote = (values) => {
    console.log(values);
  };
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 h-full child:rounded-xl py-20 lg:py-36 padding-x '>
      <div className='space-y-6 flex flex-col'>
        <Slide direction='left' triggerOnce>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='bg-bluecaller-50 p-8 py-12 rounded-xl'>
              <h1 className='text-3xl flex items-start'>
                20 <span className='text-xl'>+</span>{' '}
              </h1>
              <p>Projects</p>
              <Link to='/projects'>Our Projects</Link>
            </div>

            <div className='bg-bluecaller-400 text-white p-8 py-12 rounded-xl'>
              <h1 className='text-3xl flex items-start'>
                10 <span className='text-xl'>+</span>{' '}
              </h1>
              <p>Awards</p>
              <Link to='/team#achievements'>Our Achievements</Link>
            </div>
          </div>
        </Slide>
        <Slide direction='left' triggerOnce>
          <div className='flex flex-col gap-10 bg-bluecaller-900 rounded-xl p-8 text-white'>
            <h2 className='text-lg'>Digitize Your Business</h2>
            <p className='text-lg'>
              Integrity First. Service Always. Innovation Never Ceases. Grow
              your business and reach out to connect people through information.
              We offer seamless connection through total connectivity
            </p>
            <Link
              to='/contact'
              className='p-3 px-5 rounded-xl text-white bg-bluecaller-400 w-max'>
              Contact Us
            </Link>
          </div>
        </Slide>
      </div>
      <Slide
        triggerOnce
        direction='right'
        className={`p-8 flex flex-col w-full flex-1 min-h-[24rem] text-lg gap-4 justify-end text-white`}
        style={{
          background: `url(${quoteimg})`,
          backgroundPosition: 'cover',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <div>
          <p className='text-bluecaller-50 pb-4'>
            Inventing not for business, inventing for the future. Get a free
            quote.{' '}
          </p>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={(val, actions) => {
              getQuote(val);
              actions.resetForm();
            }}>
            <Form className='grid grid-cols-4 '>
              <TextInput
                name='email'
                id='email'
                type='email'
                placeholder='Enter your email'
                className='text-white col-span-3'
              />
              <button className='p-3 bg-bluecaller-400 text-white'>
                Get Quote
              </button>
            </Form>
          </Formik>
        </div>
      </Slide>
    </div>
  );
};
