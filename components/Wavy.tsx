import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Image from "next/image";

export const faq = [
  {
    id: "0",
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "1",
    question: "Can I integrate Xora with other platforms?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "2",
    question: "How often do you add new content?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "3",
    question: "What your refund policy?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
];
export default function Wavy() {
  return (
    <div className="w-[90vw] md:w-[80%] lg:w-10/12 h-fit md:h-[640px] my-6 mx-auto relative rounded-2xl overflow-hidden flex flex-col md:flex-row">
      <div className="bg-purple-500 w-full h-fit md:w-1/2 md:h-full min-h-[50vh] p-4 sm:p-8">
        <h5 className="text-lg font-medium text-gray-200">سوالات متداول:</h5>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-right">
              خرید شکلات، ابنبات، اسمارتیز و شکلات کیلویی به چه صورت است؟
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-medium">
                شما می توانید شکلات ها را در بسته های 4 تایی، 8 تایی، 10 تایی و
                یا پک کارتونی کامل باقیمت عمده و از مبدا خریداری کنید.
              </p>
              <p className="text-base font-medium">
                همچنین بسته های کیلویی (شامل اسمارتی، آبنبات و شکلات کیلویی) به
                صورت زیر به فروش می رسد
              </p>
              <ul className="text-base font-medium">
                <li>
                  <p>بسته های ۳۰۰ گرمی</p>
                </li>
                <li>
                  <p>بسته های ۵۰۰ گرمی</p>
                </li>
                <li>
                  <p>بسته های 1 کیلویی</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>خرید آدامس ها به چه صورت است؟</AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-medium">
                برای خرید آدامس می توانید از بسته های 5 تایی بسته های 10 تایی پک
                های کارتنی خرید کنید.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              خرید مارشمالو بر اساس نوع به چه صورت است؟
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-medium">
                بسته های 5 عددی، بسته های 10 عددی و بسته های کامل به فروش می رسد
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              خرید شکلات جعبه ای به چه صورت است ؟
            </AccordionTrigger>
            <AccordionContent className="font-medium">
              شکلات های جعبه ای در بسته بندی اصلی و به صورت پک کامل به فروش
              میرسد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              پک کادویی چیست و خرید ان چگونه است ؟
            </AccordionTrigger>
            <AccordionContent className="font-medium">
              پک های کادویی و مناسبی نیز بر اساس قیمت هر بسته مشخص شده و به فروش
              می رسد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              شوکو باکس چیست و خرید ان به چه صورت است ؟
            </AccordionTrigger>
            <AccordionContent className="font-medium">
              شوکو باکس ها شامل چندین نوع شکلات مختلف است که قیمت هر باکس بر
              اساس محتویات آن مشخص می شود و می توانید انتخاب کنید.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              خرید پروتئین بار به چه صورت است ؟
            </AccordionTrigger>
            <AccordionContent className="text-base font-medium">
              پروتئین بار ها نیز به صورت بسته های 5 تای، 10 0 تایی و جعبه کامل
              به فروش می رسد.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-yellow-200 w-full md:w-1/2 h-full min-h-[50vh] relative">
        <Image
          alt="faq"
          fill
          src="/mainpage/faq.png"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
