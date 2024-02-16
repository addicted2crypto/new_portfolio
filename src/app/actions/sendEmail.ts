"use server";

import { Resend } from 'resend';
import { getErrorMessageHelper, validateEmailString } from '../lib/utils';
import AutoEmailForm from '../../../email-folder/auto-email-form';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const message = formData.get('senderMessage');
    const email = formData.get('senderEmail');


    if(!validateEmailString(email, 100)) {
        return {
            error: "Invalid email"
        }
    }
    if(!validateEmailString(message, 1000)) {
        return {
            error: "Invalid message"
        }
    }
    // console.log("We are runing on the server yooo");
    // console.log(formData.get('senderEmail'));
    // console.log(formData.get('senderMessage'));
  
    let emailData;
  try {
    emailData = await resend.emails.send({
        from: 'Contact for William H<onboarding@resend.dev>',
        to: 'tundra2727@gmail.com',
        subject: 'Message from contact form',
        reply_to: email as string,
        react: React.createElement(AutoEmailForm, {
            message: message as string,
            senderEmail: email as string,

        })
        // text: message as string,

        
        // this is the jsx form changing to use ts
        // react: <AutoEmailForm message={message} senderEmail={email}/>
    });
    } catch (error: unknown) {
       return {
        error: getErrorMessageHelper(error)
       };
 }
return {
    emailData,
};

};