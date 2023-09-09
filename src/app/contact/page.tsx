import Contact from '@/components/Contact';
import React from 'react';
import {
  BiSolidPhoneCall,
  BiMailSend,
  BiSolidEditLocation,
} from 'react-icons/bi';
import Link from '../../../node_modules/next/link';

function page() {
  return (
    <div className='pt-24 md:pt-12'>
      <Contact
        order={true}
        img='/images/contact-img.png'
        height={'h-[100vh]'}
      />
      <div className='contact flex flex-col items-center justify-center py-10 space-y-5 mt-8'>
        <h1 className='font-bold'>Contact us</h1>
        <div className='grid md:grid-cols-3 gap-10 items-center'>
          {contactCard.map((contact, idx) => (
            <div className='card flex flex-col justify-center items-center space-y-3'>
              <Link
                key={idx}
                href={contact.link}
                target={'_blank'}
                className='icon w-10 h-10 bg-blue-100 rounded-md flex justify-center items-center text-pri text-xl'
              >
                {contact.img}
              </Link>
              <p className='font-semibold'>{contact.title}</p>
              <p className='w-2/3 text-center'>{contact.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;

const contactCard = [
  {
    img: <BiSolidEditLocation />,
    title: 'Visit Us',
    address: '38 Afaha Uqua Road, Eket, Akwa Ibom State.',
    link: 'geo:0,0?q=38+Afaha+Uqua+Road,+Eket,+Akwa+Ibom+State',
  },
  {
    img: <BiSolidPhoneCall />,
    title: 'Call Us',
    address: '+ (234) 907-646-5505',
    link: 'tel:+2349076465505',
  },
  {
    img: <BiMailSend />,
    title: 'Mail Us',
    address: 'info@kodehauz.com',
    link: 'mailto:info@kodehauz.com',
  },
];
