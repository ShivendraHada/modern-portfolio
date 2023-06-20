"use client";

import ProjectImage from "@/assets/images/project.png";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  const projectCarouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    const carousel = projectCarouselRef.current;
    if (carousel) {
      const targetScrollLeft = carousel.scrollLeft - carousel.offsetWidth;
      carousel.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const carousel = projectCarouselRef.current;
    if (carousel) {
      const targetScrollLeft = carousel.scrollLeft + carousel.offsetWidth;
      carousel.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen relative overflow-hidden z-0">
      <h3 className="snapHeading">Projects</h3>
      <div className="relative block h-full">
        <div
          className="md:w-[80%] mx-auto text-left overflow-auto z-20 customScrollbar flex flex-row items-center snap-x snap-mandatory"
          ref={projectCarouselRef}
        >
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative overflow-y-auto customScrollbar w-full m-5 md:my-10 snap-center space-y-5 flex-shrink-0"
              key={index}
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={ProjectImage.src}
                alt="Project Image"
                className="aspect-auto w-[400px] mx-auto"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
                <h4 className="text-3xl font-semibold text-center">
                  To Do App
                </h4>
                <p className="text-md text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  sapiente commodi iste, ipsum eius quam consequatur expedita
                  est voluptatum dolorum dolor laboriosam nemo aut rem harum,
                  voluptate odio quae vero. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Aliquam sit vitae voluptas!
                  Consectetur accusamus eaque, excepturi sit quam qui id? Fugit
                  dolore ratione ab nam rerum veniam officiis quia ipsum. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                  odio praesentium veritatis nulla ratione quam voluptatibus
                  consequatur iusto laborum aspernatur adipisci consequuntur est
                  quas accusantium illo. Odit quia facilis id.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="carousel-button left-0 z-30" onClick={handlePrev}>
          <ArrowLongLeftIcon />
        </button>
        <button className="carousel-button right-0 z-30" onClick={handleNext}>
          <ArrowLongRightIcon />
        </button>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      </div>
    </div>
  );
}

export default Projects;
