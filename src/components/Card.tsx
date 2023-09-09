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
    <div className='group bg-white py-5 px-4 rounded flex flex-col gap-y-3 items-center min-h-[200px] hover:shadow-lg hover:shadow-pri transition-all ease-in-out duration-500 cursor-pointer'>
      <div className='w-12 h-12 flex flex-col text-pri justify-center items-center bg-blue-50 rounded-md'>
        {cardIcon}
      </div>
      <div className=''>
        <p className='text-black'>{cardTitle}</p>
        <p className='text-[12px] font-semibold text-black'>{subtitle}</p>
      </div>
      <p className='text-[12px] text-gray-600'>{cardParagraph}</p>
    </div>
  );
}

export default Card;
