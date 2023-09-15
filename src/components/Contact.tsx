'use client';
import Input from '@/components/Input';
import React, { useState, ChangeEvent } from 'react';
import Image from '../../node_modules/next/image';
import { xtraLarge } from './constant';

interface ContactProps {
  img: string;
  order: Boolean;
  height: string;
}

function Contact({ img, order, height }: ContactProps) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const { fullname, email, message } = formData;

    const mailtrapData = {
      to: [
        {
          email: email,
          name: fullname,
        },
      ],
      from: {
        email: email,
        name: fullname,
      },
      subject: 'KodeHauz Contact Form',
      text: `${message}`,
      category: '',
    };

    try {
      const response = await fetch(`${process.env.MAILTRAP_API}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Api-Token': `${process.env.KODEHAUZ_MAILTRAP_TOKEN}`, // Replace with your Mailtrap API token
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailtrapData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Email sent:', data);
        setLoading(false); // You should define and manage the "loading" state in your component
      } else {
        console.error('Email sending failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div
      className={`flex px-5 py-20 md:px-0 md:w-[80%] ${xtraLarge()} mx-auto justify-center items-center text-black z-40`}
    >
      <div
        className={`flex ${
          order ? 'flex-col' : 'flex-col-reverse'
        } md:flex-row w-full`}
      >
        <div
          className={`left md:mt-0 ${
            order ? 'md:w-[55%]' : 'md:w-[45%]'
          } w-full flex flex-col justify-center ${order && 'order-2'}`}
        >
          <div className={`w-full md:w-[80%] ${order && 'ml-auto'}`}>
            {!order && <h1 className='text-3xl mb-4 font-bold'>Contact Us</h1>}
            {order ? (
              <p className='text-2xl'>Send us a Message</p>
            ) : (
              <p>Have a question? Reach out to us</p>
            )}
          </div>
          <form
            className={`w-full md:w-[80%] ${order && 'ml-auto'} mt-5`}
            onSubmit={handleSubmit}
          >
            {inputData.map((e, idx) => {
              return (
                <div key={idx} className=''>
                  <Input
                    label={e.label}
                    type={e.type}
                    placeholder={e.placeholder}
                    handleInputChange={handleInputChange}
                    handleTextAreaChange={handleTextAreaChange}
                  />
                </div>
              );
            })}
            <button
              type='submit'
              className={`${
                order && 'w-full'
              } h-10 px-14 rounded-md text-white bg-pri mt-4`}
            >
              {loading ? 'Please wait' : 'Submit'}
            </button>
          </form>
        </div>
        <div
          className={`${
            order ? 'md:w-[45%]' : 'md:w-[55%]'
          } w-full my-8 md:my-0 flex justify-center items-center`}
        >
          {order ? (
            <Image src={img} width={500} height={500} alt='img' />
          ) : (
            <div className='right relative h-80 md:h-[100%] w-[100%]'>
              <Image src={img} fill alt='img' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;

const inputData = [
  { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
  { label: 'Email', type: 'email', placeholder: 'johndoe@example.com' },
  { label: 'Message', type: 'text-area', placeholder: 'Your message' },
];
