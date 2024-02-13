"use server";

import { Resend } from 'resend';
import { validateEmailString } from '../lib/utils';

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
  

  try {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tundra2727@gmail.com',
        subject: 'Message from contact form',
        reply_to: email as string,
        text: message as string,
    });
    } catch (error: unknown) {
    return {
        error: "error.message "
    }
    }
 };