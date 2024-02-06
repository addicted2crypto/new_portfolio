
import React from 'react';
import { projectsData } from '../lib/data';
import SectionHeader from './section-header';
import Project from './single-project';


export default function MyProjects() {
  return (
    <section>
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

