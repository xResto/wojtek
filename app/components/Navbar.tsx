'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RedUnderscoreHoverAnimation from './animations/RedUnderscoreHoverAnimation';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className='text-white sticky top-0 z-[100] backdrop-blur-lg border-b-[.5px] border-gray-400'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), linear-gradient(rgba(255, 255, 255, .1), rgba(255, 255, 255, .1))',
      }}
    >
      <div className='flex flex-row justify-between py-6 w-[1200px] mx-auto'>
        <div className='text-3xl font-bold'>
          <Link href='/'>
            <Image
              src='/wojtek.webp'
              width={500}
              height={203}
              alt='Logo OSK WOJTEK'
              className='w-32'
            />
          </Link>
        </div>
        <ul className='flex gap-10 items-center text-lg'>
          <Link
            href='/'
            className={`${
              pathname === '/' ? 'border-b-2 border-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation currentPath={pathname} thisPath='/'>
              Strona główna
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/cennik'
            className={`${
              pathname === '/cennik' ? 'border-b-2 border-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/cennik'
            >
              Cennik
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/jak-zaczac-kurs'
            className={`${
              pathname === '/jak-zaczac-kurs'
                ? 'border-b-2 border-[#CE2029]'
                : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/jak-zaczac-kurs'
            >
              Jak zacząć kurs?
            </RedUnderscoreHoverAnimation>
          </Link>
          <Link
            href='/kontakt'
            className={`${
              pathname === '/kontakt' ? 'border-b-2 border-[#CE2029]' : ''
            }`}
          >
            <RedUnderscoreHoverAnimation
              currentPath={pathname}
              thisPath='/kontakt'
            >
              Kontakt
            </RedUnderscoreHoverAnimation>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
