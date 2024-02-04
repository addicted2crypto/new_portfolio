import Image from 'next/image';
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

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  Link,
}: ProjectProps) {
  return <section>
    <h3>
      {title}
    </h3>
    <p>
      {description}
    </p>
    <ul>
      {tags.map((tag, index) => {
        <li key={index}>{tag}</li>
      })}
    </ul>
    <Image src='/eas.png' alt="MyProjects" width={33} height={33} quality={86}/>
  </section>
}
