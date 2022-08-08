import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

import { FAQs } from "./pages/Company/FAQs";
import { Careers } from "./pages/Company/Careers";

// Single Services
import { WebDev } from "./pages/Services/WebDev";
import { SocialMedia } from "./pages/Services/SocialMedia";
import { SEOMarketing } from "./pages/Services/SEOMarketing";
import { ProductDesign } from "./pages/Services/ProductDesign";
import { MobileDev } from "./pages/Services/MobileDev";
import { DigitalMarketing } from "./pages/Services/DigitalMarketing";

function App() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services">
          <Route index element={<Services />} />
          <Route path="web-development" element={<WebDev />} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="seo-marketing" element={<SEOMarketing />} />
          <Route path="app-development" element={<MobileDev />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="product-design" element={<ProductDesign />} />
        </Route>
        <Route path="pages/not-found" element={<NotFound />} />
        <Route path="projects" element={<Projects />} />
        <Route path="company">
          <Route path="faqs" element={<FAQs />} />
          <Route path="careers" element={<Careers />} />
        </Route>
        <Route path="*" element={<Navigate to="/pages/not-found" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

