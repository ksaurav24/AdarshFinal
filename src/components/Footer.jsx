import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-screen justify-between lg:gap-0 gap-6 flex text-zinc-50 lg:flex-row bg-zinc-950 flex-col lg:py-8 py-8 lg:px-12 px-8">
        <div className="lg:w-[30vw] w-[85vw]">
          <h1 className="text-4xl font-semibold  mb-4">LOGO</h1>
          <p className="text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            blanditiis maxime cumque?
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
            <a href="#about" className="text-md font-light ">
              About
            </a>
            <a href="#services" className="text-md font-light">
              Services
            </a>
            <a href="#products" className="text-md font-light">
              Products
            </a>
            <a href="#contact" className="text-md font-light ">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:mt-0 mt-4">
          <h4 className="text-2xl font-semibold text-zinc-50 mb-4 ">
            Contact Us
          </h4>
          <p className="text-md font-light mb-1 text-zinc-200">
            +91 1234567890
          </p>
          <p className="text-md font-light mb-1 text-zinc-200">
            supportemail@domain.com{" "}
          </p>
          <p className="lg:w-[16vw]">
            xyz road, Pune, Maharashtra, India 410507
          </p>
        </div>
      </div>
      <div className="w-screen bg-zinc-900 flex justify-center items-center h-[60px] text-md font-light text-zinc-100">
        © 2024 Copyright by xyz
      </div>
    </>
  );
};

export default Footer;
