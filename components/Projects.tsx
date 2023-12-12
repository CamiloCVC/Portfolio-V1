import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Content } from "@next/font/google";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1676139404/Weather_Mockup_aybydj.png",
      Title: "Weather App",
      url: "https://weather-app-camilocvc.vercel.app/",
      content: "Web application that allows checking the weather of any city in the world using the OpenWeather API. It has a backend developed in NodeJS and Express. The frontend is developed in HTML, CSS, and JS. The project is deployed on Vercel and Railway"
    },
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1676139404/Pi_Mockup_hef7sr.png",
      Title: "Videogames Page",
      content: "Web application that allows you to query information about video games, obtaining this information from an external API, developed with the MERN stack and published on Vercel."
    },
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1676139404/Bookturn_Mockup_pjhtie.png",
      Title: "Bookturn",
      url: "https://bookturn.vercel.app",
      content:"Platform for organizing shifts for beauty salons and for clients to request those shifts. Made with Strapi, NextJs, and Tailwind (among other libraries). Features: local and Google authentication, search functionality, filters, comments, reports, react-calendar, email notifications."
    },
    {
      img: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702413646/Group_1_vgokfb.png",
      Title: "Zmey Athletics",
      url: "https://www.zmeyathletics.com/",
      content:"E-commerce created from scratch, developed with a team in scrum methodology, using next.js, tailwind, node.js, MongoDB, and more."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pt-10 md:pt-28 h-screen relative flex overflow-hidden flec-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#90D253]/90">
        {projects.map((p, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-14 md:p-40 h-[92vh] md:h-[84vh] "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-[21rem] h-[13rem] md:w-[30rem] md:h-[18rem]"
              src={p.img}
              alt={p.Title}
            />
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <Link href={p.url?p.url:"#projects"} target={p.url?"_blank":"_self"}>
                <h4 className="text-2xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#90D253]/50">
                    Case Study {i + 1} of {projects.length}:{" "}
                  </span>
                  {p.Title}
                </h4>
              </Link>
              <p className="text-sm md:text-lg text-center md:text-left">{p.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[27%] bg-[#90D253]/10 left-0 h-[380px] md:h-[500px] -skew-y-12 -z-10"></div>
    </motion.div>
  );
}

export default Projects;
