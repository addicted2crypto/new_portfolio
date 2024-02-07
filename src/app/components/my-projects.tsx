"use client";

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '../context/active-section';
import { projectsData } from '../lib/data';
import SectionHeader from './section-header';
import Project from './single-project';


export default function MyProjects() {
  const {ref, inView} = useInView({
    threshold: .5,
  });
  const { setActiveSection } = useActiveSection()

  useEffect(() => {

 
 if(inView) {
  setActiveSection("Projects");
 }
}, [inView, setActiveSection]);
  return (
    
    <section ref={ref} id="projects" className='scroll-mt-28'>
        <SectionHeader>My Projects</SectionHeader>
        <div>
          {
            projectsData.map((project, index ) => (
              <React.Fragment key={index}>
              <Project {...project}/>
              </React.Fragment>
            ))
          }
        </div>
    </section>
  );
}

