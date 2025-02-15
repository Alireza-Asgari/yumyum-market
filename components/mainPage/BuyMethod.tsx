"use client";
import React from "react";
import SevicesCard from "../SevicesCard";
import { MdDeveloperBoard, MdOutlineWarehouse } from "react-icons/md";
import { TbShoppingCartCode } from "react-icons/tb";
import { GrOptimize, GrUpdate } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import FadeDown from "../animation/FadeDown";
const items = [
  {
    icon: <MdDeveloperBoard />,
    header: "باکسی",
  },
  {
    icon: <TbShoppingCartCode />,
    header: "کیلویی",
  },
  {
    icon: <MdOutlineWarehouse />,
    header: "جعبه ای",
  },
  {
    icon: <GrOptimize />,
    header: "پگ تعداد",
  },
];
const variants = {
  hidden: { opacity: 0, transform: "rotateY(100deg) scale(1.1)" },
  visible: (custom: number) => ({
    opacity: 1,
    transform: "rotateY(0deg) scale(1)",
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: "linear",
    },
  }),
};

export default function BuyMethod() {
  return (
    <section className="container mx-auto mt-20 pb-20 w-full text-white space-y-12">
      <FadeDown>
        <h2 className="heading-2 text-center">روش‌های خرید: </h2>
      </FadeDown>

      <div className="relative ">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {items.map((item, i) => (
            <SevicesCard
              custom={i}
              variants={variants}
              key={i}
              header={item.header}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
