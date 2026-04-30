"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { LuHardDriveDownload } from 'react-icons/lu';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';
import { useSectionTimeOutForClick } from '../lib/hooks';
import { useActiveSection } from '../context/active-section';
import toast from 'react-hot-toast';
import HeroCLI from './HeroCLI';


export default function Intro() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [imageTilt,     setImageTilt]     = useState({ rotateX: 0, rotateY: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);
    const { ref } = useSectionTimeOutForClick("Home", 0.6);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const deltaX = (e.clientX - (rect.left + rect.width  / 2)) * 0.2;
        const deltaY = (e.clientY - (rect.top  + rect.height / 2)) * 0.2;
        setMousePosition({ x: deltaX, y: deltaY });
    };

    const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - (rect.left + rect.width  / 2);
        const mouseY = e.clientY - (rect.top  + rect.height / 2);
        setImageTilt({
            rotateY:  (mouseX / (rect.width  / 2)) * 25,
            rotateX: -(mouseY / (rect.height / 2)) * 25,
        });
    };

    return (
        <section
            ref={ref}
            id="home"
            className='w-full max-w-[55rem] scroll-mt-[69rem] mb-28 sm:mb-0
                       flex flex-col items-center text-center'
        >
            {/* Profile image with 3D tilt */}
            <div className='flex items-center justify-center'>
                <motion.div
                    className='relative cursor-pointer'
                    onMouseMove={handleImageMouseMove}
                    onMouseLeave={() => setImageTilt({ rotateX: 0, rotateY: 0 })}
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
                        transition={{ type: 'spring', duration: 0.169 }}
                    >
                        <Image
                            src='/ours.jpg'
                            alt='profile'
                            width={90}
                            height={90}
                            quality={90}
                            priority
                            className='h-30 w-30 rounded-full object-cover border-[.369rem] border-slate-50 shadow-xl'
                            style={{
                                boxShadow: `${-imageTilt.rotateY * 0.5}px ${imageTilt.rotateX * 0.5}px 20px rgba(0,0,0,0.3)`
                            }}
                        />
                    </motion.div>
                    <motion.span
                        className='absolute text-4xl top-0 left-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'keyframes', stiffness: 125, delay: 0.69 }}
                    >
                        🫡
                    </motion.span>
                </motion.div>
            </div>

            {/* Name + tagline + description */}
            <motion.div
                className='mt-4 px-4'
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className='font-bold text-3xl sm:text-4xl'>Hello, I&apos;m William</h1>

                <p className='mt-2 text-lg font-medium tracking-wide
                              text-blue-600 dark:text-blue-400'>
                    Full-Stack Engineer &nbsp;·&nbsp; Security+ &amp; DoD Contractor &nbsp;·&nbsp; Web3 &amp; AI Systems
                </p>

                <p className='mt-3 text-base font-normal text-gray-700 dark:text-gray-300 leading-relaxed'>
                    8+ years shipping production systems — federal health IT, Web3 infrastructure, and SaaS.
                </p>
                <p className='mt-1.5 text-sm font-normal text-gray-500 dark:text-gray-400'>
                    I build with strict typed boundaries, security-first design, and documented architecture.
                </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
                className='flex flex-col items-center gap-3 pt-6 w-full px-4'
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
            >
                <div className='flex flex-wrap items-center justify-center gap-3'>
                    {/* Contact — magnetic */}
                    <motion.div
                        ref={buttonRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
                        animate={{ x: mousePosition.x, y: mousePosition.y }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <Link
                            href="#contact"
                            onClick={() => {
                                setActiveSection('Contact');
                                setTimeOfLastClick(Date.now());
                            }}
                            className='group relative flex items-center gap-2
                                     bg-gray-900 text-white px-6 py-3 rounded-full
                                     overflow-hidden transition-all duration-300
                                     hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                                     dark:bg-white/10'
                        >
                            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <span className='relative z-10'>Contact me here</span>
                            <BsArrowRight className='relative z-10 group-hover:translate-x-1 transition-transform duration-300' />
                        </Link>
                    </motion.div>

                    <a
                        href="/newres.pdf"
                        download
                        onClick={() => toast.success('Resume downloading!')}
                        className='group flex items-center gap-2 bg-white px-6 py-3 rounded-full outline-none
                                 focus:scale-110 hover:scale-110 active:scale-105 transition
                                 borderBlack dark:bg-white/10'
                    >
                        <LuHardDriveDownload className='opacity-60 group-hover:translate-y-0.5 transition' />
                        Download CV
                    </a>

                    <Link
                        href="/resume"
                        target='_blank'
                        className='group flex items-center gap-2 bg-white px-6 py-3 rounded-full outline-none
                                 focus:scale-110 hover:scale-110 active:scale-105 transition
                                 borderBlack dark:bg-white/10'
                    >
                        <HiDocumentText className='opacity-60 group-hover:scale-110 transition' />
                        View Resume
                    </Link>
                </div>

                {/* Social icons */}
                <div className='flex items-center justify-center gap-3'>
                    <a href="https://www.linkedin.com/in/william360/" target='_blank'
                       className='bg-white p-4 text-gray-700 rounded-full border border-black/10
                                hover:scale-110 hover:shadow-lg hover:text-blue-600
                                transition-all duration-300 dark:bg-gray-950 dark:text-white/70'>
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/addicted2crypto/" target='_blank'
                       className='bg-white p-4 text-gray-700 rounded-full border border-black/10
                                hover:scale-110 hover:shadow-lg hover:text-gray-950
                                transition-all duration-300 dark:bg-gray-950 dark:text-white/70'>
                        <FaGithubSquare />
                    </a>
                    <a href="https://twitter.com/willisdeving" target='_blank'
                       className='bg-white p-4 text-gray-700 rounded-full border border-black/10
                                hover:scale-110 hover:shadow-lg hover:text-sky-500
                                transition-all duration-300 dark:bg-gray-950 dark:text-white/70'>
                        <FaTwitterSquare />
                    </a>
                </div>
            </motion.div>

            {/* HeroCLI — hidden on small mobile, full width centered below social links */}
            <motion.div
                className='hidden sm:block w-full mt-8 h-[26rem] sm:h-[28rem]'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            >
                <HeroCLI />
            </motion.div>
        </section>
    );
}
