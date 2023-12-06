'use client'
import Link from 'next/link'
import Logo from './Logo'
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icon';
import { motion } from "framer-motion"
import useThemeSwicher from './Hooks/useThemeSwicher';

const CustomLink = ({ href, title, className = "" }) => {
    const router = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 ${router === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const path = usePathname();

    const handleClick = () => {
        toggle();
        router.push(href);
    }
    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 ${path === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwicher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light dark:bg-dark dark:border-transparent z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className='lg:flex flex-col justify-center items-center hidden' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/*Desktop Navigation*/}
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    {/* <CustomLink href="/projects" title="Projects" className='mx-4' />
                    <CustomLink href="/articles" title="Articles" className='ml-4' /> */}
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://www.facebook.com/dev.rajuhalder" target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 ml-3'>
                        <FacebookIcon />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/dev_rajuhalder" target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mx-3'>
                        <InstagramIcon />
                    </motion.a>
                    <motion.a href="https://twitter.com/dev_rajuhalder" target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mr-3'>
                        <TwitterIcon /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/dev-rajuhalder/" target='_blank'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mr-3'>
                        <LinkedInIcon /></motion.a>
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>{
                        mode === "dark" ? <SunIcon className={"fill-dark"} /> :
                            <MoonIcon className={"fill-dark"} />
                    }</button>
                </nav>
            </div>

            {/*Mobile Navigation*/}
            {
                isOpen ?
                    <motion.div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                    initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                    animate={{scale:1, opacity:1}}>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
                            {/* <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
                            <CustomMobileLink href="/articles" title="Articals" toggle={handleClick} /> */}
                        </nav>
                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href="https://www.facebook.com/dev.rajuhalder" target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mr-2 sm:mx-1'>
                                <FacebookIcon />
                            </motion.a>
                            <motion.a href="https://www.instagram.com/dev_rajuhalder" target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-2 sm:mx-1'>
                                <InstagramIcon />
                            </motion.a>
                            <motion.a href="https://twitter.com/dev_rajuhalder" target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-2 sm:mx-1'>
                                <TwitterIcon /></motion.a>
                            <motion.a href="https://www.linkedin.com/in/dev-rajuhalder/" target='_blank'
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-6 mx-2 sm:mx-1'>
                                <LinkedInIcon /></motion.a>
                            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar