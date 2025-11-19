"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { LuHardDriveDownload } from 'react-icons/lu';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { useSectionTimeOutForClick } from '../lib/hooks';
import { useActiveSection } from '../context/active-section';


export default function Intro() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);
    const { ref } = useSectionTimeOutForClick("Home", 0.6);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.2;
        const deltaY = (e.clientY - centerY) * 0.2;
        setMousePosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };
  


    return (
        <section
            ref={ref}
            id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[69rem]'>
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
                <span className='font-bold text-3xl'>Hello, I&apos;m William</span>

                <h1>
                    <span className='font-semi-bold italic text-center'>

                    I am a full-stack software engineer.
                    <h3>
                    I build scalable web applications with <span className='font-bold text-5xl m-2'>passion</span> and precision.
                        </h3>
                    </span>
                </h1>
                <h2>
                    <span className='font-bold text-3xl'>
                        Specializing in AI & Web3 Solutions
                    </span>
                </h2>
                <h3>
                    <span className='font-semi-bold text-xl'>
                        Passionate about solving complex problems through elegant code and innovative technology.
                    </span>
                </h3>
                <motion.div
                    className='flex flex-col items-center gap-6 pt-8 w-full max-w-md px-4'
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.6,
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    {/* Primary CTA - Full Width with Magnetic Effect */}
                    <motion.div
                        className='w-full'
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                            }
                        }}
                    >
                        <motion.div
                            ref={buttonRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            animate={{
                                x: mousePosition.x,
                                y: mousePosition.y
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20
                            }}
                        >
                            <Link
                                href="#contact"
                                onClick={() => {
                                    setActiveSection('Contact');
                                    setTimeOfLastClick(Date.now());
                                }}
                                className='group relative w-full flex items-center justify-center gap-3
                                         bg-gray-950 text-white px-8 py-4 rounded-full text-lg font-medium
                                         overflow-hidden transition-all duration-300
                                         hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                                         dark:bg-gray-900 dark:hover:shadow-blue-400/30'
                            >
                                <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                                               opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                <span className='relative z-10'>Contact me</span>
                                <BsArrowRight className='relative z-10 group-hover:translate-x-2 transition-transform duration-300' />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Secondary Actions - Grouped */}
                    <motion.div
                        className='flex flex-wrap gap-3 justify-center w-full'
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                            }
                        }}
                    >
                        <a
                            href="/semperIncludedRes.pdf"
                            download
                            className='group flex items-center gap-2 px-6 py-3 rounded-full
                                     bg-white/80 backdrop-blur-sm border border-black/10
                                     hover:bg-white hover:scale-105 hover:shadow-lg
                                     transition-all duration-300
                                     dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20'
                        >
                            <LuHardDriveDownload className='group-hover:translate-y-1 transition-transform duration-300' />
                            <span>Download PDF</span>
                        </a>

                        <Link
                            href="/resume"
                            target='_blank'
                            className='group flex items-center gap-2 px-6 py-3 rounded-full
                                     bg-white/80 backdrop-blur-sm border border-black/10
                                     hover:bg-white hover:scale-105 hover:shadow-lg
                                     transition-all duration-300
                                     dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20'
                        >
                            <HiDocumentText className='group-hover:scale-110 transition-transform duration-300' />
                            <span>View Resume</span>
                        </Link>
                    </motion.div>

                    {/* Social Icons - Separate Group */}
                    <motion.div
                        className='flex gap-4 pt-2'
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
                            }
                        }}
                    >
                        <a
                            href="https://www.linkedin.com/in/william360/"
                            target='_blank'
                            className='group relative p-4 rounded-full bg-white/80 backdrop-blur-sm
                                     border border-black/10 hover:scale-110 hover:shadow-lg
                                     transition-all duration-300
                                     dark:bg-white/10 dark:border-white/20'
                        >
                            <BsLinkedin className='text-2xl text-gray-700 dark:text-white/70
                                                  group-hover:text-blue-600 dark:group-hover:text-blue-400
                                                  transition-colors duration-300' />
                        </a>
                        <a
                            href="https://github.com/addicted2crypto/"
                            target='_blank'
                            className='group relative p-4 rounded-full bg-white/80 backdrop-blur-sm
                                     border border-black/10 hover:scale-110 hover:shadow-lg
                                     transition-all duration-300
                                     dark:bg-white/10 dark:border-white/20'
                        >
                            <FaGithubSquare className='text-2xl text-gray-700 dark:text-white/70
                                                      group-hover:text-gray-950 dark:group-hover:text-white
                                                      transition-colors duration-300' />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.section>
        </section>
    )
}
