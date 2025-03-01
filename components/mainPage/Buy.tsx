"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function Buy() {
  return (
    <div className="container w-full mx-auto relative overflow-hidden flex flex-col sm:flex-row items-center">
      <motion.div
        initial={{
          opacity: 0,
          x: "100%",
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="relative w-full sm:basis-1/2 max-lg:text-center space-y-6  p-4"
      >
        <h3 className="heading-3">خرید شکلات خارجی</h3>
        <p className="paragraph mt-3 max-w-lg mx-auto lg:mx-0">
          خرید شکلات خارجی در این مجموعه به آسانی انجام می شود. شما میتوانید از
          بین برند های مطرح و معتبر ارائه شده در سایت محصولات مد نظر خود را
          انتخاب کرده و به راحتی نسبت به خرید آنلاین اقدام نمایید.
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: "-100%",
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="flex flex-col sm:flex-row relative justify-center items-center"
      >
        <div className="z-20 relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 lg:h-96">
          <Image
            src="/mainpage/buyChoclate.png"
            fill
            className="object-contain"
            alt="hero image"
          />
        </div>
      </motion.div>
    </div>
  );
}
