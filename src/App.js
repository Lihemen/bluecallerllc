import React, { useEffect } from 'react';
import { useLocation, Outlet, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
import { NotFound } from './pages/NotFound';
// import { Projects } from './pages/Projects';

import { FAQs } from './pages/Company/FAQs';
// Not Hiring Yet
// import { Careers } from "./pages/Company/Careers";
import { PrivacyPolicy } from './pages/Company/PrivacyPolicy';

// Single Services
import { WebDev } from './pages/Services/WebDev';
import { SocialMedia } from './pages/Services/SocialMedia';
import { SEOMarketing } from './pages/Services/SEOMarketing';
import { ProductDesign } from './pages/Services/ProductDesign';
import { MobileDev } from './pages/Services/MobileDev';
import { DigitalMarketing } from './pages/Services/DigitalMarketing';

import './App.css';

function App() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
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
    path: '/',
    errorElement: <NotFound />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        children: [
          {
            index: true,
            element: <About />,
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'services',
        children: [
          {
            index: true,
            element: <Services />,
          },
          {
            path: 'web-development',
            element: <WebDev />,
          },
          {
            path: 'social-media',
            element: <SocialMedia />,
          },
          {
            path: 'seo-marketing',
            element: <SEOMarketing />,
          },
          {
            path: 'app-development',
            element: <MobileDev />,
          },
          {
            path: 'digital-marketing',
            element: <DigitalMarketing />,
          },
          {
            path: 'product-design',
            element: <ProductDesign />,
          },
        ],
      },
      {
        path: 'company',
        children: [
          {
            path: 'faqs',
            element: <FAQs />,
          },
          {
            path: 'privacy-policy',
            element: <PrivacyPolicy />,
          },
        ],
      },
    ],
  },
]);

export default router;
