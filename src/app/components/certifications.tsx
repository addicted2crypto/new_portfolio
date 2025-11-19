"use client"

import React from 'react';
import SectionHeader from './section-header';
import { certificationsData } from '../lib/data';
import { useSectionTimeOutForClick } from '../lib/hooks';
import { motion } from 'framer-motion';

export default function Certifications() {
  const { ref } = useSectionTimeOutForClick("Certifications");

  return (
    <section
      ref={ref}
      id='certifications'
      className='scroll-mt-28 mb-28 sm:mb-40'
    >
      <SectionHeader>Certifications</SectionHeader>

      <div className='max-w-[53rem] mx-auto'>
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className='mb-6 p-6 bg-gray-100 rounded-lg border border-black/5 dark:bg-white/10 dark:border-white/10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className='text-2xl font-semibold mb-2 dark:text-white'>{cert.name}</h3>
            <p className='text-lg text-gray-700 dark:text-white/70 mb-1'>{cert.issuer}</p>
            <p className='text-sm text-gray-600 dark:text-white/60 mb-2'>
              Issued: {cert.date} | Expires: {cert.expirationDate}
            </p>
            <p className='text-sm text-gray-500 dark:text-white/50 mb-3'>
              Credential ID: {cert.credentialId}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-block text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition'
              >
                Verify Credential →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
