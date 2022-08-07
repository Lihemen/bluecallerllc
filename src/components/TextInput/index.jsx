import React from "react";
import { useField } from "formik";

import "./textinput.css";

export const TextInput = (props) => {
  const [field, meta] = useField(props);

  return (
    <div className="input__group">
      <label htmlFor={props.name || props.id} className="input__label">
        {props.label}
      </label>
      <input className="input" {...props} {...field} />
      {meta.touched && meta.error ? (
        <span className="text-danger">{meta.error}</span>
      ) : null}
    </div>
  );
};

