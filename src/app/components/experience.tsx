"use client"

import React from 'react'
import SectionHeader from './section-header'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { experienceData } from '../lib/data';
import { isMapIterator } from 'util/types';
import { IconBase } from 'react-icons';

export default function Experience() {
  return (
    <section id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeader>My Experience</SectionHeader>
        
        <VerticalTimeline lineColor=''>
            {experienceData.map((role, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement 
                        visible={true}
                        contentStyle={{
                            background: '#f3f4f6',
                            boxShadow: 'unset',
                            border: '1px solid #06060a/.1',
                            textAlign: 'left',
                            padding: '1.369rem 2rem',
                        }}
                        contentArrowStyle={{
                            borderRight: "0.6875rem solid #06060a"
                        }}
                        date={role.date}
                        icon={role.icon}
                        iconStyle={{
                            background: '#cafadf',
                            font: '1.69rem'
                        }}
                    >
                        <h3 className='font-semibold capitalize'>{role.title}</h3>
                        <p className='font-normal !mt-0'>{role.location}</p>
                        <p className='!mt-1 !font-normal text-[#575757]'>{role.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))}
        </VerticalTimeline>
        
    </section>
  );
}
