"use client";
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { LuHardDriveDownload } from 'react-icons/lu';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionTimeOutForClick } from '../lib/hooks';
import { useActiveSection } from '../context/active-section';


export default function Intro() {


    const { ref } = useSectionTimeOutForClick("Home", 0.6);
    const { setActiveSection, setTimeOfLastClick } = useActiveSection();
    //*****this is a example to abstract await into a type hook ******
    // const {ref, inView} = useInView({
    //     threshold: .5,
    //   });
    // //   import state here
    //   const { setActiveSection, timeOfLastClick } = useActiveSection()

    //   useEffect(() => {


    //  if(inView && Date.now() - timeOfLastClick > 1000) {
    //   setActiveSection("Home");
    //  }
    // //  state array entered here dependency array
    // }, [inView, setActiveSection, timeOfLastClick]);


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
                <span className='font-bold text-3xl'>Hello, my name is William</span>

                <h1>
                    <span className='font-semi-bold italic text-center'>
                    
                    I am a software engineer who creates full-stack web applications and who<span className='font-bold text-5xl m-2'>loves</span> to code in my freetime as well! 
                    </span>
                </h1>
                <h2>
                    <span className='font-bold italic'>
                         Problem-Solving Connoisseur.
                    </span>
                </h2>
                <h3>
                    <span className='font-semi-bold text-xl'>
                        The ever changing world of software development, along with problem <span className='bg-[#3a1e59] m-2 rounded-tl rounded-br underline'>solving</span> is my passion. 
                    </span>
                </h3>
                <motion.div className='flex flex-col items-center justify-center text-lg hover:cursor-pointer sm:flex-row pt-8 gap-2 px-2 font-medium'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.169 }}
                >
                    <Link href="#contact" className='group bg-gray-950 text-gray-50 text-xl px-7 py-3 flex items-center gap-2 outline-none rounded-full hover:scale-110 hover:bg-blue-950 active:scale-105 transition'
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                    >
                        Contact me
                        <BsArrowRight className='opacity-69 group-hover:translate-x-1 transition' />
                    </Link>

                    <a className='group bg-gray-50 px-7 py-3 flex items-center gap-2 rounded-e-full underline outline-none focus:scale-110 hover:scale-110 dark:bg-white/10 dark:text-white/80' href="/resume_1.pdf" download>
                        Download resume
                        <LuHardDriveDownload className='opacity-69 group-hover:translate-y-1 transition' />
                    </a>
                    {/* note to myself the colors are a little diffrent to highlight the first inline contact link */}
                    <a className=' bg-slate-50 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[2.39rem] opacity-69 rounded-rull opacity-69 hover:scale-[1.15] active:scale-[115] transition border dark:bg-white/10 dark:text-white/50'
                        href="https://www.linkedin.com/in/william360/" target='_blank'>
                        <BsLinkedin />
                    </a>
                    <a className='bg-slate-50 text-gray-700 hover:text-gray-950 flex items-center gap-2 text-[2.69rem] rounded-rull opacity-69 hover:scale-[1.15] active:scale-[1.15] transition border:bg-white/10 dark:bg-white/10 dark:text-white/50'
                        href="https://github.com/addicted2crypto/">
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </motion.section>
        </section>
    )
}
