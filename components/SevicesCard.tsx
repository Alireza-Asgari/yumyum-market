"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

export default function SevicesCard({
  icon,
  header,

  custom,
  variants,
}: {
  icon: React.ReactElement;
  header: string;
  custom: number;
  variants: Variants;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6 }}
      custom={custom}
      variants={variants}
      style={{
        willChange: "transform , opacity",
      }}
      className="select-none relative w-72 lg:w-64 flex justify-between items-center z-20 bg-red-600 p-8 rounded-e-[19px] transition-all hover:border-s-4 hover:scale-110 hover:border-yellow-200 dark:hover:border-yellow-300 border border-transparent group "
    >
      <div className="text-5xl">{icon}</div>
      <h3 className="text-lg sm:text-xl leading-7 font-semibold group-hover:font-bold transition-all duration-500 text-white">
        {header}
      </h3>
      <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-yellow-200 rounded-full group-hover:scale-[2] transition-all" />
    </motion.div>
  );
}
