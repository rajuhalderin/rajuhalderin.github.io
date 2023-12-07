import Link from "next/link"
import { CircularText } from "./Icon"


const Hireme = () => {
    return (
        <div className="fixed z-20 right-3 bottom-3
         flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 sm:top-0 ">
            <div className="w-48 h-auto flex items-center justify-center relative 
            md:w-24 sm:w-20">
                <CircularText className='fill-dark animate-spin-slow dark:fill-light'/>
            </div>
            <Link href="https://api.whatsapp.com/send?phone=917811998080&text=Hi"
            className="flex items-center justify-center absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 font-semibold
            bg-dark dark:bg-light
            text-light dark:text-dark
            border border-solid border-dark hover:dark:border-light
            w-20 h-20 rounded-full shadow-md 
            hover:bg-light hover:dark:bg-dark 
            hover:text-dark hover:dark:text-light
            md:w-12 md:h-12 md:text-[10px]
            sm:w-10 sm:h-10 sm:text-[8px]
            "
            >Hire Me</Link>
        </div>
    )
}

export default Hireme