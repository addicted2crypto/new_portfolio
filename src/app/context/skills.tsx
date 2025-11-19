"use client"

import React from 'react'
import SectionHeader from '../components/sectionHeader'
import { skillsData } from '../lib/data'
import { useSectionTimeOutForClick } from '../lib/hooks';
import { motion } from 'framer-motion';

const inViewAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  //  when adding arguments need to tell TS what kind of argument it is with : num, bool, ""
  animate: (index: number) => ({
    // wrapped funtion in () to not need return keyword
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionTimeOutForClick("Skills", 0.555);

  return (
    <section ref={ref} id='skills'className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
      
      <SectionHeader>My skills</SectionHeader>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-[#404040]'>
       {
        skillsData.map((skill, index) => (
          <motion.li
          className='bg-[#f6f6f6] border border-[#000]/[.169] rounded-lg px-5 py-3
                     cursor-default transition-colors duration-300
                     dark:bg-white/20 dark:text-white/80'
          key={index}
          variants={inViewAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          whileHover={{
            scale: 1.1,
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            borderColor: 'rgba(59, 130, 246, 0.5)',
            y: -5,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 17
          }}
          >
            {skill}
          </motion.li>
        ))
       }
      </ul>
    </section>
  )
}
