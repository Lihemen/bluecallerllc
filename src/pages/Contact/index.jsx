import React from "react";

import { ContactDetails } from "../../components/ContactDetails";
import { ContactForm } from "../../components/ContactForm";
import { LocationMap } from "../../components/Map";
import { PageHeader } from "../../components/PageHeader";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const Contact = () => {
  useTitle("Contact Us");

  return (
    <>
      <PageHeader
        name="contact us"
        link="contact"
      />
      <Opacity>
        <ContactDetails />
        <ContactForm />
        <LocationMap />
      </Opacity>
    </>
  );
};
