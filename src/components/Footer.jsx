import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-screen justify-between lg:gap-0 gap-6 flex text-zinc-50 lg:flex-row bg-zinc-950 flex-col lg:py-8 py-8 lg:px-12 px-8">
        <div className="lg:w-[30vw] w-[85vw]">
          <h1 className="text-2xl font-semibold  mb-4">
            Adarsh Refrigeration <br /> &amp; Air Conditioners
          </h1>
          <p className="text-zinc-300 text-xs">
            At Adarsh Refrigeration &amp; Air Conditioners, we provide expert
            repair services and genuine spare parts. Our skilled technicians
            ensure your devices run smoothly, focusing on professionalism and
            customer satisfaction.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-2xl font-semibold text-zinc-50 mb-4 ">
            Quick Links
          </h4>
          <div className="flex flex-col text-md text-zinc-300 ">
            <a href="#" className="text-md font-light ">
              Home
            </a>
            <a href="/about" className="text-md font-light ">
              About
            </a>
            <a href="/services" className="text-md font-light">
              Services
            </a>
            <a href="/products" className="text-md font-light">
              Products
            </a>
            <a href="/contact" className="text-md font-light ">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:mt-0 mt-4">
          <h4 className="text-2xl font-semibold text-zinc-50 mb-4 ">
            Contact Us
          </h4>
          <a
            href="tel:+919811391053"
            className="text-md font-light mb-1 text-zinc-200"
          >
            +91 98113 91053
          </a>
          <a
            href="tel:+917982811091"
            className="text-md font-light mb-1 text-zinc-200"
          >
            +91 79828 11091
          </a>
          <a
            href="mailto:adarshgurgaon.in@gmail.com"
            className="text-md font-light mb-1 text-zinc-200"
          >
            adarshgurgaon.in@gmail.com
          </a>
          <p className="lg:w-[16vw]">
            95/17 Sadar Bazar Sector 12 Gurgaon Haryana 122001
          </p>
        </div>
      </div>
      <div className="w-screen bg-zinc-900 flex justify-center items-center h-[60px] text-md font-light text-zinc-100">
        © 2024 Copyright by Adarsh Refrigeration &amp; Air Conditioners
      </div>
    </>
  );
};

export default Footer;
