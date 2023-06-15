"use client";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
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
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          aspernatur totam nobis ipsum repellendus impedit nihil! Animi possimus
          quia, dolorem cupiditate tenetur, exercitationem repellat sed,
          deserunt nesciunt voluptatibus quos nam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dolorum laudantium id, earum deleniti
          dolor corrupti harum nam voluptatibus quibusdam, omnis repellendus
          ducimus sequi debitis saepe eum est! Ex, sint nostrum. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Modi voluptatem fugit
          sunt non repellat ullam ratione cupiditate nemo, odit blanditiis!
          Nostrum aspernatur cum recusandae illo vitae voluptas voluptates neque
          obcaecati!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
