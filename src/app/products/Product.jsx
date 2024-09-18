"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Product = ({ product }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <a {...(product.link && { href: product.link })}>
      <div
        onClick={() => {
          setShowOverlay(!showOverlay);
        }}
        className="lg:w-[22vw] w-[80vw] rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[360px] bg-white shadow-xl"
      >
        <div className="w-full p-6 h-[200px] overflow-hidden relative">
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                initial={{ opacity: 0 }}
                {...(!product.link && { animate: { opacity: 1 } })}
                exit={{ opacity: 0 }}
                className="absolute flex flex-col justify-center items-center gap-2 top-0 left-0 w-full h-full bg-zinc-800/20"
              >
                <h3 className="px-2 py-2 rounded-md text-lg font-medium text-center  text-zinc-950">
                  {product.link ? "Buy Now" : "Contact Us for Price"}
                </h3>
                <a
                  href={`https://wa.me/+919811391053?text=I+want+to+buy+this+product+${encodeURIComponent(
                    `${product.title}`
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
          <Image
            src={product.image}
            alt={`${product.title}_Image`}
            className="h-[90%] -z-10 mx-auto object-contain"
          />
        </div>
        <div className="p-4 flex flex-col rounded-lg bg-zinc-100 w-full h-[156px] ">
          <h3 className="text-sm font-regular h-[126px]">{product.title}</h3>
          <h4 className="text-md font-semibold"> {product.price}</h4>
        </div>
      </div>
    </a>
  );
};

export default Product;
