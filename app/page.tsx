import Image from 'next/image';
import Container from '@/components/global/Container';
import links from '@/utils/links';
import Link from 'next/link';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <>
      <section
        className={`bg-[url('/images/cuttingboard-hero.jpg')] bg-cover relative bg-center h-screen grid place-items-center md:h-96 after:content-[''] after:w-full after:h-full after:bg-black after:opacity-25 after:absolute`}
      >
        <Container className='flex flex-col h-full max-w-5xl justify-center gap-6 relative z-10'>
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className='font-abel text-[clamp(2.5rem,3vw,4rem)] text-white border-b border-white border-solid w-max'
              >
                {link.label}
              </Link>
            );
          })}
        </Container>
      </section>
      <Banner
        bannerText='Allerton Creek Farm is a family owned, small craft farm located in
            Hunterdon County, New Jersey.'
        buttonText='About Us'
        page='about'
      />
      <section className='pt-12'>
        <Container className='flex flex-col lg:flex-row lg:items-center border-b border-black pb-12'>
          <div className='text-center mb-12 lg:mb-0 lg:basis-1/2'>
            <h3 className='font-abel text-[clamp(1.5rem,3vw,2rem)] mb-2'>
              Sharpening and Restoration Services
            </h3>
            <p className='font-sourceCodePro font-light mb-4'>
              We provide mail-in sharpening services for knives and utility
              scissors. We also offer light restoration on knives.
            </p>
            <Link
              href={'/sharpening'}
              className='underline font-sourceCodePro font-semibold'
            >
              Learn More
            </Link>
          </div>
          <Image
            src={'/images/knife-restoration.png'}
            alt='Before and After Of A Knife Restoration'
            width={500}
            height={320}
            className='mx-auto'
          />
        </Container>
      </section>
      <section className='py-12'>
        <Container className='flex flex-col-reverse lg:flex-row lg:items-center'>
          <Image
            src={'/images/cuttingboard-cta.jpg'}
            alt='Before and After Of A Knife Restoration'
            width={500}
            height={320}
            className='mx-auto'
          />
          <div className='text-center mb-12 lg:basis-1/2 lg:mb-0'>
            <h3 className='font-abel text-[clamp(1.5rem,3vw,2rem)] mb-2'>
              Coming Soon - Custom Wood Craft Items!
            </h3>
            <p className='font-sourceCodePro font-light'>
              We offer custom made wood craft items such as cutting boards,
              charcuterie boards, coaster sets and serving trays. These items
              are made from local and exotic hardwoods and some items are made
              from reclaimed whiskey and wine barrels. We refurbish and restore
              old cutting boards as well on request.
            </p>
          </div>
        </Container>
      </section>
      <Banner
        bannerText='Online Sharpening Services'
        buttonText='Find Us'
        className='text-[clamp(2rem,4vw,3rem)]'
        page='find'
      />
    </>
  );
}
