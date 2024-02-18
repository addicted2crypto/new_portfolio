"use client"

import React, { useContext } from 'react'
import SectionHeader from './section-header'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { experienceData } from '../lib/data';
import { useSectionTimeOutForClick } from '../lib/hooks';
import { useDarkMode } from '../context/darkmode-context';

export default function Experience() {
    const { ref } = useSectionTimeOutForClick("Experience")
   const { theme } = useDarkMode();

    return (
    <section 
    ref={ref}
    id='experience'
     className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeader>My Experience</SectionHeader>
        
        <VerticalTimeline lineColor=''>
            {experienceData.map((role, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement 
                        visible={true}
                        contentStyle={{
                            background: theme === 'light' ? '#f3f4f6' : "rgba(0,0,0,0.05)",
                            boxShadow: 'unset',
                            border: '1px solid #06060a/.1',
                            textAlign: 'left',
                            padding: '1.369rem 2rem',
                        }}
                        contentArrowStyle={{
                            borderRight: theme === 'light' ? "0.6875rem solid #06060a" : "0.685rem solid rgba(255, 255, 255, 0.6)",
                        }}
                        date={role.date}
                        icon={role.icon}
                        iconStyle={{
                            background:theme === 'light' ? '#cafadf': '#797a7a',
                            font: '1.69rem'
                        }}
                    >
                        <h3 className='font-semibold capitalize'>{role.title}</h3>
                        <p className='font-normal !mt-0'>{role.location}</p>
                        <p className='!mt-1 !font-normal text-[#575757] dark:text-white/75'>{role.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))}
        </VerticalTimeline>
        
    </section>
  );
}
