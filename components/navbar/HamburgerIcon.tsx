import { Dispatch, SetStateAction } from 'react';
import MobileMenu from './MobileMenu';

type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const HamburgerIcon = ({ isOpen, setIsOpen }: HamburgerProps) => {
  const toggleBodyOverflow = () => {
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleBodyOverflow();
  };

  return (
    <div className='w-8 h-8 flex'>
      <div
        className={`flex flex-col items-center justify-center w-8 md:hidden cursor-pointer ${isOpen ? 'gap-0' : 'gap-2'}`}
        onClick={handleClick}
      >
        <span
          className={`h-[1px] w-8 bg-black transition-all ${isOpen && 'rotate-45'}`}
        ></span>
        <span
          className={`h-[1px] w-8 bg-black transition-all ${isOpen && '-rotate-45'}`}
        ></span>
      </div>
      <MobileMenu isOpen={isOpen} toggleBodyOverflow={toggleBodyOverflow} />
    </div>
  );
};
export default HamburgerIcon;
