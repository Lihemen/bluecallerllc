import React from "react";
import { Fade } from "react-awesome-reveal";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineCog, HiOutlineHome } from "react-icons/hi";
import { IoCloudDoneOutline, IoLaptopOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";

export const OurServices = () => {
  return (
    <section className="bg-bluecaller-50 py-10 lg:py-32 padding-x">
      <h3 className="section-title">Our Services</h3>
      <h1 className="text-center">The Ultimate Possibility of The Future</h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 pt-20">
        <Fade
          cascade
          triggerOnce
          duration={750}>
          <div className="border border-bluecaller-800 min-h-[280px] rounded-xl p-4 flex flex-col justify-between gap-6">
            <span className="bg-bluecaller-400 p-4 rounded-full w-max text-white text-3xl">
              <HiOutlineHome />
            </span>
            <h3 className="font-serif text-2xl">Web Development</h3>
            <p>
              We have a team of web developers and designers who are passionate
              about creating the best user experience.
            </p>

            <Link
              className="underline underline-offset-4"
              to="/services/web-development">
              Read More
            </Link>
          </div>
          <div className="border border-bluecaller-800 min-h-[280px] rounded-xl p-4 flex flex-col justify-between gap-6">
            <span className="bg-bluecaller-400 p-4 rounded-full w-max text-white text-3xl">
              <HiOutlineCog />
            </span>
            <h3 className="font-serif text-2xl">SEO Marketing</h3>
            <p>
              We generate the best results for our clients by using the latest
              SEO practices to optimize their website and generate traffic.
            </p>

            <Link
              className="underline underline-offset-4"
              to="/services/seo-marketing">
              Read More
            </Link>
          </div>
          <div className="border border-bluecaller-800 min-h-[280px] rounded-xl p-4 flex flex-col justify-between gap-6">
            <span className="bg-bluecaller-400 p-4 rounded-full w-max text-white text-3xl">
              <MdPhoneIphone />
            </span>
            <h3 className="font-serif text-2xl">App Development</h3>
            <p>
              We have a team of mobile developers and designers who are
              determined to provide user-friendly and modern applications.
            </p>

            <Link
              className="underline underline-offset-4"
              to="/services/app-development">
              Read More
            </Link>
          </div>
          <div className="border border-bluecaller-800 min-h-[280px] rounded-xl p-4 flex flex-col justify-between gap-6">
            <span className="bg-bluecaller-400 p-4 rounded-full w-max text-white text-3xl">
              <IoCloudDoneOutline />
            </span>
            <h3 className="font-serif text-2xl">Digital Marketing</h3>
            <p>
              We help clients create digital messaging, grow their digital
              presence, connecting with new audience and customers.
            </p>

            <Link
              className="underline underline-offset-4"
              to="/services/digital-marketing">
              Read More
            </Link>
          </div>
          <div className="border border-bluecaller-800 min-h-[280px] rounded-xl p-4 flex flex-col justify-between gap-6">
            <span className="bg-bluecaller-400 p-4 rounded-full w-max text-white text-3xl">
              <IoLaptopOutline />
            </span>
            <h3 className="font-serif text-2xl">Social Media Marketing</h3>
            <p>
              We are poised to increasing social media interactions and
              engagements to promote adoption of client products and services.
            </p>

            <Link
              className="underline underline-offset-4"
              to="/services/social-media">
              Read More
            </Link>
          </div>
          <div className="border border-bluecaller-800 min-h-[280px] rounded-xl p-4 flex flex-col justify-between gap-6">
            <span className="bg-bluecaller-400 p-4 rounded-full w-max text-white text-3xl">
              <AiOutlineEye />
            </span>
            <h3 className="font-serif text-2xl">Product Design</h3>
            <p>
              Creating eye-catching and clean designs that communicate the brand
              identity and message is what we achieve at Bluecaller.
            </p>

            <Link
              className="underline underline-offset-4"
              to="/services/product-design">
              Read More
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};
