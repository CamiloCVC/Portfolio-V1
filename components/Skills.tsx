import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {

  const skillsList=[
    {
      directionLeft:true,
      img:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702351287/react_logo_ft4dso.png",
      prof: "50%"
    },
    {
      directionLeft:true,
      img:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408210/9118036_nextjs_fill_icon_hxneku.png",
      prof: "40%"
    },
    {
      directionLeft:true,
      img:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408845/image_3_jcqu7o.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-256.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-256.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png",
      prof: "70%"
    },
    {
      directionLeft:true,
      img:"https://img.icons8.com/color/256/typescript.png",
      prof: "30%"
    },
    {
      directionLeft:true,
      img:"https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-redux-256.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408779/image_2_nhrora.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-64.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      prof: "50%",
      img:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702353366/1175544_firebase_google_icon_b15uey.png",
    },
    {
      directionLeft:true,
      img:"https://res.cloudinary.com/dvfl2dcrs/image/upload/v1702408729/image_1_xmuzov.png",
      prof: "40%"
    },
    

    
  ]

  return (
    <motion.div className='pt-10 md:pt-28 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className='absolute top-[8.8rem] uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>
      <div className='grid grid-cols-4 gap-3 md:gap-4 '>
        {skillsList.map((s, i)=>(
          <Skill key={i} directionLeft={s.directionLeft} img={s.img} prof={s.prof}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills