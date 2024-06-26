"use client";

import React from 'react'
import SectionHeader from './section-header'
import ContactButtonSubmit from './contact-button-submit';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
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
            <SectionHeader>
                Contact Me Now

            </SectionHeader>
            <p className='text-[#383838] -mt-4 dark:text-[#d6d6d6]'>
                Please contact me directly at
                <a className='underline text-[#0059fe] dark:text-[#7290fc]' href="mailto:williamsapplianceconsult@gmail.com">
                   {" "}  williamsapplianceconsult@gmail.com 
                </a> or by clicking on and filling out this this form.
            </p>
            <form className='mt-10 flex flex-col dark:text-[#080808]' action={async (formData) => {
                const { emailData, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }
                    // error. replaced with toast.success
                toast.success("Your email was successfully sent.") && toast.success("I will respond ASAP")
            }}
            >

                <input
                    type='email' name='senderEmail'
                    required maxLength={100}
                    placeholder='Enter Your Email Here'
                    className='px-6 h-13 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                />
                <textarea
                    placeholder="Your message Here"
                    name='senderMessage'
                    required maxLength={1000}
                    className='h-[13rem] my-3 rounded-lg border borderBlack p-5 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                />
                <ContactButtonSubmit />

            </form>

        </motion.section>

    );

}