"use client";
import React, { useState } from "react";
import { products } from "../../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Product from "./Product";

const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Page = () => {
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
          return <Product product={product} key={idx} />;
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
          return <Product product={product} key={idx} />;
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
          return <Product product={product} key={idx} />;
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
          return <Product product={product} key={idx} />;
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
          return <Product product={product} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Page;
