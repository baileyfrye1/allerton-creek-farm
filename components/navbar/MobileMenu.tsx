import Link from 'next/link';
import links from '../../utils/links';
import { FaFacebookF } from 'react-icons/fa';

type PropTypes = {
  isOpen: boolean;
  toggleBodyOverflow: () => void;
};

const MobileMenu = ({ isOpen, toggleBodyOverflow }: PropTypes) => {
  return (
    <section
      className={`fixed inset-0 w-full h-full bg-white grid place-items-center -z-[1] transition-all ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div className='flex flex-col'>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className='font-sourceCodePro text-[2.5rem] font-light'
              onClick={toggleBodyOverflow}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href={'https://www.facebook.com/allertoncreekfarm/'}
          target='_blank'
          className='mt-6 text-2xl'
        >
          <FaFacebookF />
        </Link>
      </div>
    </section>
  );
};
export default MobileMenu;
