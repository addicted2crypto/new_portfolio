"use client"
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { motion, useScroll, useTransform } from 'framer-motion';
import { links } from '../lib/data';
import { useActiveSection } from '../context/active-section';


export default function Header() {

 const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSection();

 const { scrollY } = useScroll();
 const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
 const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);
 const headerShadow = useTransform(
   scrollY,
   [0, 100],
   ['0 0 0 rgba(0,0,0,0)', '0 10px 30px rgba(0,0,0,0.15)']
 );
 const backdropBlur = useTransform(
   scrollY,
   [0, 100],
   ['blur(0.5rem)', 'blur(1rem)']
 );

  return <header className='z-[999] relative'>
    <motion.div
    className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-90
               bg-blue-100 shadow-lg shadow-black/[0.03]
               sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
               dark:bg-[#060606] dark:border-black/40 transition-all duration-300'
    initial={{ y: -100, x: "-50%", opacity: 0}}
    animate={{ y: 0, x: "-50%", opacity: 1}}
    style={{
      opacity: headerOpacity,
      scale: headerScale,
      boxShadow: headerShadow,
      backdropFilter: backdropBlur,
      WebkitBackdropFilter: backdropBlur,
    }}
    >

    </motion.div>

    <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
      <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[.969rem] font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
        {links.map(link => (
          <motion.li className='h-3/4 flex items-center justify-center relative'
            key={link.hash}
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            >
            
            
             <Link className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-[#c1c1c1] dark:hover:text-[#e8e6e6]', {
              'text-[#050202]' : activeSection === link.name
             })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now());
                }}
                >
                  {link.name}
                  {
                    link.name === activeSection && (
                      <motion.span className='bg-[#8ba8c3] rounded-full absolute inset-0 -z-10 dark:bg-[#384450]'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      >

                  </motion.span>
                    )
                  }
                  
              </Link>
            
            

          </motion.li>
        ))}
      </ul>
    </nav>

  </header>
}
