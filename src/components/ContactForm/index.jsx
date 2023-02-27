import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaRegClock, FaPhoneAlt } from 'react-icons/fa';
import { TextInput } from '../TextInput';
import { TextArea } from '../TextArea';

import { Slide } from 'react-awesome-reveal';

import './contactform.css';

export const ContactForm = () => {
  return (
    <Slide triggerOnce direction='left' cascade>
      <section className='contact__form padding-x bg-bluecaller-50 padding-y'>
        <article className='support'>
          <h3 className='font-serif text-2xl text-bluecaller-400 uppercase'>
            Contact
          </h3>
          <h1 className='service__title'>Ask us Anything</h1>
          <p>We provide excellent consulting services to our clients.</p>
          <div className='support__items'>
            <div className='col'>
              <span className='icon'>
                <FaPhoneAlt />
              </span>
              <h3>24/7 Support</h3>
              <p>Round the clock support.</p>
            </div>
            <div className='col'>
              <span className='icon text-white'>
                <FaRegClock />
              </span>
              <h3>Realtime Support</h3>
              <p>Send us a message.</p>
            </div>
          </div>
        </article>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            message: '',
          }}
          validationSchema={Yup.object({
            firstname: Yup.string().required('Please enter your first name'),
            lastname: Yup.string().required('Please enter your last name'),
            email: Yup.string().required('Email is required'),
            message: Yup.string().required('Please enter a message'),
          })}>
          <Form
            className='gap-9 flex flex-col shadow-lg rounded-xl bg-white'
            data-netlify='true'
            netlify>
            <TextInput
              name='firstname'
              id='firstname'
              type='text'
              placeholder='First Name'
              autoComplete='given-name'
            />
            <TextInput
              name='lastname'
              id='lastname'
              type='text'
              placeholder='Last Name'
              autoComplete='family-name'
            />
            <TextInput
              name='email'
              id='email'
              type='email'
              placeholder='Your Email'
            />
            <TextArea name='message' id='message' placeholder='Your message' />

            <button className='bg-bluecaller-900 p-4 text-white' type='submit'>
              Send Message
            </button>
          </Form>
        </Formik>
      </section>
    </Slide>
  );
};
