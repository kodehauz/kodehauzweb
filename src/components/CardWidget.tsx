import React from 'react';
import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link';
import Button from './Button';
import Paragraph from './Paragraph';
import Title from './Title';

interface CardWidgetProps {
  title: string;
  titleColor: string;
  textArr: string[];
  buttonText: string;
  buttonColor: string;
  buttonTextColor: string;
  button: Boolean;
  imageSrc: string;
  order: Boolean;
  link: string;
}

function CardWidget({
  titleColor,
  title,
  textArr,
  buttonText,
  buttonColor,
  buttonTextColor,
  button,
  imageSrc,
  order,
  link,
}: CardWidgetProps) {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center text-white'>
      <div
        className={`text flex flex-col order-2 gap-y-4 lg:w-[45%] ${
          order ? 'md:order-2' : 'order-first'
        }`}
      >
        <div className='hidden md:block'>
          <Title title={title} color={titleColor} align={'text-left'} />
        </div>
        <div className='flex flex-col gap-y-4'>
          {textArr.map((text, idx) => {
            return <Paragraph paragraph={text} key={idx} />;
          })}
        </div>
        {button && (
          <Link href={link} target={'_blank'} className='flex items-start'>
            <Button
              buttonText={buttonText}
              buttonColor={buttonColor}
              textColor={buttonTextColor}
            />
          </Link>
        )}
      </div>
      <div className='img lg:w-[50%] my-5 md:my-0'>
        <div className='md:hidden mb-6'>
          <Title title={title} color={titleColor} align={'text-center'} />
        </div>
        <Image src={imageSrc} height={500} width={500} alt='image' />
      </div>
    </div>
  );
}

export default CardWidget;
