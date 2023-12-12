import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  directionLeft: boolean;
  img: string;
  prof: string;
};

function Skill({ directionLeft, img, prof }: Props) {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <div className="group relative flex cursor-pointer mx-auto">
      <motion.img
        initial={{
          x: directionLeft ? -85 : 85,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0}}
        src={img}
        className="rounded-full border border-gray-500 object-cover w-[5rem] h-[5rem] xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[5.5rem] h-[5.5rem] xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100 ">{prof}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
