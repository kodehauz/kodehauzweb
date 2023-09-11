import React from 'react';
import KodeLogo from './KodeLogo';
import Paragraph from './Paragraph';
import { BsLinkedin, BsTwitter, BsFacebook } from 'react-icons/bs';
import Link from '../../node_modules/next/link';

function Footer() {
  return (
    <div className='bg-white w-full px-5 md:px-0 2xl:bg-black'>
      <div className={`2xl:bg-white 2xl:w-[70%] md:w-[80%] mx-auto`}>
        <div className='flex flex-col justify-content items-center mx-auto w-full md:w-[85%] 2xl:w-[75%] space-y-8 text-black py-10'>
          <div className='flex items-center space-x-2'>
            <KodeLogo width={50} height={50} />
            <h1 className='text-pri font-bold text-3xl'>KodeHauz</h1>
          </div>
          <p className='text-gray-500 text-center text-sm'>
            Discover how KodeHauz Solutions Planet can revolutionize your
            business with forward-thinking technology solutions. Contact us
            today for a professional consultation and lets embark on a journey
            towards digital transformation and success together.
          </p>
          <div className='flex items-center space-x-8'>
            <Link href={'https://web.facebook.com/kodehauz'} target={'blank'}>
              <BsFacebook className='text-3xl text-pri' />
            </Link>
            <Link href={'https://twitter.com/kodehauz'} target={'blank'}>
              <BsTwitter className='text-3xl text-[#47ACDF]' />
            </Link>
            <Link
              href={'https://www.linkedin.com/company/kodehauz'}
              target={'blank'}
            >
              <BsLinkedin className='text-3xl text-pri' />
            </Link>
          </div>
          <p className='font-bold'>Copyright 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
