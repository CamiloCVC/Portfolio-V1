import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-8 justify-evenly mx-auto items-center pt-10 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] "
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://res.cloudinary.com/dvfl2dcrs/image/upload/c_scale,q_auto:best,w_390/v1675921914/1675921679293_w0dfsg.jpg"
      />
      <div className="space-y-10 px:0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#90D253]/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo
          ipsam magni rerum cumque beatae earum odio quisquam animi consequuntur
          illum ipsum nobis mollitia dignissimos quod illo, modi culpa unde!
        </p>
      </div>
    </div>
  );
}

export default About;
