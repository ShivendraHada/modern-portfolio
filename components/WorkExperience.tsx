"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

function WorkExperience() {
  const expCarouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const carousel = expCarouselRef.current;
    if (carousel) {
      const targetScrollLeft = carousel.scrollLeft - carousel.offsetWidth;
      carousel.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const carousel = expCarouselRef.current;
    if (carousel) {
      const targetScrollLeft = carousel.scrollLeft + carousel.offsetWidth;
      carousel.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden"
    >
      <h3 className="snapHeading">Experience</h3>
      <div className="container mx-auto relative h-full max-h-[1200px] flex flex-row justify-center text-left px-4 md:px-14">
        <div
          ref={expCarouselRef}
          className="absolute top-4 bottom-28 w-[80%] max-w-[1000px] flex space-x-20 snap-x snap-mandatory scrollbar-none items-center overflow-hidden customScrollbar"
        >
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
        <button className="carousel-button left-0" onClick={handlePrev}>
          <ArrowLongLeftIcon />
        </button>
        <button className="carousel-button right-0" onClick={handleNext}>
          <ArrowLongRightIcon />
        </button>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
