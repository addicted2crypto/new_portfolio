"use client";

import React from 'react'
import SectionHeader from './section-header'
import { motion } from "framer-motion";
import { SiMinutemailer } from "react-icons/si";
import { useSectionTimeOutForClick } from '../lib/hooks';
import { sendEmail } from '../actions/sendEmail';

export default function Contact() {
    const { ref } = useSectionTimeOutForClick("Contact")
   
    

    return (
        <motion.section
            id="contact"
            ref={ref}
            className='mb-18 sm:mb-26 w-[min,(40rem)] text-center'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeader>Contact Me Now</SectionHeader>
            <p className='text-[#383838] -mt-4'>Please contact me directly at <a className='underline text-[#0059fe]' href="mailto:williamsapplianceconsult@gmail.com">williamsapplianceconsult@gmail.com</a> or by clicking this form.
            </p>
            <form className='mt-10 flex flex-col' action={async (formData) => {
                await sendEmail(formData);
            }}
            >
            {/* // {async (formData) => { */}
                {/* // console.log('Im running on the client yoooo!');
                // console.log(formData.get("senderEmail"));
                // console.log(formData.get("senderMessage"));
    */}

            {/* //     await sendEmail(formData);
            // }}> */}
                <input type='email' name='senderEmail'required maxLength={100} placeholder='Enter Your Email Here' className='px-6 h-13 rounded-lg border borderBlack' />
                <textarea placeholder="Your message Here" name='senderMessage'required maxLength={1000} className='h-[13rem] my-3 rounded-lg border borderBlack p-5' />
                <button type='submit' className='group flex items-center justify-center gap-2 h-[2rem] w-[8rem] bg-[#181818] text-[#fff] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-[#140000]'>
                    Contact{" "}
                    <SiMinutemailer className='text-xs opacity-80 tranistion-all group-hover:translate-x-2 group-hover:-translate-y-1' /></button>

            </form>

        </motion.section>

    );

}