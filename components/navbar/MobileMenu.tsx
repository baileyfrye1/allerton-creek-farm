import Link from 'next/link';
import links from '../../utils/links';
import { FaFacebookF } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

type PropTypes = {
  isOpen: boolean;
  toggleBodyOverflow: () => void;
};

const MobileMenu = ({ isOpen, toggleBodyOverflow }: PropTypes) => {
  const pathname = usePathname();

  return (
    <section
      className={`fixed inset-0 w-full h-full bg-white grid place-items-center -z-[1] transition-all px-8 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div className='flex flex-col'>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`font-sourceCodePro text-[clamp(2rem,3vw,2.5rem)] font-light w-max [&:not(:last-child)]:mb-2 ${pathname === link.href && 'border-b border-black'}`}
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
