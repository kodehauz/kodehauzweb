import React, { ReactNode } from 'react';
import Paragraph from './Paragraph';

interface CardProps {
  cardTitle: string;
  cardIcon: ReactNode;
  cardParagraph: string;
  subtitle: string;
}

function Card({ cardTitle, cardIcon, cardParagraph, subtitle }: CardProps) {
  return (
    <div className='group bg-white py-5 px-4 rounded flex justify-center gap-y-3 items-center min-h-[350px] hover:shadow-lg hover:shadow-pri transition-all ease-in-out duration-500 cursor-pointer'>
      <div className='content flex flex-col items-center space-y-8'>
        <div className='h-12 md:w-14 h-12 md:h-14 md:text-[30px] flex flex-col text-pri justify-center items-center bg-blue-50 rounded-md'>
          {cardIcon}
        </div>
        <div className=''>
          <p className='text-black text-2xl'>{cardTitle}</p>
          <p className='md:text-[20px] font-semibold text-black'>{subtitle}</p>
        </div>
        <p className='md:text-[20px] text-gray-600'>{cardParagraph}</p>
      </div>
    </div>
  );
}

export default Card;
