import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1676139404/Weather_Mockup_aybydj.png",
      Title: "Weather App",
    },
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1676139404/Pi_Mockup_hef7sr.png",
      Title: "Videogames Page",
    },
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1676139404/Bookturn_Mockup_pjhtie.png",
      Title: "Bookturn",
    },
  ];

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1.5}} className="pt-10 md:pt-28 h-screen relative flex overflow-hidden flec-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#90D253]/90">
        {projects.map((p, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-14 md:p-40 h-[92vh] md:h-[84vh] ">
            <motion.img
              initial={{y:-300, opacity:0 }}
              transition={{duration:1.2}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="w-[21rem] h-[13rem] md:w-[26rem] md:h-[18rem]"
              src={p.img}
              alt={p.Title}
            />
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#90D253]/50">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                {p.Title}
              </h4>
              <p className="text-sm md:text-lg text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aut. Laborum distinctio sed quasi adipisci voluptate, laudantium unde aspernatur magni quo iste nostrum veritatis accusantium alias, repellendus, praesentium magnam eligendi.</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[27%] bg-[#90D253]/10 left-0 h-[380px] md:h-[500px] -skew-y-12 -z-10"></div>
    </motion.div>
  );
}

export default Projects;
