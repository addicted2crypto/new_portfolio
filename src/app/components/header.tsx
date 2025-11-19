"use client"
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { motion } from 'framer-motion';
import { links } from '../lib/data';
import { useActiveSection } from '../context/active-section';


export default function Header() {

 const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSection();

  return <header className='z-[999] relative'>
    <motion.div
    className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-black border-opacity-90
               bg-blue-100 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
               sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
               dark:bg-[#060606] dark:border-black/40 dark:bg-opacity-80'
    initial={{ y: -100, x: "-50%", opacity: 0}}
    animate={{ y: 0, x: "-50%", opacity: 1}}
    >

    </motion.div>

    <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
      <ul className='flex w-[22rem] flex-wrap items-center justify-between gap-y-1 text-[0.8rem] font-medium text-gray-600 sm:w-[34rem] sm:flex-nowrap sm:gap-1 sm:px-2'>
        {links.map(link => {
          // Special styling for Home and Contact
          const isHome = link.name === 'Home';
          const isContact = link.name === 'Contact';
          const isSpecial = isHome || isContact;

          return (
            <motion.li
              className={clsx('flex items-center justify-center relative', {
                'order-first': isHome,
                'order-last': isContact,
              })}
              key={link.hash}
              initial={{ y: -100, opacity: 0}}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex items-center justify-center transition',
                  {
                    // Special styling for Home and Contact
                    'px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-sm': isSpecial,
                    'px-2 py-2 hover:text-gray-950 dark:hover:text-[#e8e6e8]': !isSpecial,
                    'text-[#050202] dark:text-white': activeSection === link.name,
                    'dark:text-[#c1c1c1]': activeSection !== link.name && !isSpecial,
                    'text-gray-700 dark:text-gray-300': isSpecial && activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {
                  link.name === activeSection && !isSpecial && (
                    <motion.span
                      className='bg-[#8ba8c3] rounded-full absolute inset-0 -z-10 dark:bg-[#384450]'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )
                }
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>

  </header>
}
