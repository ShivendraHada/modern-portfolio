"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden"
    >
      <h3 className="snapHeading">Skills</h3>
      <h3 className="uppercase tracking-[3px] text-gray-400 text-sm text-center py-5">
        Hover over a skill for current proficiency
      </h3>
      <div className="relative h-full max-w-[1000px] mx-auto">
        <div className="block container mx-auto absolute top-0 bottom-48 left-0 right-0 py-5 md:py-10 overflow-y-auto customScrollbar">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex flex-row flex-wrap justify-center mx-4"
          >
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
