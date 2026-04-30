"use client"
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MiniTerminal from './MiniTerminal';

interface FeaturedProjectProps {
  title: string;
  description: string;
  tags: readonly string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function FeaturedProject({ title, description, tags, githubUrl, demoUrl }: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['0 1', '1.33 1'] });
  const scale   = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const [tilt,      setTilt]      = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered,   setHovered]   = useState(false);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top)  / rect.height;
    setTilt({ x: (nx - 0.5) * 6, y: -(ny - 0.5) * 4 });
    setSpotlight({ x: nx * 100, y: ny * 100 });
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className='mb-8 w-full max-w-[55rem] mx-auto'
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
    >
      <motion.section
        animate={{ rotateY: tilt.x, rotateX: tilt.y }}
        transition={{ type: 'spring', stiffness: 280, damping: 32, mass: 0.5 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1400 }}
        className='relative bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/10
                   rounded-lg overflow-hidden
                   hover:shadow-2xl hover:border-black/10 dark:hover:shadow-green-900/20 dark:hover:border-green-500/20
                   transition-colors duration-500'
      >
        {hovered && (
          <div
            className='absolute inset-0 z-0 pointer-events-none rounded-lg'
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%,
                rgba(34,197,94,0.08), transparent 60%)`,
            }}
          />
        )}
        {/* FLAGSHIP badge */}
        <span className='absolute top-4 right-4 z-10 text-[10px] tracking-widest font-mono uppercase
                         text-green-400 border border-green-400/40 bg-green-400/5 px-2 py-0.5 rounded'>
          FLAGSHIP
        </span>

        <div className='flex flex-col lg:flex-row'>
          {/* Description column */}
          <div className='p-8 lg:w-[42%] flex flex-col justify-between gap-6'>
            <div>
              <h3 className='text-2xl font-semibold mb-3'>{title}</h3>
              <p className='text-gray-700 dark:text-white/70 leading-relaxed text-sm'>{description}</p>
            </div>

            <div>
              <div className='flex flex-wrap gap-2 mb-4'>
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/btn relative inline-flex items-center gap-1 px-4 py-2
                               bg-gray-900 text-white text-sm rounded-lg overflow-hidden
                               hover:scale-105 hover:shadow-lg transition-all duration-300
                               dark:bg-white/10 dark:hover:bg-white/20'
                  >
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                                     opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                    <span className='relative z-10'>View Code</span>
                    <span className='relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300'>→</span>
                  </a>
                )}
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/btn relative inline-flex items-center gap-1 px-4 py-2
                               bg-gray-900 text-white text-sm rounded-lg overflow-hidden
                               hover:scale-105 hover:shadow-lg transition-all duration-300
                               dark:bg-white/10 dark:hover:bg-white/20'
                  >
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600
                                     opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300' />
                    <span className='relative z-10'>View Demo</span>
                    <span className='relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300'>→</span>
                  </a>
                )}
              </div>

              <ul className='flex flex-wrap gap-2'>
                {tags.map((tag, i) => (
                  <li
                    key={i}
                    className='bg-black/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider
                               text-white rounded-full dark:text-white/70'
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terminal column */}
          <div className='lg:w-[58%] h-[22rem] lg:h-auto min-h-[22rem]
                          border-t lg:border-t-0 lg:border-l border-green-900/30 bg-[#0a0a0a] p-3'>
            <MiniTerminal />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
