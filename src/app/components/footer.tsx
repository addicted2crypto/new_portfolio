import React from 'react'

export default function Footer() {
  return (
     <footer className='mb-10 px-4 text-center text-[#6f5151] absolute bottom-0'>
        <small className='mb-2 block text-xs'>
        &copy; 2025. All rights reserved. We support all builds as an integral part of the developer team. Security is always our top priority.
        </small>
        <p className='text-xs'>
            <span className='font-semibold '>About my portfolio website:</span> built with React, Next.js, TypeScript, Tailwind, Framer Motion, React Email with Resend email support, Hosted on Vercel.
        </p>
     </footer>
  )
}
