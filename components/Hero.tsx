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
    <>
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
                <p className="paragraph mt-3 max-w-lg mx-auto lg:mx-0">
                  یام یام مارکت به عنوان یک مجموعه فروشگاه اینترنتی شناخته می
                  شود که به شما انواع شکلات خارجی را ارائه می دهد.
                </p>
                <h2 className="font-semibold  text-3xl leading-10 sm:text-nowrap">
                  شکلات زبان عشق و دوست داشتن است
                </h2>
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
                    src="/mainpage/hero.png"
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
      <div className="relative z-10 flex justify-center items-center mx-auto w-8/12 my-10 bg-red-500 text-white rounded-md p-10">
        <p className="paragraph">
          یام یام مارکت به عنوان محلی برای خرید شکلات خارجی، شکلات جعبه ای،
          شکلات کیلویی، شکلات بسته ای، پک کادوئی شکلات، شوکوباکس، خرید شکلات
          رژیمی، خرید آبنبات خارجی، خرید آدامس خارجی، خرید پاستیل خارجی، خرید
          مارشمالو اصل، خرید اسمارتیز خارجی و انواع پروتئین بار به صورت آنلاین و
          بی‌دردسر شناخته می شود.
        </p>
      </div>
    </>
  );
}
