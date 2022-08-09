import React from "react";
import { useTitle } from "../../hooks/useTitle";
import { PageHeader } from "../../components/PageHeader";

export const ProductDesign = () => {
  useTitle("Services | Product Design");
  return (
    <>
      <PageHeader
        name="product design"
        link="services/product-design"
        prev_link="services"
      />
      <h1>Product Design</h1>
    </>
  );
};

