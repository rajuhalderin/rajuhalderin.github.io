import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) =>{
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark shadow-dark hover:scale-105 cursor-pointer absolute py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x, y:y, transition:{duration:1.5}}}
        viewport={{once:true}}>
          {name}</motion.div>
  )
}

const Skills = () => {
  return (
    <div className='w-full'>
      <h2 className='font-bold text-8xl mt-64 mb-48 w-full text-center md:text-6xl md:mt-32 xs:text-4xl md:mb-16'>Skills</h2>
      <div className='w-full h-screen mb-48 relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
      md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark px-8 py-5 shadow-dark hover:scale-105 cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}>Development</motion.div>

        <Skill name="React JS" x="-22vw" y="1vw"/>
        <Skill name="Node JS" x="-5vw" y="-8vw"/>
        <Skill name="Kotlin" x="20vw" y="6vw"/>
        <Skill name="C#" x="0vw" y="12vw"/>
        <Skill name="Next JS" x="-18vw" y="-14vw"/>
        <Skill name="Java" x="15vw" y="-12vw"/>
        <Skill name="System Design" x="32vw" y="-5vw"/>
        <Skill name="Figma" x="0vw" y="-21vw"/>
        <Skill name="Firebase" x="-25vw" y="18vw"/>
        <Skill name="Tailwind CSS" x="18vw" y="18vw"/>
      </div>
    </div>
  )
}

export default Skills