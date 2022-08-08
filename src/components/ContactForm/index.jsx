import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaRegClock, FaPhoneAlt } from "react-icons/fa";
import { TextInput } from "../TextInput";

import "./contactform.css";

export const ContactForm = () => {
  return (
    <section className="contact__form">
      <article className="support">
        <h3>Contact</h3>
        <h1>Ask us Anything</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, nisi.
        </p>
        <div className="support__items">
          <div className="col">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <h3>24/7 Support</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="col">
            <span className="icon">
              <FaRegClock />
            </span>
            <h3>Realtime Support</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </article>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", message: "" }}
        validationSchema={Yup.object({
          firstname: Yup.string().required("Please enter your first name"),
          lastname: Yup.string().required("Please enter your last name"),
          email: Yup.string().required("Email is required"),
          message: Yup.string().required("Please enter a message"),
        })}
      >
        <Form>
          <div className="form__group">
            <TextInput
              name="firstname"
              id="firstname"
              type="text"
              placeholder="First Name"
              autoComplete="given-name"
            />
            <TextInput
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Last Name"
              autoComplete="family-name"
            />
          </div>
          <TextInput
            name="email"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </Form>
      </Formik>
    </section>
  );
};

