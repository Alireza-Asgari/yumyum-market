"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import Image from "next/image";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [
    "/CardAssets/city3.png",
    "/CardAssets/planet1.png",
    "/CardAssets/planet2.png",
    "/CardAssets/SpaceCity1.jpg",
    "/CardAssets/SpaceCity.jpg",
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  useEffect(() => {}, []);
  return (
    <div className="w-full relative overflow-clip flex items-center flex-col justify-evenly min-h-80 sm:min-h-96  ">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          className="absolute w-[270px] h-[190px] sm:w-[390px] sm:h-[310px] md:w-[420px] md:h-[340px] lg:w-[40vw] lg:h-[90%] rounded-xl overflow-hidden "
        >
          <Image
            src={image}
            alt={image}
            sizes="100%"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      ))}
      <div className="w-full absolute bottom-0  flex justify-between px-8 flex-row gap-3 ">
        <button
          className="text-white text-2xl bg-indigo-400  py-2 px-4 rounded-full mb-2"
          onClick={handleBack}
        >
          <HiOutlineChevronRight />
        </button>
        <button
          className="text-white text-2xl bg-indigo-400 py-2 px-4 rounded-full mb-2"
          onClick={handleNext}
        >
          <HiOutlineChevronLeft />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
