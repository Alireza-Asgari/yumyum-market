import Carousel from "@/components/Carousel";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import BuyMethod from "@/components/mainPage/BuyMethod";
import { MovingCards } from "@/components/mainPage/MovingCards";
import Proructs from "@/components/Proructs";
import Wavy from "@/components/Wavy";
import React from "react";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <MovingCards />
      <BuyMethod />
      <Proructs />
      <Carousel />
      <Wavy />
      <ContactUs />
    </div>
  );
}
