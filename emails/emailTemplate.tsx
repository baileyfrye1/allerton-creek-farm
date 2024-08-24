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
      <Preview>New Knife Sharpening Request</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#283550',
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
            src={`${process.env.BASE_URL}/images/email-logo.png`}
            width='200'
            height='100'
            alt='Allerton Creek Farm Logo'
            className='mx-auto my-20'
          />
          <Container className='bg-brand py-45 px-20 text-white'>
            <Heading className='text-center my-0 leading-8'>
              New Knife Sharpening Request
            </Heading>

            <Section className='mt-4'>
              <Row>
                <Text className='text-base'>
                  <span className='font-bold'>Name: </span>
                  {first} {last}
                </Text>
                <div className='h-[1px] w-full bg-white'></div>
                <Text className='text-base text-white'>
                  <span className='font-bold'>Phone Number: </span>
                  <Link
                    href={`tel:+1${phone}`}
                    className='text-base text-white'
                  >
                    {phone}
                  </Link>
                </Text>
                <div className='h-[1px] w-full bg-white'></div>
                <Text className='text-base'>
                  <span className='font-bold'>Email: </span>
                  <Link
                    href={`mailto:${email}`}
                    className='text-base text-white'
                  >
                    {email}
                  </Link>
                </Text>
                <div className='h-[1px] w-full bg-white'></div>
                <Text className='text-base'>
                  <span className='font-bold'>Message: </span>
                  {desc}
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
