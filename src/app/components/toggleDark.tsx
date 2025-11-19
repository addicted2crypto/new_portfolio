"use client"
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useDarkMode } from '../context/darkmode-context';
import { motion, AnimatePresence } from 'framer-motion';



export default function Toggledarkmode() {

    const { theme, toggleTheme } = useDarkMode();

    return (
    <motion.button
    className='fixed md:bottom-8 md:left-8 sm:bottom-5 sm:left-5 lg:bottom-18 lg:bottom-18
               bg-[#c4c4c3] bg-opacity-85 backdrop-blur-[0.5rem] border border-[#fff]
               shadow-2xl rounded-full flex items-center justify-center
               w-[2rem] h-[2rem]
               dark:bg-[#262626] dark:border-[#444]
               transition-colors duration-300'
     onClick={toggleTheme}
     whileHover={{ scale: 1.15, rotate: 15 }}
     whileTap={{ scale: 0.95, rotate: -15 }}
     transition={{
       type: 'spring',
       stiffness: 400,
       damping: 17
     }}
    >
        <AnimatePresence mode='wait'>
          {theme === 'light' ? (
            <motion.div
              key='sun'
              initial={{ rotate: -180, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 180, opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <BsSun className='text-yellow-500' />
            </motion.div>
          ) : (
            <motion.div
              key='moon'
              initial={{ rotate: 180, opacity: 0, scale: 0 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -180, opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <BsMoon className='text-blue-300' />
            </motion.div>
          )}
        </AnimatePresence>

    </motion.button>
  )
}
