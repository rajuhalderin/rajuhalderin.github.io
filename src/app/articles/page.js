'use client'
import { useRef } from 'react'
import { AnimatedText } from '../component/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion'
import pagination from '../../../public/articles/pagination component in reactjs.jpg'
import createLoading from '../../../public/articles/create loading screen in react js.jpg'
import formValidation from '../../../public/articles/form validation in reactjs using custom react hook.png'
import TransitionEffect from '../component/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}>
            <h2 className=' capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, duration: 0.2 }} />
        </Link>
    )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl dark:text-light'>
            <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw' />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className=' capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
                <p className=' text-sm mb-2'>{summary}</p>
                <span className=' text-primary dark:text-primaryDark font-semibold'>{time}</span>
            </Link>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className=' relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className=' text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const Articles = () => {
    return (
        <main>
            <TransitionEffect/>
            <div className=' w-full h-auto flex flex-col items-center justify-center overflow-hidden dark:bg-dark xl:px-24 lg:px-16 md:px-12 sm:px-8'>
            <AnimatedText text={"Words Can Change The World!"} className='m-16 dark:text-light lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md: gap-y-16'>
                <FeaturedArticles img={pagination} link={"/"} time={"9 min read"} title={"Build A Custom Pagination Component In Reactjs From Scratch"} summary={"Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."} />
                <FeaturedArticles img={createLoading} link={"/"} time={"9 min read"} title={"Build A Custom Pagination Component In Reactjs From Scratch"} summary={"Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."} />
            </ul>
            <h2 className=' font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
            <ul className='w-full'>
                <Article img={formValidation} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"} link={"/"} date={"27-11-2023"} />
                <Article img={formValidation} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"} link={"/"} date={"27-11-2023"} />
                <Article img={formValidation} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"} link={"/"} date={"27-11-2023"} />
                <Article img={formValidation} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"} link={"/"} date={"27-11-2023"} />
                <Article img={formValidation} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"} link={"/"} date={"27-11-2023"} />
                <Article img={formValidation} title={"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"} link={"/"} date={"27-11-2023"} />
            </ul>
        </div>
        </main>
    )
}

export default Articles
