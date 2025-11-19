"use client"

import React from 'react';
import SectionHeader from './sectionHeader';
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
            className='group relative mb-6 p-6 bg-gray-100 rounded-lg border border-black/5
                     overflow-hidden cursor-default
                     dark:bg-white/10 dark:border-white/10'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
            }}
          >
            {/* Shine effect overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0
                          group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10
                          transition-all duration-500' />

            {/* Moving shine effect */}
            <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full
                          bg-gradient-to-r from-transparent via-white/20 to-transparent
                          transition-transform duration-1000 ease-out' />

            <div className='relative z-10'>
              <h3 className='text-2xl font-semibold mb-2 dark:text-white
                           group-hover:text-blue-600 dark:group-hover:text-blue-400
                           transition-colors duration-300'>
                {cert.name}
              </h3>
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
                  className='inline-flex items-center gap-2 px-4 py-2
                           bg-blue-600 text-white rounded-lg
                           hover:bg-blue-700 hover:scale-105 hover:shadow-lg
                           transition-all duration-300'
                >
                  <span>Verify Credential</span>
                  <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
