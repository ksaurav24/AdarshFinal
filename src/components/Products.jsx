"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/data";
import { Saira } from "next/font/google";
import Image from "next/image";
import Category from "./Category";
const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Products = () => {
  const [onHover, setOnHover] = React.useState(false);
  return (
    <div id="products" className="w-screen py-12 flex flex-col ">
      <h1
        className={`${saira.className} lg:text-4xl text-2xl mb-8 font-semibold text-center text-zinc-950 capitalize`}
      >
        Some of our trusted products for your appliances
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 relative px-12 gap-6 mt-4">
        {["AC", "Microwave", "Washing Machine"].map((category, idx) => {
          return <Category category={category} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Products;
