"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ProjectData } from '../lib/data';

type ProjectProps = ProjectData;

  export default function Project({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // bottom of viewport crosses the bottom of screen
    offset:["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.555, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.555, 1]);

  return ( 
    <motion.div ref={ref} 
    style={{
        scale:scaleProgress,
        opacity: opacityProgress,
        
    }}
    className='group mb-3 sm:mb-8 last:mb-0'
    >
    <section
       className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8
       relative sm:h-[20rem] sm:group-even:pl-2
       hover:bg-gray-200 hover:shadow-2xl hover:border-black/10
       transition-all duration-500
       dark:bg-white/10 dark:hover:bg-white/20 dark:hover:shadow-white/10'>
   
      <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full 
      sm:group-even:ml-[18rem]'>
      <h3 className='text-2xl font-semibold '>
      {title}
      </h3>
      <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
       {description}
      </p>
      <div className='flex gap-2 mt-3'>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='group/btn relative inline-flex items-center gap-1 px-4 py-2
                     bg-gray-900 text-white rounded-lg overflow-hidden
                     hover:bg-gray-700 hover:scale-105 hover:shadow-lg
                     transition-all duration-300
                     dark:bg-white/10 dark:hover:bg-white/20'
          >
            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                           opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
            <span className='relative z-10'>View Live Demo</span>
            <span className='relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300'>→</span>
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='group/btn relative inline-flex items-center gap-1 px-4 py-2
                     bg-gray-900 text-white rounded-lg overflow-hidden
                     hover:bg-gray-700 hover:scale-105 hover:shadow-lg
                     transition-all duration-300
                     dark:bg-white/10 dark:hover:bg-white/20'
          >
            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                           opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
            <span className='relative z-10'>View Code</span>
            <span className='relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300'>→</span>
          </a>
        )}
      </div>
    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
      {tags.map((tag, index) => (
        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full
         dark:text-white/70'
          key={index}>{tag}</li>
      ))}
    </ul>
    </div>

    {/* Project Image with Overlay */}
    <div className='absolute hidden sm:block top-8 -right-40 w-[26.69rem] group-even:right-[initial] group-even:-left-40'>
      <div className='relative overflow-hidden rounded-t-lg shadow-2xl'>
        {/* Overlay gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0
                        group-hover:from-blue-500/20 group-hover:to-purple-500/20
                        transition-all duration-500 z-10' />

        <Image
          src={imageUrl}
          alt="MyProjects"
          quality={88}
          height={350}
          width={350}
          className='w-full transition-all duration-500 ease-out
                   group-hover:scale-[1.15] group-hover:brightness-110
                   group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                   group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'
        />
      </div>
    </div>

  </section>
  </motion.div>
  );
}
