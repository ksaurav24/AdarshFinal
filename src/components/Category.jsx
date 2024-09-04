import { AnimatePresence, motion } from "framer-motion";
import React from "react";
const Category = (category) => {
  const [onHover, setOnHover] = React.useState(false);
  return (
    <motion.div
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      className="lg:w-[22vw] w-[80vw] mx-auto rounded-lg hover:border-zinc-500 hover:-translate-y-2 transition-all duration-300 ease-in-out border-[2px] border-transparent h-[238px] bg-white shadow-xl "
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
                href="/products"
                className="px-3 py-1 rounded-md text-lg font-medium text-center bg-zinc-50 text-zinc-950"
              >
                Buy Spare Parts
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        {/* <Image
      src={}
      alt={`AC_Image`}
      className="h-[90%] object-contain"
    /> */}
      </div>
      <div className="p-3 rounded-lg bg-zinc-100 w-full  ">
        <h1 className="text-xl text-zinc-800 text-center font-semibold ">
          {category.category} Repair
        </h1>
      </div>
    </motion.div>
  );
};

export default Category;
