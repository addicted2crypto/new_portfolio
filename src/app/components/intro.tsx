"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { LuHardDriveDownload } from 'react-icons/lu';
import { FaGithubSquare } from 'react-icons/fa';


export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.169 }}>

                        <Image src='/ours.jpg'
                            alt='my image'
                            width={90}
                            height={90}
                            quality={90}
                            priority={true}
                            className='h-30 w-30 rounded-full object-cover border-[.369rem] border-slate-50 shadow-xl' />

                    </motion.div>
                    <motion.span className='absolute text-4xl top-0 left-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
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
            <motion.section className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold text-3xl'>Hello, my name is William</span>

                <h1>
                    <span className='font-semi-bold italic text-center'>

                        I love to code. <span className='text-2xl'>🧑‍💻</span>
                    </span>
                </h1>
                <h2>
                    <span className='font-bold italic '>
                        I am a full-stack developer, who loves trying new tech stacks.
                    </span>
                </h2>
                <h3>
                    <span className='font-semi-bold text-xl'>
                        I enjoy difficult problems to be <span className='bg-gray-300 rounded-2xl underline'>solved</span> with code.
                    </span>
                </h3>
                <motion.div className='flex flex-col items-center justify-center text-lg hover:cursor-pointer sm:flex-row pt-8 gap-2 px-2 font-medium'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.169 }}
                >
                    <Link href="#contact" className='group bg-gray-950 text-gray-50 text-xl px-7 py-3 flex items-center gap-2 outline-none rounded-full hover:scale-110 hover:bg-blue-950 active:scale-105 transition'>
                        Contact me
                        <BsArrowRight className='opacity-69 group-hover:translate-x-1 transition'/>
                    </Link>

                    <a className='group bg-gray-50 px-7 py-3 flex items-center gap-2 rounded-e-full underline outline-none focus:scale-110 hover:scale-110' href="/resume.pdf" download>
                        Download resume 
                        <LuHardDriveDownload className='opacity-69 group-hover:translate-y-1 transition'/></a>

                    <a className='bg-slate-50 text-gray-800 p-4 flex items-center gap-2 rounded-rull'>
                        <BsLinkedin />
                    </a>
                    <a className='bg-slate-50 text-gray-800 p-4 flex items-center gap-2 text-[2.69rem] rounded-rull'>
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </motion.section>
        </section>
    )
}
