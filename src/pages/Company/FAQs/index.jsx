import React from "react";
import { PageHeader } from "../../../components/PageHeader";

import { useTitle } from "../../../hooks/useTitle";

export const FAQs = () => {
  useTitle("Frequently Asked Questions");

  return (
    <>
      <PageHeader name="Frequently Asked Questions" link="company/faqs" />
    </>
  );
};

