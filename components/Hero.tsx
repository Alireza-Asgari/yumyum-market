"use client";
import Image from "next/image";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradient";
import { motion } from "framer-motion";
const floatAnimation1 = {
  y: [0, 20, 0],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const floatAnimation2 = {
  y: [0, -20, 0],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};
export default function Hero() {
  return (
    <div className="relative z-20 h-fit mb-32">
      <BackgroundGradientAnimation>
        <section className="absolute z-50 inset-0 w-full text-white pointer-events-none">
          <div className="container w-full mx-auto h-screen relative overflow-hidden flex flex-col sm:flex-row items-center">
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
              <h2 className="font-semibold 2xl:text-6xl lg:text-4xl sm:text-4xl text-3xl lg:leading-[95px] leading-10 sm:text-nowrap">
                پیشرو در
                <span className="font-bold">تخصص</span> و خلاقیت
              </h2>
              <p className="paragraph mt-3 max-w-lg mx-auto lg:mx-0">
                با محصولات دینا، اموال و دارایی‌های سازمان خود را به‌صورت آنلاین
                و لحظه‌ای مدیریت کنید. بهره‌وری را افزایش دهید و با نظارت دقیق،
                هزینه‌ها را کاهش دهید!
              </p>
              <button className="relative pointer-events-auto ms-4 inline-flex h-12 mt-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#e20f0f_50%,#E2CBFF_100%)]" />
                <span className="font-medium lg:text-lg text-base inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-red-500 px-3 py-1 text-white backdrop-blur-3xl">
                  از دینا بیشتر بدانید
                </span>
              </button>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: "-100%",
              }}
              transition={{
                duration: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              className="flex flex-col sm:flex-row relative justify-center items-center"
            >
              <motion.div
                animate={floatAnimation1}
                className="relative z-20 w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              >
                <Image
                  src="/kitkat1.png"
                  fill
                  className="object-cover"
                  alt="hero image"
                />
              </motion.div>
              <motion.div
                animate={floatAnimation2}
                className="z-20 relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              >
                <Image
                  src="/kitkat2.png"
                  fill
                  className="object-contain"
                  alt="hero image"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </BackgroundGradientAnimation>
    </div>
  );
}
