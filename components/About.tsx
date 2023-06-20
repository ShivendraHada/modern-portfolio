"use client";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container mx-auto h-screen w-full md:max-w-[900px] xl:max-w-[1250px] relative overflow-hidden"
    >
      <h3 className="snapHeading">About</h3>
      <div className="absolute top-32 bottom-5 flex overflow-x-auto flex-col md:flex-row md:justify-evenly mx-auto items-center text-center md:text-left px-4 md:px-14 customScrollBar">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          className="mb-5 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-5 px-0 md:px-10">
          <h4 className="text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            aspernatur totam nobis ipsum repellendus impedit nihil! Animi
            possimus quia, dolorem cupiditate tenetur, exercitationem repellat
            sed, deserunt nesciunt voluptatibus quos nam. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Dolorum laudantium id, earum
            deleniti.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
