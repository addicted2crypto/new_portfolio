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
             className='h-30 w-30 rounded-full object-cover border-[.369rem] border-slate-50 shadow-xl'/>

             </motion.div>
             <motion.span className='absolute text-4xl top-0 left-0'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: 'keyframes',
                    stiffness: 125,
                    delay: 0.69,

                }}

             >
               
                🫡
             
             </motion.span>
         </div>
        
        </div>
        <p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
            <span className='font-bold text-3xl'>Hello, my name is William</span>
        
            <p>
                <span className='font-semi-bold italic text-center'>

                I love to code. <span className='text-2xl'>🧑‍💻</span>
                </span>
            </p>
            <p>
                <span className='font-bold italic '>
                I am a full-stack developer, who loves trying new tech stacks. 
                </span>
            </p>
            <p>
                <span className='font-semi-bold text-xl'>
                I enjoy difficult problems to be <span className='bg-gray-300 rounded-2xl underline'>solved</span> with code. 
                </span>
            </p>
            <p>

            </p>
            </p>
    </section>
  )
}
