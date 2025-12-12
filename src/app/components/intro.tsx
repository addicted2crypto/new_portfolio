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
    const [imageTilt, setImageTilt] = useState({ rotateX: 0, rotateY: 0 });
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

    const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const maxTilt = 25;
        const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
        const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;

        setImageTilt({ rotateX, rotateY });
    };

    const handleImageMouseLeave = () => {
        setImageTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
        <section
            ref={ref}
            id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[69rem]'>
            <div className='flex items-center justify-center'>
                <motion.div
                    className='relative cursor-pointer'
                    onMouseMove={handleImageMouseMove}
                    onMouseLeave={handleImageMouseLeave}
                    animate={{
                        rotateX: imageTilt.rotateX,
                        rotateY: imageTilt.rotateY,
                        scale: imageTilt.rotateX !== 0 || imageTilt.rotateY !== 0 ? 1.1 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                >
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
                            className='h-30 w-30 rounded-full object-cover border-[.369rem] border-slate-50 shadow-xl'
                            style={{
                                boxShadow: `${-imageTilt.rotateY * 0.5}px ${imageTilt.rotateX * 0.5}px 20px rgba(0,0,0,0.3)`
                            }} />

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
                </motion.div>
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
                    className='flex items-center justify-center gap-4 pt-8 px-4 flex-wrap'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    {/* Contact Button with Magnetic Effect */}
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
                            className='group relative flex items-center gap-2
                                     bg-gray-900 text-white px-7 py-3 rounded-full
                                     overflow-hidden transition-all duration-300
                                     hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                                     dark:bg-white/10'
                        >
                            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <span className='relative z-10'>Contact me here</span>
                            <BsArrowRight className='relative z-10 group-hover:translate-x-2 transition-transform duration-300' />
                        </Link>
                    </motion.div>

                    {/* Download PDF */}
                    <a
                        href="/newres.pdf"
                        download
                        className='group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none
                                 focus:scale-110 hover:scale-110 active:scale-105 transition
                                 borderBlack dark:bg-white/10'
                    >
                        <LuHardDriveDownload className='opacity-60 group-hover:translate-y-1 transition' />
                        Download CV
                    </a>

                    {/* View Resume */}
                    <Link
                        href="/resume"
                        target='_blank'
                        className='group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none
                                 focus:scale-110 hover:scale-110 active:scale-105 transition
                                 borderBlack dark:bg-white/10'
                    >
                        <HiDocumentText className='opacity-60 group-hover:scale-110 transition' />
                        View Resume
                    </Link>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/william360/"
                        target='_blank'
                        className='bg-white p-4 text-gray-700 rounded-full
                                 border border-black/10 hover:scale-110 hover:shadow-lg
                                 hover:text-blue-600
                                 transition-all duration-300
                                 dark:bg-gray-950 dark:text-white/70'
                    >
                        <BsLinkedin />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/addicted2crypto/"
                        target='_blank'
                        className='bg-white p-4 text-gray-700 rounded-full
                                 border border-black/10 hover:scale-110 hover:shadow-lg
                                 hover:text-gray-950
                                 transition-all duration-300
                                 dark:bg-gray-950 dark:text-white/70'
                    >
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </motion.section>
        </section>
    )
}
