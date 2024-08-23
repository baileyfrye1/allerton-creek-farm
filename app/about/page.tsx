import Container from '@/components/global/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Established in 2007, Allerton Creek Farm is a family owned farm located in New Jersey. Owners and husband and wife duo Rich and Natalie have been a staple at farmers markets around New Jersey since 2019, offering their custom products and sharpening services to the community. Each and every product we sell is designed and handcrafted by owners Rich and Natalie.

On the weekends you can find Rich and Natalie at their Allerton Creek Farm table at various farmers markets around New Jersey and Pennsylvania.`,
};

const AboutPage = () => {
  return (
    <section className='bg-primary-400 py-12'>
      <Container className='max-w-4xl px-0'>
        <h1 className='text-white text-center font-abel text-[clamp(2rem,3vw,3rem)]'>
          About Us
        </h1>
        <p className='text-white font-sourceCodePro font-light mt-4'>
          Established in 2007, Allerton Creek Farm is a family owned farm
          located in New Jersey. Owners and husband and wife duo Rich and
          Natalie have been a staple at farmers markets around New Jersey since
          2019, offering their custom products and sharpening services to the
          community. Each and every product we sell is designed and handcrafted
          by owners Rich and Natalie.
        </p>
        <p className='text-white font-sourceCodePro font-light mt-8'>
          On the weekends you can find Rich and Natalie at their Allerton Creek
          Farm table at various farmers markets around New Jersey and
          Pennsylvania.
        </p>
      </Container>
    </section>
  );
};
export default AboutPage;
