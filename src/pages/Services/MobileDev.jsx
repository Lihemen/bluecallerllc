import React from "react";

import iphonemockup from "../../assets/iphonemockup.webp";
import { PageHeader } from "../../components/PageHeader";
import { SingleService } from "../../components/SingleService";
import { useTitle } from "../../hooks/useTitle";
import { Opacity } from "../../motions/Opacity";

export const MobileDev = () => {
  useTitle("Services | Mobile App Development");

  return (
    <>
      <PageHeader
        name="mobile app development"
        link="services/app-development"
        prev_link="services"
      />
      <Opacity>
        '
        <SingleService
          title="End To End Mobile App Development Services"
          summary="We bring innovative ideas to life by not just building mobile apps but also by crafting top-notch mobile experiences for both Android as well as iOS users. With our mobile application development services, we'll guide you through our custom app development process from idea exploration and in-depth user research, all the way through to market deployment. Our team of mobile app developers leverages their expertise to deliver consistent mobile experiences across multiple platforms without sacrificing the UI/UX and user-friendliness. <br>
        From smooth onboarding to intuitive navigation, our iOS, Android and Hybrid mobile applications lead visitors along an innovatively crafted path to improve customer satisfaction and boost conversions. Tap into our custom mobile app development services for intelligent, innovative and unique applications based on your business model as well as the need of your end customers.
        "
          image={iphonemockup}
          secondary_title="Deliver Efficiency With Android, iOS or Cross-platform Mobile Applications"
          secondary_summary="Whether you require a mobile application from scratch or you're upgrading an existing enterprise legacy app, our mobile app design and development consultants have you covered. We leverage advanced platforms such as Google's UI toolkit, Flutter and React Native to build incredibly innovative Hybrid and Native mobile applications. Enjoy the ease of working along side our mobile app developers and enhance the speed and quality of your project."
        />
      </Opacity>
    </>
  );
};
