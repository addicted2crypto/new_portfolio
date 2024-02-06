"use client"

import { useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { projectsData } from '../lib/data';

type ProjectProps = (typeof projectsData)[number];

  export default function Project({
  title,
  description,
  tags,
  imageUrl,
  // Link,
}: ProjectProps) {
  const ref = useRef(null);
  useScroll({
    target: '',
    // bottom of viewport crosses the bottom of screen
    offset:["0 1", "1.33 1"]
  })

  return ( 
    <section className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-2 hover:bg-[#bcbbbb]'>
      {/* group-even ml 18rem to push over the code opposite of jpeg on evens need to add group to parent element always */}
      <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%] flex flex-col h-full group-even:ml-[18rem]'>
      <h3 className='text-2xl font-semibold '>
      {title}
      </h3>
      <p className='mt-2 leading-relaxed text-gray-700'>
       {description}
      </p>
    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
      {tags.map((tag, index) => (
        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
      ))}
    </ul>
    </div>
    
      
    <Image
     src={imageUrl} alt="MyProjects"  quality={88} height={350} width={350} className='absolute top-8 -right-40 w-[26.69rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.10] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40'/>
    
    {/* <Image src={'/coincrete.png'} alt="MyProjects"  quality={88} height={388} width={388} className='absolute top-8 -right-40'/> */}
  </section>
  );
}
