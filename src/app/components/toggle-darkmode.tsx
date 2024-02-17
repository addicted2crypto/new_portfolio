"use client"
import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export type Theme = "light" | "dark";

export default function Toggledarkmode() {
  const [theme, setTheme] = useState<Theme>("light");
  

  //stores on clients localstorage to remember prefrence
  const toggleTheme = () => {
    if(theme === 'light') {
        setTheme('dark');
        window.localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
    } else {
        setTheme('light');
        window.localStorage.setItem("theme", 'light');
        document.documentElement.classList.remove('dark');
    }
    
  };


  //useEffect runs a check of local storage-> use effect is good for reading outside react in this situation
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')as Theme | null;
    if (localTheme) {
        setTheme(localTheme);

        if(localTheme === "dark"){
            document.documentElement.classList.add('dark');
        }

    } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
    }

  }, []);

    return (
    <button className='fixed md:top-3 md:right-3 sm:top-0 sm:right-0 bg-[#c4c4c3] bg-opacity-85 backdrop-blur-[0.5rem] border border-[#fff] shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-110 transition-all w-[2rem] h-[2rem] dark:bg-[#262626]'
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
