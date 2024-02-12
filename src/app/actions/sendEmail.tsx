"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    
    console.log("We are runing on the server yooo");
    console.log(formData.get('senderEmail'));
    console.log(formData.get('senderMessage'));

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tundra2727@gmail.com',
        subject: 'Message from contact form',
        text: 'Thank you for reaching out. Please don"t hesitate to ask any questions.',
    });
};