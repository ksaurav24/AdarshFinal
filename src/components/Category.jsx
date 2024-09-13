import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
const Category = ({ category, image }) => {
  const [onHover, setOnHover] = React.useState(false);
  return (
    <motion.div
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      onClick={() => setOnHover(!onHover)}
      className="lg:w-[22vw] w-[80vw] mx-auto rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[232px] bg-white shadow-xl "
    >
      <div className="w-full p-6 h-[180px] overflow-hidden relative">
        <AnimatePresence>
          {onHover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute flex flex-col justify-center items-center gap-2 top-0 left-0 w-full h-full bg-zinc-800/20 "
            >
              <a
                href="/contact"
                className=" px-4 py-2 rounded-md text-lg font-medium text-center bg-zinc-950 text-zinc-50"
              >
                Get Repair Service
              </a>
              <a
                href={`/products#${category}`}
                className="px-3 py-1 rounded-md text-lg font-medium text-center bg-zinc-50 text-zinc-950"
              >
                Buy Spare Parts
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          src={image}
          alt={`${category}_Image`}
          className="h-[100%] object-contain"
        />
      </div>
      <div className="p-3 rounded-lg bg-zinc-100 w-full  ">
        <h1 className="text-md text-zinc-800 text-center font-semibold ">
          {category} Spare Parts
        </h1>
      </div>
    </motion.div>
  );
};

export default Category;
