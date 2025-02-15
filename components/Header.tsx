"use client";
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import clsx from "clsx";
import { motion } from "framer-motion";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu]);
  return (
    <motion.header
      className={clsx(
        "z-50 h-16 py-2 flex !w-full justify-between items-center backdrop-blur-lg bg-red-500 px-10 md:px-24 relative ",
        isFixed && "!fixed !top-0 !left-0 !z-20 "
      )}
      layout
    >
      <nav
        className={clsx(
          "absolute inset-0 h-screen w-full lg:py-2 lg:px-10 bg-red-500 px-12 lg:rounded-full flex items-center justify-center transition-all duration-500 translate-x-full opacity-0 pointer-events-none lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto lg:visible lg:w-fit lg:h-fit lg:relative z-50",
          showMenu
            ? "!translate-x-0 !opacity-100 !pointer-events-auto !visible !max-lg:overflow-scroll "
            : "invisible"
        )}
      >
        <ul className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8 list-none">
          <li className="nav-hover-btn">
            <a className="text-lg font-semibold text-white py-2" href="shop">
              خانه
            </a>
          </li>
          <li className="nav-hover-btn">
            <a className="text-lg font-semibold text-white py-2" href="shop">
              فروشگاه
            </a>
          </li>
          <li className="nav-hover-btn">
            <a className="text-lg font-semibold text-white py-2" href="shop">
              تماس‌با‌ما
            </a>
          </li>
          <li className="nav-hover-btn">
            <a className="text-lg font-semibold text-white py-2" href="shop">
              قوانین‌و‌مقررات
            </a>
          </li>
          <li className="nav-hover-btn">
            <a className="text-lg font-semibold text-white py-2" href="shop">
              درباره‌ما
            </a>
          </li>
          <li className="nav-hover-btn">
            <a className="text-lg font-semibold text-white py-2" href="shop">
              بلاگ
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setShowMenu((menu) => !menu)}
        className={clsx("block lg:hidden z-50")}
      >
        {showMenu ? (
          <IoClose className="text-white w-8 h-8" />
        ) : (
          <FaBars className="text-white w-8 h-8" />
        )}
      </button>

      <a href="home" className="text-lg font-semibold text-red-600 z-50">
        Logo
      </a>
    </motion.header>
  );
}
