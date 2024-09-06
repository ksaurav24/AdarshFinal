"use client";
import { Saira } from "next/font/google";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutBg from "../../public/about-bg.png";
import { about } from "../data/data.jsx";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const About = () => {
  return (
    <div
      id="about"
      className="w-screen px-12  overflow-hidden  relative bg-zinc-900"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 4,
          repeatType: "reverse",
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full absolute  overflow-hidden "
      >
        <Image src={aboutBg} alt="AboutSectionBg" />
      </motion.div>

      <div className="px-12 pt-10 pb-16 w-full h-full flex flex-col items-center justify-center text-zinc-50">
        <div className="flex mb-4 items-center justify-center">
          <p className="text-7xl text-red-500 font-thin">-</p>
          <h1 className="text-lg uppercase text-red-500  font-light">
            About Us
          </h1>
          <p className="text-7xl text-red-500 lg:mx-3 ml-0 font-thin">-</p>
        </div>
        <div
          className={`lg:w-[80%] w-[80vw] lg:text-4xl text-lg font-semibold text-center ${saira.className}`}
        >
          Adarsh Refrigeration & Air Conditioners delivers expert appliance
          repair services and genuine spare parts. Our skilled technicians
          ensure your devices run smoothly, focusing on professionalism and
          customer satisfaction.
        </div>
        <div className="gap-4 flex lg:flex-row flex-col  justify-between mt-10 items-center">
          {about.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-[32%] w-[80vw] aboutParent hover:-translate-y-2 overflow-hidden relative bg-zinc-800 px-4 before:bg-red-600 before:-z-10 hover:text-zinc-950 transition-all duration-500 ease-in-out hover:before:w-full before:transition-all before:duration-500 before:ease-in-out flex-row-reverse before:w-0 before:absolute before:h-full py-6 rounded-2xl z-10 justify-center  flex gap-8 items-center"
              >
                <div className="w-[65%]">
                  <h1
                    className={`lg:text-2xl font-semibold  text-xl ${saira.className}`}
                  >
                    {item.title}
                  </h1>
                  <p className="font-normal text-sm mt-2">{item.description}</p>
                </div>
                <div className="w-[60px] aboutChild h-[60px]  bg-red-500 rounded-full flex items-center justify-center">
                  <Image
                    className="aboutIcon  w-8 h-8"
                    alt={item.title}
                    src={item.icon}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
