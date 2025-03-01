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
    header: "پک تعداد",
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
    <section className="container mx-auto mt-20 pb-20 w-full text-gray-700 space-y-12">
      <FadeDown>
        <h4 className="heading-3 text-center">
          روش خرید انلاین از یام یام مارکت :
        </h4>
      </FadeDown>

      <div className="relative ">
        <p className="paragraph"> روش خرید از سایت ما خیلی ساده است.</p>
        <p className="paragraph">
          شما شکلات را بر اساس نوع و وزن و بسته بندی انتخاب می کنید و وارد درگاه
          خرید شده و به راحتی فرایند خرید آنلاین را انجام می دهید.
        </p>
        <p className="paragraph">
          شکلات های مد نظر شما بعد از 4 روز کاری به دست شما در هر نقطه از ایران
          خواهد رسید
        </p>
        <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center text-gray-200">
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
