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
  // import state tracking here
  const { setActiveSection, timeOfLastClick } = useActiveSection()

  useEffect(() => {

 
 if(inView && Date.now() - timeOfLastClick > 1000) {
  setActiveSection("Projects");
 }
 //dependency array need all state 
}, [inView, setActiveSection, setActiveSection]);
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

