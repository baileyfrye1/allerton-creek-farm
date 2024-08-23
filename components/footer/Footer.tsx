import Container from '../global/Container';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className='py-8 bg-white'>
      <Container className='flex flex-col md:justify-between md:flex-row'>
        <div className='mb-6 md:mb-0'>
          <Link
            href={'/'}
            className='font-abel text-[clamp(1.5rem,3vw,2rem)] tracking-wide text-black'
          >
            Allerton Creek Farm
          </Link>
        </div>
        <div className='flex flex-col gap-2'>
          <a
            href='mailto:allertoncreekfarm@gmail.com'
            className='underline font-sourceCodePro text-black'
          >
            allertoncreekfarm@gmail.com
          </a>
          <a
            href='tel:+19087134939'
            className='underline font-sourceCodePro text-black'
          >
            908.713.4939
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Footer;
