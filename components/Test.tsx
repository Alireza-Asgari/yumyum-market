"use client";
import React from "react";
import { TextRevealByWord } from "./ui/TextReval";

export default function Test() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
      <TextRevealByWord text="دینا با درنظر داشتن این اصلسازمان شما نمود است." />
    </div>
  );
}
