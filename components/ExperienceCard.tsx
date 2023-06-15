import Image from "next/image";
import { motion } from "framer-motion";
import NextLogo from "@/assets/images/next-logo.png";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={
          "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg"
        }
        alt="company logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Company</h4>
        <p className="font-bold text-2xl mt-1">MYCOMPANY</p>
        <div className="flex space-x-2 my-2">
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
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nam
            eos autem, non harum deserunt reprehenderit itaque unde, pariatur,
            temporibus amet ex ipsa quaerat esse voluptate doloribus fuga quasi
            sequi!
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nam
            eos autem, non harum deserunt reprehenderit itaque unde, pariatur,
            temporibus amet ex ipsa quaerat esse voluptate doloribus fuga quasi
            sequi!
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
