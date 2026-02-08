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
        I&apos;m a full-stack software engineer currently working as a <span className='font-semibold'>DoD contractor</span> supporting Defense Health Agency platforms including health.mil and TRICARE. I&apos;m helping ship the first government blockchain deployment in production using Hyperledger Iroha, and building internal tooling that&apos;s been adopted across multiple DoD teams.
        </p>

        <p className='mb-8'>
        Outside of my contract work, I&apos;m building <span className='font-semibold'>GymTech</span>—a SaaS platform for martial arts and fitness gyms. From multi-tenant architecture to Stripe Connect integrations, I enjoy solving real business problems with clean, scalable code. I&apos;m <span className='font-semibold'>CompTIA Security+ certified</span> and take security seriously in everything I build.
        </p>

        <p className='mb-8'>
        My background spans Web3, AI integrations, and enterprise systems. I&apos;ve led teams, shipped production apps, and worked with technologies ranging from React and TypeScript to Rust and Solidity. When I&apos;m not coding, I&apos;m usually with my family—they keep me grounded and motivated.
        </p>
        </motion.section>
        
  )
}
