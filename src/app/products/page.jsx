"use client";
import React, { useState } from "react";
import { products } from "../../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Page = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div id="products" className="w-screen py-12 bg-white flex flex-col ">
      <h1
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Some of our trusted products for your appliances
      </h1>
      <h3
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Fridge Spare Parts
      </h3>
      <div
        id="Fridge"
        className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4"
      >
        {products.Fridge.map((product, idx) => {
          return (
            <a
              key={idx}
              {...(product.link && {
                href: product.link,
              })}
            >
              <div
                onClick={() => {
                  setShowOverlay(!showOverlay);
                }}
                className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl"
              >
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] mx-auto object-contain"
                  />
                  <AnimatePresence>
                    {showOverlay && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        {...(product.link && { animate: { opacity: 1 } })}
                        exit={{ opacity: 0 }}
                        className="absolute flex flex-col justify-center items-center gap-2 top-0 left-0 w-full h-full bg-zinc-800/20 "
                      >
                        <h3 className="px-4 py-2 rounded-md text-lg font-medium text-center bg-zinc-950 text-zinc-50">
                          {product.link ? "Buy Now" : "Contact Us for Price"}
                        </h3>
                        <a
                          href={`https://wa.me/+919811391053/text=I+want+to+buy+this+product+${encodeURIComponent(
                            product.title
                          )}`}
                          className=" px-4 py-2 rounded-md text-lg font-medium text-center bg-zinc-950 text-zinc-50"
                        >
                          Whatsapp Us
                        </a>
                        <a
                          href={`tel:+919811391053`}
                          className="px-3 py-1 rounded-md text-lg font-medium text-center bg-zinc-50 text-zinc-950"
                        >
                          Call Us
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-4 flex flex-col rounded-lg bg-zinc-100 w-full h-[156px] ">
                  <h3 className="text-sm font-regular h-[126px]">
                    {product.title}
                  </h3>
                  <h4 className="text-md font-semibold"> {product.price}</h4>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl text-2xl mt-8 mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        AC Spare Parts
      </h3>
      <div
        id="AC"
        className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4"
      >
        {products.AC.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] mx-auto object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col rounded-lg bg-zinc-100 w-full h-[156px] ">
                  <h3 className="text-sm font-regular h-[126px]">
                    {product.title}
                  </h3>
                  <h4 className="text-md font-semibold"> {product.price}</h4>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl mt-8 text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Microwave Spare Parts
      </h3>
      <div
        id="Microwave"
        className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4"
      >
        {products.Microwave.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] mx-auto object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col rounded-lg bg-zinc-100 w-full h-[156px] ">
                  <h3 className="text-sm font-regular h-[126px]">
                    {product.title}
                  </h3>
                  <h4 className="text-md font-semibold"> {product.price}</h4>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl mt-8 text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Washing Machine Spare Parts
      </h3>
      <div
        id="Washing%20Machine"
        className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4"
      >
        {products.Washing_Machine.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[90%] mx-auto object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col rounded-lg bg-zinc-100 w-full h-[156px] ">
                  <h3 className="lg:text-sm text-xs  font-regular h-[126px]">
                    {product.title}
                  </h3>
                  <h4 className="text-md font-semibold"> {product.price}</h4>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <h3
        className={`${saira.className} lg:text-4xl mt-8 text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        RO Spare Parts
      </h3>
      <div
        id="RO"
        className="grid lg:grid-cols-4 grid-cols-1 mx-auto gap-6 mt-4"
      >
        {products.RO.map((product, idx) => {
          return (
            <a key={idx} href={product.link}>
              <div className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl">
                <div className="w-full p-6 h-[200px] overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={`${product.title}_Image`}
                    className="h-[95%] mx-auto object-contain"
                    unoptimized={true}
                  />
                </div>
                <div className="p-4 flex flex-col rounded-lg bg-zinc-100 w-full h-[156px] ">
                  <h3 className="text-sm font-regular h-[126px]">
                    {product.title}
                  </h3>
                  <h4 className="text-md font-semibold"> {product.price}</h4>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
