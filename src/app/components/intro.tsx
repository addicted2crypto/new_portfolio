"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
         <div className='relative'>
            <motion.div
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ type: 'spring', duration: 0.169}}
            >
            <Image src='/ours.jpg'
             alt='my image'
             width={90}
             height={90}
             quality={90}
             priority={true}
             className='h-30 w-30 rounded-full object-cover border-[.369rem] border-slate-50 shadow-xl'
             />
             </motion.div>
             <span className='absolute text-4xl top-0 left-0'>
                🫡
             </span>
         </div>
        
        </div>
        
    </section>
  )
}
