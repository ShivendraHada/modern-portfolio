"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import NextLogo from "@/assets/images/next-logo.png";

function ExperienceCard() {
  return (
    <article className="relative space-y-7 snap-center flex flex-col rounded-lg items-center text-left flex-shrink-0 w-[90%] mx-[5%] cursor-pointer transition-opacity duration-200 overflow-hidden mb-10 h-full pt-16">
      <div className="relative bg-[#fff]/10 mt-10 xl:mt-20 h-[fit-content] max-h-[800px]">
        <motion.img
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="aspect-square w-20 lg:w-32 rounded-full object-cover object-center mx-auto absolute top-[-3rem] left-[calc(50%-2.5rem)] lg:top-[-4rem] lg:left-[calc(50%-4rem)] shadow-lg"
          src={
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg"
          }
          alt="company logo"
        />
        <div className="relative flex flex-col justify-start mt-12 lg:mt-20 px-4 md:px-8 pb-5">
          <h4 className="text-xl font-light text-center">CEO of Company</h4>
          <p className="font-bold text-lg mt-1 text-center">MYCOMPANY</p>
          <div className="flex space-x-2 my-2 justify-center">
            <Image
              src={NextLogo}
              className="w-10 h-10 rounded-full"
              alt="nextjs tech logo"
            />
            <Image
              src={NextLogo}
              className="w-10 h-10 rounded-full"
              alt="nextjs tech logo"
            />
            <Image
              src={NextLogo}
              className="w-10 h-10 rounded-full"
              alt="nextjs tech logo"
            />
          </div>
          <p className="uppercase py-4 text-gray-300 text-center">
            Started work... - Ended...
          </p>
          <div className="relative customScrollbar overflow-y-auto px-2 max-h-[250px]">
            <ul className="list-disc space-y-4 ml-5 text-md ">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                nam eos autem, non harum deserunt reprehenderit itaque unde,
                pariatur, temporibus amet ex ipsa quaerat esse voluptate
                doloribus fuga quasi sequi!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
