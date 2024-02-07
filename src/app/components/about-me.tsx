"use client"
import React, { useEffect } from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useActiveSection } from '../context/active-section';
import { useInView } from 'react-intersection-observer'

export default function AboutMe() {
  const {ref, inView} = useInView({
    threshold: 0.39,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection()

  useEffect(() => {

 
 if(inView && Date.now() - timeOfLastClick > 1000) {
  setActiveSection("About");
 }
}, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section 
       ref={ref}
       className='mb-28 max-w-[45rem] text-center leading-9 sm:mb-40 scroll-mt-28'
       initial={{ opacity:0, y: 100 }}
       animate={{ opacity:1, y: 0}}
       transition={{ delay: 0.175 }}
       id="about"
       
       >
        <SectionHeader>About me</SectionHeader>
        <p className='mb-8'>
        Welcome to my portoflio portal! My journey into the world of code began with a thrilling opportunity to test an app during my early days at my current job. 
        The experience of providing direct feedback ignited a excitment i call the butterlies, and since then, code has become more than just a hobby. Code is my undeniable passion.




        </p>
      
        <p className='mb-8'>
        As a full-stack developer, I thrive on the dynamic nature of software development. Embracing the ever-changing landscape and reveling pushing the limits of problem-solving,
        I find my stride in the constant evolution of technology. Beyond the lines of code, my family holds the key to my heart, making them my primary source of inspiration and support.
        

        </p>
        <p className='mb-8'>
        My commitment to learning propels me forward, as I enthusiastically explore new technologies and stay abreast of industry trends. Join me on this coding journey, where 
innovation meets dedication, and let's create something extraordinary together.

        </p>
        </motion.section>
        
  )
}
