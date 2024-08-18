"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroBgImage from "../../public/hero-bg.jpg";
import Image from "next/image";
import { Saira } from "next/font/google";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Hero = () => {
  return (
    <div className="overflow-hidden h-[86vh] w-screen">
      <motion.div
        className="w-screen absolute bg-cover top-0 left-0 overflow-hidden h-screen  -z-10"
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 4,
          repeatType: "reverse",
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          priority={true}
          alt="hero-bg"
          src={HeroBgImage}
          className="w-screen heroBG absolute bg-cover top-0  overflow-hidden h-screen -z-10"
        />
      </motion.div>
      <div className="w-screen bg-red-700  absolute -z-10  mix-blend-color-burn h-[86vh]"></div>
      <div className="w-screen h-[86vh] flex flex-col justify-center items-center overflow-hidden">
        <motion.h1
          initial={{ y: -220, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`lg:text-6xl text-4xl text-zinc-50 lg:w-[54%] w-[90%] text-center mb-8 font-bold ${saira.className}`}
        >
          Reliable Appliance Repair Services You Can Trust
        </motion.h1>
        <motion.p
          initial={{ y: -220, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="lg:text-sm text-xs text-zinc-50 lg:w-[40%] w-[80%] text-center mb-8 font-regular"
        >
          we specialize in providing high-quality repair services for all major
          household appliances. Whether it's your air conditioner, refrigerator,
          or washing machine, our professional team is here to help you get back
          to comfort.
        </motion.p>
        <a href="/contact">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
            className=" border-none bg-zinc-50  h-[50px] px-8 my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-900 before:to-zinc-950 before:transition-all before:duration-500 hover:text-zinc-50 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-zinc-950"
          >
            Connect With Us
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
