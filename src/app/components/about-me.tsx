"use client"
import React from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useSectionTimeOutForClick } from '../lib/hooks';

export default function AboutMe() {
  const { ref } = useSectionTimeOutForClick("About", 0.555);
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
        The experience of providing direct feedback ignited a excitment i call the butterlies&#39; and since then&#39; code has become more than just a hobby. Code is my undeniable passion.




        </p>
      
        <p className='mb-8'>
        As a full-stack developer, I thrive on the dynamic nature of software development. Embracing the ever-changing landscape and reveling pushing the limits of problem-solving,
        I find my stride in the constant evolution of technology. Beyond the lines of code&#39; my family holds the key to my heart&#39; making them my primary source of inspiration and support.
        

        </p>
        <p className='mb-8'>
        My commitment to learning propels me forward&rsquo; as I enthusiastically explore new technologies and stay abreast of industry trends. Join me on this coding journey&#39; where 
        innovation meets dedication&#39; and let&apos;s create something extraordinary together.

        </p>
        </motion.section>
        
  )
}
