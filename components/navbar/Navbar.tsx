'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import links from '../../utils/links';
import HamburgerIcon from './HamburgerIcon';
import { FaFacebookF } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className='px-[clamp(2rem,4.25vw,12rem)] py-6 shadow-lg flex justify-between items-center relative z-20 bg-white'>
      <div>
        <Link
          href={'/'}
          className='font-abel text-[clamp(1.5rem,3vw,2rem)] tracking-wide'
          onClick={() => document.body.classList.remove('overflow-hidden')}
        >
          Allerton Creek Farm
        </Link>
      </div>
      <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='gap-6 items-center justify-center hidden md:flex'>
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.href}
              className={`font-sourceCodePro font-light pb-0.5 ${pathname === link.href && 'border-b border-black'}`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href={'https://www.facebook.com/allertoncreekfarm/'}
          target='_blank'
        >
          <FaFacebookF />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
