import React from "react";
import { PageHeader } from "../../../components/PageHeader";

import { useTitle } from "../../../hooks/useTitle";
import { TopQuestions } from "../../../components/TopQuestions";
import "./faqs.css";
import { RegularQuestions } from "../../../components/RegularQuestions";

import { ContactForm } from "../../../components/ContactForm";

import Opacity from '../../../motions/Opacity';

export const FAQs = () => {
  useTitle("Frequently Asked Questions");

  return (
    <Opacity>
      <PageHeader name="FAQs Page" link="company/faqs" />
      <section className="faqs">
        <h3 className="service__sec-title">FAQs</h3>
        <h1 className="service__title">Frequently Asked Question</h1>

        <TopQuestions />
        <RegularQuestions />
        <ContactForm />
      </section>
    </Opacity>
  );
};

