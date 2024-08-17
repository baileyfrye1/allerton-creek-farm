import Container from '@/components/global/Container';
import knives from '@/utils/knives';
import KnifeType from '@/components/KnifeType';

const SharpeningPage = () => {
  return (
    <>
      <section className='py-12'>
        <Container>
          <div className='border-b border-black w-full pb-12'>
            <h1 className='font-abel text-center text-[clamp(2.25rem,3vw,3rem)] mb-2'>
              Sharpening Services
            </h1>
            <p className='font-sourceCodePro font-light md:w-2/3 lg:w-1/2 mx-auto'>
              We provide mail-in sharpening services for knives and utility
              scissors. We also offer light restoration on knives.
            </p>
          </div>
          <article className='mt-12 lg:flex'>
            <div className='mb-12'>
              <h4 className='font-sourceCodePro font-semibold mb-2'>
                How Does It Work?
              </h4>
              <p className='font-sourceCodePro font-light mb-4'>
                Request a quote using the form. Once you place your order you’ll
                receive an email from us with a quote and instructions on how to
                mail your items to us.
              </p>
              <a
                href='https://www.allertoncreekfarm.com/s/Packing-Tips-for-Mail-in-Service.pdf'
                className='font-sourceCodePro underline'
              >
                Click here to view our packing and shipping tips for mail-in
                sharpening
              </a>
            </div>
            <form>
              <div className='flex gap-4 mb-4'>
                <div>
                  <label
                    htmlFor='first'
                    className='block font-sourceCodePro mb-1'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    id='first'
                    name='first'
                    className='bg-[#FAFAFA] border-[#A9A9A9] border p-[0.625rem]'
                  />
                </div>
                <div>
                  <label
                    htmlFor='last'
                    className='block font-sourceCodePro mb-1'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='last'
                    name='last'
                    className='bg-[#FAFAFA] border-[#A9A9A9] border p-[0.625rem]'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='phone'
                  className='block font-sourceCodePro mb-1'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  className='bg-[#FAFAFA] border-[#A9A9A9] border w-full p-[.625rem]'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block font-sourceCodePro mb-1'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='bg-[#FAFAFA] border-[#A9A9A9] border w-full p-[.625rem]'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='desc' className='block font-sourceCodePro mb-1'>
                  Please use the space below to list all of the items you would
                  like sharpened.
                </label>
                <textarea
                  name='desc'
                  id='desc'
                  placeholder='Ex: One 7in ceramic knife and one 5in smooth edge kitchen knife'
                  className='bg-[#FAFAFA] border-[#A9A9A9] border w-full p-[.625rem] h-[6.25rem]'
                ></textarea>
              </div>
              <button className='border-2 border-black w-full py-2 transition-colors hover:bg-black hover:text-white'>
                Submit
              </button>
            </form>
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
