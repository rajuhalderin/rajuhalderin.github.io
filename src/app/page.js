'use client'
import Image from 'next/image'
import profilePic from "../../public/dev-profile-1.png"
import { AnimatedText } from './component/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from './component/Icon'
import Hireme from './component/Hireme'
import TransitionEffect from './component/TransitionEffect'
import { usePathname } from 'next/navigation'

export default function Home() {
  const path= usePathname();
  return (
    <main>
      <div className='w-full h-full inline-block z-0 px-20 bg-light dark:bg-dark xl:px-20 lg:px-16 md:px-12 sm:px-8 pt-0 md:pt-16 sm:pt-8'>
      <div className="flex items-center text-dark dark:text-light w-full h-full">
        <div className='flex items-center justify-between w-full lg:flex-col'>
          <div className='w-1/2 md:w-full'>
            <Image src={profilePic} alt='Raju Halder' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
            priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'/>
          </div>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text="Code and design make vision a tangible reality."
              className='!text-6xl !text-left !mb-3 text-dark dark:text-light
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As an adept full-stack developer, I specialize in transforming concepts into cutting-edge web applications. Check out my recent projects and articles that demonstrate my proficiency in React.js and web development.</p>
            <div className='flex items-center self-start mt-2 lg:self-center pb-8'>
              <Link href="#"
                className='flex items-center bg-dark text-light p-2.5 
                px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' download={true}>Resume
                <LinkArrow className="w-6 ml-1"/></Link>
              <Link href="https://api.whatsapp.com/send?phone=917811998080&text=Hi"
              className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Hireme/>
    </main>
  )
}
