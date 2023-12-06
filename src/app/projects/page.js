'use client'
import Link from "next/link"
import { AnimatedText } from "../component/AnimatedText"
import Image from "next/image"
import {motion} from 'framer-motion'
import { FacebookIcon, GithubIcon } from "../component/Icon"
import crypto from '../../../public/projects/crypto-screener-cover-image.jpg'
import NFTweb from '../../../public/projects/nft-collection-website-cover-image.jpg'
import Fashion from '../../../public/projects/fashion-studio-website.jpg'
import PortfolioWebsite from '../../../public/projects/portfolio-cover-image.jpg'
import Agency from '../../../public/projects/agency-website-cover-image.jpg'
import DevDreaming from '../../../public/projects/devdreaming.jpg'
import TransitionEffect from "../component/TransitionEffect"

const FramerImage = motion(Image);
const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className=" w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid p-12 border-dark bg-light dark:bg-dark dark:border-light shadow-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
                <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                    <FramerImage src={img} alt={title} className="w-full h-auto" 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw'/>
                </Link>
                <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                    <span className=" text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                    <Link href={link} target="_blank" className=" hover:underline underline-offset-2">
                        <h2 className=" my-2 w-full text-left font-bold text-4xl sm:text-sm">{title} </h2>
                    </Link>
                    <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                    <div className="mt-2 flex ic">
                        <Link href={github} target="_blank" className=" w-10"><GithubIcon /></Link>
                        <Link href={github} target="_blank" className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4">Visit Project</Link>
                    </div>
                </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className=" w-full flex items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative flex-col xs:p-4">
            <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}/>
            </Link>
            <div className="w-full flex flex-col items-start justify-between">
                <span className=" text-primary font-medium text-xl mt-4 lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className=" hover:underline underline-offset-2">
                    <h2 className=" my-2 w-full text-left font-bold text-3xl lg:text-2xl">{title} </h2>
                </Link>
                <div className="mt-2 flex items-center justify-between w-full">
                    <Link href={github} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</Link>
                    <Link href={github} target="_blank" className=" w-8 md:w-6"><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <main>
            <TransitionEffect/>
            <div className="w-full pb-16 flex flex-col items-center justify-center px-32 dark:bg-dark dark:text-light xl:px-24 lg:px-16 md:px-12 sm:px-8">
            <AnimatedText text={"Imagination Trumps Knowledge!"} className="p-16 dark:text-light lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                    <FeatureProject type={"Feature Project"}
                        title={"Crypto Screener Application"}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."} link={"/"} github={"/"} img={crypto} />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project title={"NFT collection Website"}
                        type={"Website Template"}
                        img={NFTweb} link={"/"}
                        github={"/"} />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project title={"Fashion Studio Website"}
                        type={"Website"}
                        img={Fashion} link={"/"}
                        github={"/"} />
                </div>

                <div className="col-span-12">
                    <FeatureProject type={"Portfolio Website"}
                        title={"React Portfolio Website"}
                        summary={"A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."} link={"/"} github={"/"} img={PortfolioWebsite} />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project title={"Agency Website Template"}
                        type={"Website Template"}
                        img={Agency} link={"/"}
                        github={"/"} />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project title={"DevDreaming"}
                        type={"Blog Website"}
                        img={DevDreaming} link={"/"}
                        github={"/"} />
                </div>
            </div>
        </div>
        </main>
    )
}

export default Projects