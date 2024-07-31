"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroBgImage from "../../public/hero-bg.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="overflow-x-hidden w-screen">
      <motion.div
        className="w-screen absolute bg-cover top-0  overflow-hidden h-screen  -z-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image
          alt="hero-bg"
          src={HeroBgImage}
          className="w-screen absolute bg-cover top-0  overflow-hidden h-screen -z-10"
        />
      </motion.div>
      <div className="w-screen bg-red-700  absolute -z-10  mix-blend-color-burn h-[87vh]"></div>
      <div className="w-screen h-[86vh] flex flex-col justify-center items-center overflow-hidden">
        <motion.h1
          initial={{ y: -220, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="lg:text-6xl text-4xl text-zinc-50 lg:w-[60%] w-[94%] text-center mb-8 font-bold"
        >
          Have Broken Gadget ? We Can Fix Anything
        </motion.h1>
        <motion.p
          initial={{ y: -220, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="lg:text-sm text-xs text-zinc-50 lg:w-[40%] w-[80%] text-center mb-8 font-regular"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          exercitationem quas deleniti consectetur repellat, eaque impedit
          libero quae amet voluptate repre.
        </motion.p>
        <a href="#contact">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            className=" border-none bg-black h-[50px] px-8 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#fff] before:to-[#fff] before:transition-all before:duration-500 hover:text-zinc-950 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
          >
            Connect With Us
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
