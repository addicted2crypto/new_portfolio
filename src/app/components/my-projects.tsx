"use client";

import React from 'react';
import SectionHeader from './section-header';
import Project from './single-project';

import { projectsData } from '../lib/data';
import { useSectionTimeOutForClick } from '../lib/hooks';


export default function MyProjects() {
  const { ref } = useSectionTimeOutForClick("Projects", 0.555);
  
  return (
    
    <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
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

