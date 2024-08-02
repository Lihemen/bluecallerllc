import "./App.css";

import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useScrollTop } from "./hooks/useScrollTop";
import { About } from "./pages/About";
import { FAQs } from "./pages/Company/FAQs";
// Not Hiring Yet
// import { Careers } from "./pages/Company/Careers";
import { PrivacyPolicy } from "./pages/Company/PrivacyPolicy";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Services } from "./pages/Services";
// Single Services
import { DigitalMarketing } from "./pages/Services/DigitalMarketing";
import { MobileDev } from "./pages/Services/MobileDev";
import { ProductDesign } from "./pages/Services/ProductDesign";
import { SEOMarketing } from "./pages/Services/SEOMarketing";
import { SocialMedia } from "./pages/Services/SocialMedia";
import { WebDev } from "./pages/Services/WebDev";

// import { Projects } from './pages/Projects';

function App() {
  useScrollTop();

  return (
    <AnimatePresence>
      <Navbar />
      <Outlet />
      <Footer />
    </AnimatePresence>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        children: [
          {
            index: true,
            element: <About />,
          },
        ],
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: "web-development",
            element: <WebDev />,
          },
          {
            path: "social-media",
            element: <SocialMedia />,
          },
          {
            path: "seo-marketing",
            element: <SEOMarketing />,
          },
          {
            path: "app-development",
            element: <MobileDev />,
          },
          {
            path: "digital-marketing",
            element: <DigitalMarketing />,
          },
          {
            path: "product-design",
            element: <ProductDesign />,
          },
        ],
      },
      {
        path: "company",
        children: [
          {
            path: "faqs",
            element: <FAQs />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
        ],
      },
    ],
  },
]);

export default router;
