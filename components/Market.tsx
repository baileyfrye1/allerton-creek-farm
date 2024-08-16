type MarketProps = {
  marketName: string;
  dayAndTime: string;
  availability: string;
  location: string;
  url: string;
};

const Market = ({
  marketName,
  dayAndTime,
  availability,
  location,
  url,
}: MarketProps) => {
  return (
    <div>
      <h4 className='font-abel text-white text-[clamp(1.25rem,2vw,1.5rem)]'>
        {marketName}
      </h4>
      <p className='font-sourceCodePro text-white font-light'>{dayAndTime}</p>
      <p className='font-sourceCodePro text-white font-light'>{availability}</p>
      <p className='font-sourceCodePro text-white font-light'>{location}</p>
      <a href={url} className='text-white underline font-sourceCodePro'>
        Visit Site
      </a>
    </div>
  );
};
export default Market;
