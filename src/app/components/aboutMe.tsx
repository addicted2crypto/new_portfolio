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
        Full-stack engineer and <span className='font-semibold'>smart contract security auditor</span> with 8+ years of production experience across federal healthcare IT, Web3 infrastructure, and independent SaaS. Day job: <span className='font-semibold'>DoD contract engineer</span> supporting Defense Health Agency platforms — shipping the first government blockchain deployment in production on Hyperledger Iroha. <span className='font-semibold'>CompTIA Security+ | IAT II</span> certified.
        </p>

        <p className='mb-8'>
        Off hours: auditing smart contracts on <span className='font-semibold'>Avalanche</span>, building SaaS tools, and shipping community projects at <span className='font-semibold'>The Grotto</span> (AVAX ecosystem). 44-finding audit track record — most recent: Club HashCash (Avalanche C-Chain). Methodology covers <span className='font-semibold'>OWASP Smart Contract Top 10 2026</span>: ABI-level analysis, adversarial threat modeling, Foundry PoC generation.
        </p>

        <p className='mb-8'>
        Currently expanding <span className='font-semibold'>AvaSleuth</span> (ContractSleuth + WalletSleuth + TokenRadar), shipping GymTech to production, and open to smart contract audit engagements. When a new tool ships that changes how things get built, I learn it and integrate it. I do not plateau.
        </p>
        </motion.section>
        
  )
}
