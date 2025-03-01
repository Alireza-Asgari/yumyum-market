import Carousel from "@/components/Carousel";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Buy from "@/components/mainPage/Buy";
import BuyMethod from "@/components/mainPage/BuyMethod";
import Delivery from "@/components/mainPage/Delivery";
import { MovingCards } from "@/components/mainPage/MovingCards";
import Proructs from "@/components/Proructs";
import Wavy from "@/components/Wavy";
import React from "react";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <MovingCards />
      <Buy />
      <Proructs />
      <BuyMethod />
      <Carousel />
      <Wavy />
      <Delivery />
      <ContactUs />
    </div>
  );
}
