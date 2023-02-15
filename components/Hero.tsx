import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My Name Is Camilo",
      "Guy-who-loves-Games.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-16">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="https://res.cloudinary.com/dvfl2dcrs/image/upload/v1675916961/profile-pic_5_hgzntg.png"
        alt="xd"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] w-screen mx-auto">
          Full-Stack Developer
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#90D253" />
        </h1>

        <div className="pt-5 ">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
