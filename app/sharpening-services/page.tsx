import Container from '@/components/global/Container';
import knives from '@/utils/knives';
import KnifeType from '@/components/KnifeType';
import EmailForm from '@/components/form/EmailForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sharpening Services',
  description:
    'Submit your request for fast and friendly knife sharpening services at Allerton Creek Farm. Enjoy quick turnaround times and competitive pricing with no location restrictions.',
};

const SharpeningPage = () => {
  return (
    <>
      <section className='py-12'>
        <Container>
          <div className='border-b border-black w-full pb-12'>
            <h1 className='font-abel text-center text-[clamp(2rem,3vw,3rem)] mb-2'>
              Sharpening Services
            </h1>
            <p className='font-sourceCodePro font-light md:w-2/3 lg:w-1/2 mx-auto'>
              We provide mail-in sharpening services for knives and utility
              scissors. We also offer light restoration on knives.
            </p>
          </div>
          <article className='mt-12 lg:flex gap-8'>
            <div className='mb-12 basis-2/3'>
              <h4 className='font-sourceCodePro font-semibold mb-2'>
                How Does It Work?
              </h4>
              <p className='font-sourceCodePro font-light mb-4'>
                Request a quote using the form. Once you place your order you’ll
                receive an email from us with a quote and instructions on how to
                mail your items to us.
              </p>
              <a
                href='/pdf/packing-tips.pdf'
                className='font-sourceCodePro underline'
                target='_blank'
              >
                Click here to view our packing and shipping tips for mail-in
                sharpening
              </a>
            </div>
            <EmailForm />
          </article>
        </Container>
      </section>
      <section className='bg-primary-400 py-12'>
        <Container>
          <h3 className='font-abel text-white text-center text-[clamp(2rem,3vw,2.5rem)] mb-4'>
            Pricing
          </h3>
          <div className='text-center'>
            {knives.map((knife) => {
              return (
                <KnifeType
                  key={knife.id}
                  knifeType={knife.knifeType}
                  pricing={knife.pricing}
                />
              );
            })}
            <p className='text-white underline font-sourceCodePro mt-12'>
              *Damaged tools needing re-profiling will carry additional charge
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SharpeningPage;
