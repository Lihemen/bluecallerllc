import React from 'react';
import { useField } from 'formik';

export const TextArea = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label
        htmlFor={props.name || props.id}
        className='block text-base tracking-wide text-[#54565b] dark:text-wdark-50 capitalize'>
        {label} {props.required && <span className='text-red-400'>*</span>}
      </label>
      <textarea
        className='placeholder:capitalize w-full ring-1 ring-gray-200 bg-transparent placeholder:text-base  resize-none h-40 p-4 text-sm outline-none text-[#54565B] dark:text-wdark-50'
        placeholder={placeholder}
        {...field}></textarea>
      {meta.error && meta.touched && (
        <span className='block text-red-500 text-xs pt-2'>{meta.error} </span>
      )}
    </div>
  );
};
