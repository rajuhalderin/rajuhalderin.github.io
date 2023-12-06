import React from 'react'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-solid border-dark dark:border-light py-8 font-medium dark:bg-dark'>
        <div className='py-1 flex item-center justify-between'>
        <span className='ml-8 dark:text-light'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer