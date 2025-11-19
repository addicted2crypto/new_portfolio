"use client";

import React from 'react'
import SectionHeader from './sectionHeader'
import ContactButtonSubmit from './contactButtonSubmit';
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
                   {" "}  tundra2727@gmail.com
                </a> or by filling out this form.
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

                {/* Email Input with Floating Label */}
                <div className='relative group'>
                    <input
                        type='email'
                        name='senderEmail'
                        id='senderEmail'
                        required
                        maxLength={100}
                        placeholder=' '
                        className='peer w-full px-6 py-4 rounded-lg border border-black/10
                                 bg-white/80 backdrop-blur-sm
                                 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                 transition-all duration-300 outline-none
                                 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
                                 dark:border-white/20'
                    />
                    <label
                        htmlFor='senderEmail'
                        className='absolute left-6 top-4 text-gray-500
                                 peer-focus:top-1 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600
                                 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:left-4
                                 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600
                                 transition-all duration-300 pointer-events-none
                                 dark:text-gray-600 dark:peer-focus:text-blue-500'
                    >
                        Your Email
                    </label>
                </div>

                {/* Message Textarea with Floating Label */}
                <div className='relative group mt-4'>
                    <textarea
                        name='senderMessage'
                        id='senderMessage'
                        required
                        maxLength={1000}
                        placeholder=' '
                        className='peer w-full h-[13rem] px-6 py-4 rounded-lg border border-black/10
                                 bg-white/80 backdrop-blur-sm resize-none
                                 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                 transition-all duration-300 outline-none
                                 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100
                                 dark:border-white/20'
                    />
                    <label
                        htmlFor='senderMessage'
                        className='absolute left-6 top-4 text-gray-500
                                 peer-focus:top-1 peer-focus:left-4 peer-focus:text-xs peer-focus:text-blue-600
                                 peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:left-4
                                 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-blue-600
                                 transition-all duration-300 pointer-events-none
                                 dark:text-gray-600 dark:peer-focus:text-blue-500'
                    >
                        Your Message
                    </label>
                </div>

                <ContactButtonSubmit />

            </form>

        </motion.section>

    );

}