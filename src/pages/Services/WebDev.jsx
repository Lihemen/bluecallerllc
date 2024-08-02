import React from "react";

import webdev from "../../assets/webdev.webp";
import { PageHeader } from "../../components/PageHeader";
import { SingleService } from "../../components/SingleService";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const WebDev = () => {
  useTitle("Services | Website Development");

  return (
    <Opacity>
      <PageHeader
        name="website development"
        link="services/website-development"
        prev_link="services"
      />
      <SingleService
        title="Empowering Enterprises With Innovative Web Applications"
        summary="Bluecaller's custom web application development services and open-source web technologies include everything from a simple WordPress website to the most complex e-commerce portals and cloud-based Artificial Intelligence implemented networking sites. <br> By leveraging innovative technologies and incorporating efficient strategies, we offer web application development services, deployment methods, and testing solutions for cloud-based websites. We are a web application development company that builds unique, highly responsive, userfriendly and cross-platform websites that facilitate open sharing and effectively handles software upgrades. <br> From custom software development, web application development services, E-Commerce website development, CMS portal development, we offer integrated operations and smooth functioning for every business and industry. With technological innovations stirring up revolutions beyond the business landscape, we as a web application development company provide enterprises the latest trends to embrace digitization."
        image={webdev}
        secondary_title="Custom and Feature-rich Web Application Development"
        secondary_summary="Bluecaller strives to deliver technologically advanced and sophisticated custom web application development services to cater to the business needs of the customers. Our cloud-native applications built for AWS or Google Cloud increase performance, reduce downtime and enhance business agility. Bluecaller's custom web application developers present a coherent strategy for building modern mobile and web applications that are fast, interactive, responsive, and a pleasure to use."
      />
    </Opacity>
  );
};
