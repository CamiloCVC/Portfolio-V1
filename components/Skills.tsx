import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {

  const skillsList=[
    {
      directionLeft:true,
      img:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      prof: "50%"
    },
    {
      directionLeft:true,
      img:"https://cdn1.iconfinder.com/data/icons/akar-vol-1/24/nextjs-fill-512.png",
      prof: "40%"
    },
    {
      directionLeft:true,
      img:"https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-tailwind-css-256.png",
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
      prof: "60%"
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
      img:"https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-128.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/postgresql-64.png",
      prof: "60%"
    },
    {
      directionLeft:true,
      img:"https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/images/8d9acc38-7346-4821-b6dd-d2179957edef.png?b=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAIAAABj86gYAAAACXBIWXMAACE4AAAhOAFFljFgAAAB40lEQVQ4jbWUvYsTQRjG3yGd2Ei427iBEE65UuH8ILmd2WBxanNgYWFhIQj+LSsp0shhJ+TKRJukCxsIBK4MuN+3SUxy8cAusAl6CD6y66EIF43Z9eEphoGZ38vzzrxk2xPXPfG8E8cZJWXbHlnW0Pd9zzsl3/fpv8n3J+R5YyLq9XpOomo0GkR0fDwmyxoSUbfbXV7Hmz3CfcLe72aEP9RerVYjwGQVwDpaEVAlotsKcruQlcg8crTOC5RKiAnoEpHEsS2msgjy6uzcYibz4Lr6Ma+EgAuzWjUiRl/SCjLic6oIdgfsbuQCrnDIIsjy8OoH8QDIKJD4fEPF4SGGA/R9vHsLdgtb6uxqfMD+/qe0AlnMnzyHrmOxAADLBLuJa6UkAIyQVpBT56yApy/w6gBnZ3AdsBuJAmQxTxXBH4WMVgsHr8F2EoqIqLkpwiZviLC3lxQ8foZUEZeVJJrMaPLzmWb4QhbBlhrIInSWL7bFNBcBHsYAfCWiHRWSAklA4r+8yZHdReHej6s7cSIyaC39wyxi9O2iv3oUbb7/O8B1w3Hd6XRaS9Rut2u1Wrlc1jTtZSRN0yqVSrPZ1HV92al6vX4+rg1jsF4Iq8hxTsm2x4bRd5yRaQ4StGH0TfOD40y/A6l/cfTxZ4KLAAAAAElFTkSuQmCC",
      prof: "50%"
    },
    {
      directionLeft:true,
      img:"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
      prof: "60%"
    },
    

    
  ]

  return (
    <motion.div className='pt-10 md:pt-28 flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>
      <h3 className='absolute top-[8.8rem] uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>
      <div className='grid grid-cols-4 gap-3 md:gap-4 '>
        {skillsList.map((s)=>(
          <Skill directionLeft={s.directionLeft} img={s.img} prof={s.prof}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills