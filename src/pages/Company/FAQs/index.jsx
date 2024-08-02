import React from "react";

import { ContactForm } from "../../../components/ContactForm";
import { PageHeader } from "../../../components/PageHeader";
import { RegularQuestions } from "../../../components/RegularQuestions";
import { TopQuestions } from "../../../components/TopQuestions";
import { useTitle } from "../../../hooks/useTitle";
import { Opacity } from "../../../motions/Opacity";

export const FAQs = () => {
  useTitle("Frequently Asked Questions");

  return (
    <>
      <PageHeader
        name="FAQs Page"
        link="company/faqs"
      />
      <Opacity>
        <section className="faqs">
          <div className="container padding-y">
            <div className="space-y-8">
              <TopQuestions />
              <RegularQuestions />
            </div>
          </div>

          <ContactForm />
        </section>
      </Opacity>
    </>
  );
};
