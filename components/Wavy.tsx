import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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
    <div className="w-[90vw] md:w-[80%] lg:w-[1000px] h-fit md:h-[500px] my-6 mx-auto relative rounded-2xl overflow-hidden flex flex-col md:flex-row">
      <div className="bg-purple-500 w-full h-fit  md:w-1/2 md:h-full min-h-[50vh] p-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>ایا در دسترس است؟</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              totam deleniti consequuntur explicabo voluptas laborum unde, amet
              maiores cum, recusandae nulla quis, voluptates voluptatum! Autem,
              deserunt. Placeat odio inventore totam?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>شیوه ارسال چطوره</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>ادرستون کجاست</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>ادرستون کجاست</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-orange-400 w-full md:w-1/2 h-full min-h-[50vh]">
        <img src="choclate.png" className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
