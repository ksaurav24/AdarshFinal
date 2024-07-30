"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroBgImage from "../../public/hero-bg.jpg";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <motion.div
        className="w-screen absolute bg-cover top-0  overflow-hidden h-screen -z-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image
          alt="hero-bg"
          src={HeroBgImage}
          className="w-screen absolute bg-cover top-0  overflow-hidden h-screen -z-10"
        />
      </motion.div>
      <div className="w-screen bg-red-700  absolute -z-10  mix-blend-color-burn h-[87vh]"></div>
      <div className="w-screen h-[87vh] flex flex-col justify-center items-center"></div>
    </>
  );
};

export default Hero;
