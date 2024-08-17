import Container from '@/components/global/Container';
import markets from '@/utils/markets';
import Market from '@/components/Market';

const FindUsPage = () => {
  return (
    <section className='bg-primary-400 py-12'>
      <Container>
        <div></div>
        <div className='grid lg:grid-cols-3 gap-8'>
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
