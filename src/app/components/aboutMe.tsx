"use client"
import React from 'react';
import SectionHeader from './sectionHeader';
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
        Welcome to my portfolio! My journey into the world of code began with an exciting opportunity to test AI implementation in early 2016. The experience of providing direct feedback ignited an excitement that hasn't faded since. Code has become more than just a hobby—it's my undeniable passion.
        </p>

        <p className='mb-8'>
        As a software engineer, I thrive on the dynamic nature of software development, embracing the ever-changing landscape and reveling in pushing the limits of problem-solving. I find my stride in the constant evolution of technology. Beyond my passion for code and tech, my family holds the key to my heart, making them my primary source of inspiration and support.
        </p>

        <p className='mb-8'>
        My commitment to learning propels me forward as I enthusiastically explore new technologies and keep up with industry trends. Join me on this coding journey where innovation meets dedication, and let's create something extraordinary together.
        </p>
        </motion.section>
        
  )
}
