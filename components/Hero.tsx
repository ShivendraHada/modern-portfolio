"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Shivendra Hada",
      "Guy-who-loves-Tea.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"}
        width={128}
        height={128}
        alt="Profile Photo"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 leading-relaxed">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about" className="heroButton" onClick={handleScroll}>
            About
          </Link>
          <Link
            href="#experience"
            className="heroButton"
            onClick={handleScroll}
          >
            Experience
          </Link>
          <Link href="#skills" className="heroButton" onClick={handleScroll}>
            Skills
          </Link>
          <Link href="#projects" className="heroButton" onClick={handleScroll}>
            Projects
          </Link>
          <Link href="#contact" className="heroButton" onClick={handleScroll}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
