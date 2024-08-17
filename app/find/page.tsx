import Container from '@/components/global/Container';
import markets from '@/utils/markets';
import Market from '@/components/Market';

const FindUsPage = () => {
  return (
    <section className='bg-primary-400 py-12'>
      <Container>
        <div className='text-center border-b border-white pb-12'>
          <h1 className='font-abel text-white text-[clamp(2rem,3vw,2.5rem)] mb-2'>
            Find Us
          </h1>
          <p className='text-white font-sourceCodePro font-light lg:w-2/3 mx-auto mb-8'>
            Visit us at one of our Farmers Market tables for day-of sharpening
            services and to view our products in person!
          </p>
          <a
            href='https://www.facebook.com/allertoncreekfarm/'
            className='underline text-white font-sourceCodePro'
          >
            Click here to view our Facebook page for the most up-to-date
            information
          </a>
        </div>
        <div className='grid lg:grid-cols-3 gap-8 mt-12'>
          {markets.map((market) => {
            const { id, marketName, dayAndTime, availability, location, url } =
              market;
            return (
              <Market
                key={id}
                marketName={marketName}
                dayAndTime={dayAndTime}
                availability={availability}
                location={location}
                url={url}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default FindUsPage;
