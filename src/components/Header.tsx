'use client';
import React, { useState } from 'react';
import Link from '../../node_modules/next/link';
import Button from './Button';
import KodeLogo from './KodeLogo';

const navigations = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '#what-we-do' },
];

function Header() {
  const [active, setActive] = useState(0);

  return (
    <div className='bg-white w-full fixed flex justify-center border-b 2xl:border-none shadow z-50 3xl:bg-black'>
      <header className='flex justify-between text-black items-center px-5 md:px-0 w-full md:w-[90%] 3xl:w-[70%] 3xl:bg-white 3xl:px-8 py-3'>
        <div className='logo'>
          <KodeLogo height={40} width={40} />
        </div>
        <nav className='flex items-center gap-x-10'>
          <ul className='items-center gap-x-5 hidden md:flex'>
            {navigations.map((nav, idx) => (
              <li
                key={idx}
                className={`text-sm md:text-xl transition-all ease-in-out duration-500 ${
                  active === idx ? 'text-pri' : ''
                }`}
                onClick={() => setActive(idx)}
              >
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <Link href={'/contact'}>
            <Button
              buttonText='Contact Us'
              buttonColor='bg-pri'
              textColor='text-white'
            />
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
