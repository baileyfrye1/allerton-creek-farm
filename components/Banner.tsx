import Container from './global/Container';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type BannerProps = {
  bannerText: string;
  buttonText: string;
  page: string;
  className?: string;
};

const Banner = ({ bannerText, buttonText, className, page }: BannerProps) => {
  return (
    <section className='bg-primary-400 py-8'>
      <Container className='text-center max-w-4xl'>
        <h2
          className={cn(
            'text-white text-[clamp(1.5rem,3vw,2rem)] font-abel',
            className,
          )}
        >
          {bannerText}
        </h2>
        <Link
          href={`/${page}`}
          className='border-2 w-96 inline-block text-white py-2 mt-8 transition-colors hover:bg-white hover:text-black font-sourceCodePro'
        >
          {buttonText}
        </Link>
      </Container>
    </section>
  );
};
export default Banner;
