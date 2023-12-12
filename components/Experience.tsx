import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  let tecnologias = {
    react:
      "https://res.cloudinary.com/dvfl2dcrs/image/upload/c_scale,h_30,w_30/v1702351287/react_logo_ft4dso.png",
    js: "https://res.cloudinary.com/dvfl2dcrs/image/upload/c_scale,h_30,w_30/v1675984977/pngwing.com_3_hui1jg.png",
    tailwind:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408845/image_3_jcqu7o.png",
    mongodb:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408729/image_1_xmuzov.png",
    nextjs: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408210/9118036_nextjs_fill_icon_hxneku.png",
    html:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408207/317755_badge_html_html5_achievement_award_icon_map7o4.png",
    redux: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408203/4691205_redux_icon_k56ren.png",
    node:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408779/image_2_nhrora.png",
    firebase:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702353366/1175544_firebase_google_icon_b15uey.png",
    typescript:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408381/icons8-typescript-96_ke4qsm.png",
    jquery:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702410404/jquery-64_yrrilm.png",
    bootstrap:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702410401/image_4_gulfbs.png",
    css:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702410498/image_5_hzcczo.png"
  };
  let datosGenerales = {
    zmey: {
      logo: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702351166/zmey_logo_r97o13.png",
      position: "Junior Full-Stack Developer",
      empresa: "Zmey Athletics",
      funciones: ["Development of functions for inventory management","Design and implementation of admin dashboard","Implementation of shopping cart","Implementation of notifications through multiple channels","Creation of routes and connections with the database"],
      time:"2022/11 - 2023/03"
    },
    heka: {
      logo: "https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702410213/11-removebg-preview_j7cctg.png",
      position: "Junior Full-Stack Developer",
      empresa: "Heka Envios",
      funciones: ["Connections with APIs and microservices from multiple carriers","Maintenance and improvement of the shipping quote service","Implementation of a working section for the call center area","Management and maintenance of routes and connection credentials", "Implementation of functions for the creation of reports in the logistics area"],
      time:"2023/03 - Present"
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center pt-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Experience
      </h3>
      <div className="w-full flex justify-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#90D253]/90">
        <ExperienceCard datosGenerales={datosGenerales.zmey} tecnologias={[tecnologias.nextjs, tecnologias.js, tecnologias.typescript,tecnologias.html,tecnologias.tailwind,tecnologias.node,tecnologias.mongodb]} />
        <ExperienceCard datosGenerales={datosGenerales.heka} tecnologias={[tecnologias.react, tecnologias.js,tecnologias.jquery, tecnologias.html,tecnologias.bootstrap, tecnologias.css,tecnologias.node, tecnologias.firebase]} />
      </div>
    </motion.div>
  );
}

export default Experience;
