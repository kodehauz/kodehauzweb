'use client';
import Input from '@/components/Input';
import React, { useState } from 'react';
import Image from '../../node_modules/next/image';

interface ContactProps {
  img: string;
  order: Boolean;
  height: string;
}

function Contact({ img, order, height }: ContactProps) {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
  });
  const [laptop, setLaptop] = useState('');
  const [filePicked, setFilePicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleInputChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  //   const handleFile = ({ target }) => {
  //     if (target.files.length > 0) {
  //       setFilePicked(target.files[0]);
  //     } else {
  //       setFilePicked(null); // No file selected
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { fullname, email, phone, address } = formData;

    // const queryParams = new URLSearchParams({
    //   fullname,
    //   email,
    //   phone,
    //   address,
    //   laptop,
    // });

    // const fileData = new FormData();
    // if (filePicked) {
    //   fileData.append('receipt', filePicked);
    // }

    // fetch(
    //   `https://testbackend-ya01.onrender.com/api/v1/users/register?${queryParams.toString()}`,
    //   {
    //     method: 'POST',
    //     body: fileData, // Use fileData here
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div
      className={`flex px-5 py-10 md:px-0 md:w-[80%] mx-auto justify-center items-center text-black z-40`}
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
                <Input
                  key={idx}
                  label={e.label}
                  type={e.type}
                  placeholder={e.placeholder}
                  handleInputChange={handleInputChange}
                />
              );
            })}
            <button
              type='submit'
              className={`${
                order && 'w-full'
              } h-10 px-14 rounded-md text-white bg-pri mt-4`}
            >
              {loading ? 'Please wait' : 'Sumbit'}
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
