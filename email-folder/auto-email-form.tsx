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
    message: string
};

export default function AutoEmailForm({ message }: AutoEmailFormProps) {
  return (
    <Html>
        <Head />
        <Preview>Message from portfolio site.</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>You recieved </Heading>
                    </Section>
                </Container>

            </Body>
        </Tailwind>
    </Html>
  )
}
