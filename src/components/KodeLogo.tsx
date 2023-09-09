import React from 'react';
import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link';

interface KodeLogoProps {
  height: number;
  width: number;
}

function KodeLogo({ height, width }: KodeLogoProps) {
  return (
    <Link href={'/'} className='cursor-pointer'>
      <Image
        src='/images/kodelogo.png'
        alt='kodelogo'
        className=''
        height={height}
        width={width}
        priority
      />
    </Link>
  );
}

export default KodeLogo;
