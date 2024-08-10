"use client";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { Bounce, ToastContainer, toast } from "react-toastify";
import useWeb3Forms from "@web3forms/react";
import React from "react";
import { Saira } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const page = () => {
  const { register, reset, handleSubmit } = useForm();
  const [isLoading, setLoading] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "65e64565-ead4-4b12-bf2c-5e688117949b";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setLoading(false);
      setIsSuccess(true);
      setResult(msg);
      reset();
      toast.success("Great! Our team will contact you soon!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    onError: (msg, data) => {
      setLoading(false);
      setIsSuccess(false);
      setResult(msg);
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  });

  return (
    <>
      <div
        id="contact"
        className="w-screen flex flex-col py-8 justify-center items-center bg-zinc-900"
      >
        <div className="flex mb-4 items-center justify-center">
          <p className="text-7xl text-red-500 font-thin">-</p>
          <h1 className="text-lg uppercase text-red-500  font-light">
            Contact Us
          </h1>
          <p className="text-7xl text-red-500 lg:mx-3 ml-3 font-thin">-</p>
        </div>
        <h1
          className={`${saira.className} lg:text-4xl font-semibold text-2xl text-zinc-50`}
        >
          Get In Touch With Us
        </h1>
        <p className="lg:w-[50vw] mt-4 w-[90vw]  text-center lg:text-lg text-sm font-light text-zinc-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          deserunt laudantium officiis dolor maiores nulla sit? Voluptate vero
          saepe illo.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contactForm  font-medium"
        >
          <div className="flex lg:w-[70vw] lg:mt-8 mt-2 flex-col gap-4 items-center justify-center">
            <div className="flex flex-col px-12 lg:flex-row lg:gap-10 gap-2">
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="lg:w-[26vw] w-[90vw] font-light"
                {...register("name", { required: true })}
                required
              />
              <input
                type="email"
                id="email"
                className="lg:w-[26vw] w-[90vw] font-light"
                placeholder="Enter Your Email"
                required
                {...register("email", { required: true })}
              />
              <input
                type="text"
                id="subject"
                placeholder="Enter Your Subject"
                className="lg:w-[26vw] w-[90vw] font-light"
                required
                {...register("subject", { required: true })}
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              className="w-[90vw] font-light resize-none lg:w-[83vw] text-zinc-900"
              {...register("message", { required: true })}
            />
          </div>
          <div className="flex mt-4 justify-center items-center">
            <button
              type="submit"
              id="submitBtn"
              onClick={() => {
                setLoading(true);
              }}
              className={`${
                isLoading
                  ? "disabledBtn bg-gray-600 hover:bg-gray-600 cursor-not-allowed lg:w-[8vw] w-[70vw]"
                  : "lg:w-[14vw] w-[90vw]"
              } bg-red-600  overflow-hidden flex justify-center items-center  disabled:bg-gray-600 disabled:hover:bg-gray-600   text-zinc-50   h-12 rounded-md cursor-pointer hover:bg-red-800 transition-all duration-500 ease-in-out`}
            >
              {isLoading ? (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    exit={{ opacity: 0, y: -50 }}
                    className=""
                  >
                    <div className="flex-col w-5 gap-4 flex items-center justify-center">
                      <div className="w-9 h-9 border-[4px] text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                "Send Message "
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
