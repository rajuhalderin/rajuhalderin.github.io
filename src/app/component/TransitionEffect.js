'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'

const TransitionEffect = ({ path }) => {
  return (
    <AnimatePresence>
      <motion.div className='fixed flex items-center justify-center top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%"}}
        // exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
      </motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }} />
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light'
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }} />
    </AnimatePresence>
  )
}

export default TransitionEffect