import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

type emailProps = {
  first: string;
  last: string;
  phone: string;
  email: string;
  desc: string;
};

export const EmailTemplate = ({
  first,
  last,
  phone,
  email,
  desc,
}: emailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Knife Sharpening Request</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className='bg-offwhite text-base font-sans'>
          <Img
            src={`/images/cuttingboard-cta.JPG`}
            width='184'
            height='75'
            alt='Netlify'
            className='mx-auto my-20'
          />
          <Container className='bg-white p-45'>
            <Heading className='text-center my-0 leading-8'>
              New Form Submission
            </Heading>

            <Section>
              <Row>
                <Text className='text-base'>
                  {`New Knife Sharpening Submission From ${first} ${last}`}
                </Text>

                <Text className='text-base'>Contact Details:</Text>
                <Text className='text-base'>{phone}</Text>
                <Text className='text-base'>{email}</Text>
                <Text className='text-base'>{desc}</Text>
              </Row>
            </Section>
            <Section className='mt-45'></Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
