import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg space-y-4 flex-shrink-0 items-center w-[360px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] p-8 mt-14 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 h-28 rounded-full xl:w-[180px] xl:h-[180px] object-cover object-center"
        src="https://assets.soyhenry.com/logoOG.png"
        alt="xd"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Junior Full-Stack Dev</h4>
        <p className="font-bold text-2xl mt-1">HENRY</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://res.cloudinary.com/dvfl2dcrs/image/upload/c_scale,h_30,w_30/v1675984977/pngwing.com_3_hui1jg.png"
            alt=""
          />
          <img src="https://res.cloudinary.com/dvfl2dcrs/image/upload/c_scale,h_30,w_30/v1675984977/pngwing.com_3_hui1jg.png" alt="" />
          <img src="https://res.cloudinary.com/dvfl2dcrs/image/upload/c_scale,h_30,w_30/v1675984977/pngwing.com_3_hui1jg.png" alt="" />
        </div>
        <p className="uppercase py-4 text-gray-300">Wed dec 30 2022 - present</p>

        <ul className="list-disc space-y-4 ml-5 text-base">
          <li>xd</li>
          <li>xd</li>
          <li>xd</li>
          <li>xd</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
