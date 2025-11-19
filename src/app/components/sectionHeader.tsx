import React from 'react';

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeader({
    children }: SectionHeadingProps) {
  
  return (
    <h2 className='text-3xl font-medium font-serif mb-6 text-center 'aria-hidden="true">🖥️{children}💻</h2>
  )
}
