"use client;";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Service = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const handleClick = () => {
    setShowOverlay(true);
  };
  const handleClose = () => {
    setShowOverlay(false);
  };
  const handleToggle = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <div
      onClick={handleToggle}
      className="lg:w-[20vw] w-[80vw] mx-auto h-[360px] cursor-pointer  lg:mr-20 my-8 serviceParent bg-white z-10 overflow-hidden shadow-xl rounded-lg "
    >
      <div className="w-full h-[200px] before:w-full before:h-full overflow-hidden before before:absolute before:mix-blend-color-burn before:bg-red-600 serviceChild relative">
        <Image
          src={props.service.image}
          alt={`${props.service.title}_Image`}
          className="serviceImg"
        />
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute flex flex-col justify-center items-center gap-2 top-0 left-0 w-full h-full bg-zinc-900 z-50 "
            >
              <h3 className="mb-2 px-1 text-center text-zinc-50 text-xl">
                Get Expert Repair Service at just ₹299
              </h3>
              <a
                href="https://wa.me/+919811391053"
                className=" px-4 py-2 rounded-md text-lg font-medium text-center bg-zinc-50 text-zinc-950 shadow-lg hover:shadow-zinc-200/20 transition-all duration-300 ease-in-out"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919811391053"
                className="px-3 py-1 rounded-md text-lg font-medium text-center bg-zinc-50 text-zinc-950 shadow-lg hover:shadow-zinc-200/20 transition-all duration-300 ease-in-out"
              >
                Call Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{props.service.title}</h1>
        <p className="text-sm mt-2">{props.service.description}</p>
      </div>
    </div>
  );
};

export default Service;
