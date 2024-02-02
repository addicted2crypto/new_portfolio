"use client"; 

import React from 'react';
import { motion } from "framer-motion";

export default function SectionSeperator() {
  return (
    <motion.div className='bg-[#e3e3e3] my-24 h-16 w-[1.369rem] rounded-full hidden sm:block'
    initial={{opacity: 0, y: 100 }}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.1969}}
    >

    </motion.div>
  )
}
