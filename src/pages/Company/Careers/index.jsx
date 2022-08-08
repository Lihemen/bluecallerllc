import React from "react";
import { PageHeader } from "../../../components/PageHeader";
import { useTitle } from "../../../hooks/useTitle";

export const Careers = () => {
  useTitle("We are Hiring");
  return (
    <>
      <PageHeader name="We are Hiring" link="company/careers" />
    </>
  );
};

