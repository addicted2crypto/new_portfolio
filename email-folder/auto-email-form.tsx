import React from 'react';
import {
     Html, 
     Body,
     Head,
     Heading,
     Hr,
     Container,
     Preview,
     Section,
     Text
    } from '@react-email/components'
    import { Tailwind } from '@react-email/tailwind'

type AutoEmailFormProps ={
    message: string;
    senderEmail: string;
};

export default function AutoEmailForm({ message, senderEmail }: AutoEmailFormProps) {
  return (
    <Html>
        <Head />
        <Preview>Message from William's porfolio site</Preview>
        <Tailwind>
            <Body className='bg-[#6f6f6f] text-[#0000007b]'>
                <Container>
                    <Section className='bg-[#fff] borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>This message was created from the contact from filled out on Williams Portfolio.</Heading>
                        <Text>
                            {message}
                        </Text>
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>

            </Body>
        </Tailwind>
    </Html>
  )
}
