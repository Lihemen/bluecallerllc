import React from "react";
import { useField } from "formik";

export const TextArea = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="input__group">
      <label htmlFor={props.name || props.id} className="input__label">
        {props.label}
      </label>
      <textarea className="input" {...props} {...field}></textarea>
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

