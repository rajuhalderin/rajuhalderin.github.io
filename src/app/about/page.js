"use client"
import { AnimatedText } from '../component/AnimatedText'
import Image from 'next/image'
import profileImage from '../../../public/author.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Skills from '../component/Skills'
import TransitionEffect from '../component/TransitionEffect'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref);
    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])
    useEffect(() => {
      springValue.on("change", (latest)=>{
        if(ref.current && latest.toFixed(0) <= value)
        ref.current.textContent = latest.toFixed(0);
      })
    }, [springValue, value])
    
    
    return <span ref={ref}></span>
}

const About = () => {
  return (
    <main>
      <TransitionEffect/>
      <div className='w-full flex flex-col justify-center items-center px-32 pt-16 dark:bg-dark dark:text-light xl:px-24 lg:px-16 md:px-12 sm:px-8'>
        <AnimatedText text="Passion drives purpose!" className='mb-16 dark:text-light lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='w-full grid grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                <p className='font-medium'>Hi, I&apos;m Raju Halder—a web developer and UI/UX designer dedicated to crafting stunning, user-friendly digital experiences. With over 5 years of expertise, I continually seek fresh, inventive approaches to realize my clients&apos; aspirations.</p>
                <p className='font-medium py-4'>Design goes beyond aesthetics; it involves problem-solving and crafting user-friendly, enjoyable experiences.</p>
                <p className='font-medium'>When working on websites, mobile apps, or any digital product, I&apos;m dedicated to top-notch design and user-focused strategies. I&apos;m excited about the chance to contribute my skills and passion to your upcoming project.</p>
            </div>
            <div className='col-span-3 relative h-full rounded-full  bg-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-full bg-dark dark:bg-light'/> */}
                <Image src={profileImage} alt='Raju Halder' className='w-full h-auto rounded-full'
                priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw'/>
            </div>
            
            <div className='flex flex-col col-span-2 items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-between xl:items-center'>
                    <span className='text-7xl inline-block font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={8}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                </div>
                <div className='flex flex-col items-end justify-between xl:items-center'>
                    <span className='text-7xl inline-block font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={10}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                </div>
                <div className='flex flex-col items-end justify-between xl:items-center'>
                    <span className='text-7xl inline-block font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={5}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
                </div>
            </div>
        </div>
        <Skills/>
        {/* <Experience/>
        <Education/> */}
    </div>
    </main>
  )
}

export default About