import React, { useState } from 'react';
import { useField } from 'formik';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export const TextInput = (props) => {
  const [field, meta] = useField(props);
  const [type, setType] = useState(props.type);
  const togglePasswordVisibility = () =>
    type === 'password' ? setType('text') : setType('password');

  return (
    <div className={'relative w-full' + props.className}>
      {props.label && (
        <label
          htmlFor={props.name || props.id}
          className='block mb-5 text-base tracking-wide text-[#54565b] capitalize'>
          {props.label}{' '}
          {props.required && <span className='text-red-400'>*</span>}
        </label>
      )}
      <input
        type={type}
        id={props.id}
        className='block w-full py-4 border bg-transparent text-base px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-bl-400 appearance-none placeholder:capitalize'
        placeholder={props.placeholder}
        {...field}
      />
      {props.type === 'password' && (
        <AiOutlineEyeInvisible
          className='cursor-pointer text-2xl text-gray-400 absolute right-3 top-16 active:drop-shadow-md'
          onClick={togglePasswordVisibility}
        />
      )}
      {meta.error && meta.touched && (
        <span className='block text-red-500 text-xs pt-2'>{meta.error} </span>
      )}
    </div>
  );
};
