type KnifeProps = {
  knifeType: string;
  pricing: string;
};

const KnifeType = ({ knifeType, pricing }: KnifeProps) => {
  return (
    <div className='[&:not(:last-child)]:mb-4'>
      <h4 className='font-sourceCodePro text-white inline'>{knifeType}</h4>
      <p className='font-sourceCodePro text-white font-light inline'>{` - ${pricing}`}</p>
    </div>
  );
};
export default KnifeType;
