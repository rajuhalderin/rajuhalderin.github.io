'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"
import { MyLogo } from './Icon';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <motion.a href="/" aria-label='Website Logo'
        className='w-16 sm:w-14 sm:h-14 xs:w-12 xs:h-12 bg-dark text-light flex items-center 
        justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{
            scale:1.2,
            transition:{duration:0.5, ease:"easeInOut"} 
        }}
        ><MyLogo/></motion.a>
    </div>
  )
}

export default Logo