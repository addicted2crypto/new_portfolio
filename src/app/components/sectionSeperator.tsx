"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function SectionSeperator() {
  return (
    <motion.div
      className='my-24 hidden sm:flex items-center justify-center w-full max-w-md'
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
    >
      <div className='relative w-full h-[2px] overflow-hidden rounded-full'>
        {/* Static gradient background */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent dark:via-gray-500/30' />

        {/* Animated shimmer overlay */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent dark:via-blue-400/30'
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
}
