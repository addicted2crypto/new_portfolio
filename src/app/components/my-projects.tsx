import React from 'react'
import { projectsData } from '../lib/data'
import SectionHeader from './section-header'


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

function Project({
  title,
  description,
  tags,
  imageUrl,
}) {
  return <div>{title}</div>
}
