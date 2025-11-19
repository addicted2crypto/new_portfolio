"use client"
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useDarkMode } from '../context/darkmode-context';



export default function Toggledarkmode() {

    const { theme, toggleTheme } = useDarkMode();
   
    return (
    <button className='fixed md:bottom-8 md:left-8 sm:bottom-5 sm:left-5 lg:bottom-18 lg:bottom-18 bg-[#c4c4c3] bg-opacity-85 backdrop-blur-[0.5rem] border border-[#fff] shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-110 transition-all w-[2rem] h-[2rem] dark:bg-[#262626]'
     onClick={toggleTheme}
    >
        {
            theme === 'light' ? (
                <BsSun />
            ) : (
                <BsMoon />
            )
        }
       
    </button>
  )
}
