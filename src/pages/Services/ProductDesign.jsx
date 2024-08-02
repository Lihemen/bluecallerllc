import React from "react";

import productservice from "../../assets/engineering_services.webp";
import { PageHeader } from "../../components/PageHeader";
import { SingleService } from "../../components/SingleService";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const ProductDesign = () => {
  useTitle("Services | Product Design");
  return (
    <>
      <PageHeader
        name="product design"
        link="services/product-design"
        prev_link="services"
      />
      <Opacity>
        <SingleService
          title="We Deliver High Quality and Cost-effective Automated Engineering Products"
          summary="We are a full-lifecycle product engineering and software development company that unites complex engineering experience, design, and prompt delivery to bring you exceptional software products in the shortest time. With the technologies and strategies that shook the world of business by storm – AI, Cloud Computing, SaaS Modeling Tools, IoT, Social Technologies and Networks, your business drives more customer base and ROI. ThinkPalm has developed futuristic products for the global giants of Manufacturing Industries, Retail Sectors and Telecom Industries, International Healthcare Academies’ and Educational Institutes."
          image={productservice}
          secondary_title="Creating Value With Our Product Engineering Services & Solutions"
          secondary_summary="Implementing end-to-end product engineering solutions & utilizing the dogmatic agile product development approach ThinkPalm's team of expert engineers deliver on-time & within budget. Throughout the lifecycle of product development solutions; from the conceptualization of the idea to the deployment of products, our team owes to build smart, secure and cross-platform solutions that reduce the overall costs of running a business. We also continue to provide aftermarket services that have been instrumental in assisting clients to improve their business and reduce operational costs."
        />
      </Opacity>
    </>
  );
};
