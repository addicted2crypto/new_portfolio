"use client"

import React from 'react'
import SectionHeader from './section-header'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { experienceData } from '../lib/data';

export default function Experience() {
  return (
    <section id='experience' className='text-bold'>
        <SectionHeader>My Experience</SectionHeader>
        <VerticalTimeline>
            {experienceData.map((role, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement>
                        <h3>{role.title}</h3>
                        <p>{role.location}</p>
                        <p>{role.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))}
        </VerticalTimeline>
    </section>
  );
}
