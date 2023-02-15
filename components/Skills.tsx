import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='pt-10 md:pt-28 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className='absolute top-[8.8rem] uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>
      <div className='grid grid-cols-4 gap-3 md:gap-4 '>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
      </div>
    </motion.div>
  )
}

export default Skills