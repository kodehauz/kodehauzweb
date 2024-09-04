import Image from 'next/image';
import React, { ReactNode } from 'react';
import { trainingData } from '@/data/trainingData';
import { max_width } from '@/constant/width';

function Page() {
  return (
    <div className="pt-20 md:pt-12">
      <div
        className={`md:grid md:grid-cols-2 gap-5 py-6 md:py-0 items-center md:h-[90vh] ${max_width} `}
      >
        <div className="space-y-6">
          <div className="font-semibold text-3xl md:text-[48px] text-black">
            <p>Master Cloud DevOps</p>
            <p className="md:my-6">
              With <span className="text-[#335CA6]">Azure</span> &{' '}
              <span className="text-[#8FA60C]">AWS</span>
            </p>
            <p>Expertise</p>
          </div>
          <p className="text-[24px] text-gray-800">
            Join our comprehensive training program and become a certified
            DevOps expert
          </p>
          <a
            href="https://paystack.com/pay/khdevops"
            target="_blank"
            className="flex justify-start"
          >
            <button className="py-3 px-8 rounded text-white bg-pri">
              Sign Up Now
            </button>
          </a>
        </div>
        <div className="hidden md:block">
          <Image src="/images/flyer.svg" height={740} width={740} alt="hero" />
        </div>
      </div>

      {trainingData.map((training) => (
        <section
          key={training.id}
          id={training.id}
          className={`md:h-[100vh] py-6 md:py-0 flex flex-col justify-center items-center ${
            training.id === 'aws' ? 'bg-[#f9fbf3]' : 'bg-[#f5f7fb]'
          }`}
        >
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6 md:px-0 ${max_width} `}
          >
            {training.id === 'aws' ? (
              <>
                <div>
                  <Image
                    src={training.imageSrc}
                    height={453}
                    width={549}
                    alt={training.title.toLowerCase()}
                  />
                </div>
                <TextContent
                  title={training.title}
                  paragraph={training.paragraph}
                  btnColor={training.btnColor}
                  id={training.id}
                />
              </>
            ) : (
              <>
                <TextContent
                  title={training.title}
                  paragraph={training.paragraph}
                  btnColor={training.btnColor}
                  id={training.id}
                />
                <div>
                  <Image
                    src={training.imageSrc}
                    height={453}
                    width={549}
                    alt={training.title.toLowerCase()}
                  />
                </div>
              </>
            )}
          </div>
          <div
            className={`w-full flex flex-col md:grid md:grid-cols-4 md:gap-4 md:justify-between space-y-6 md:space-y-0 px-6 md:px-0 ${max_width} mt-12`}
          >
            {training.details.map((detail, index) => (
              <SimpleCard
                key={index}
                img={detail.img}
                title={detail.title}
                listStyle={detail.listStyle}
                index={index}
              >
                {detail.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </SimpleCard>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Page;

interface SimpleCardProps {
  img: string;
  title: string;
  children: ReactNode;
  listStyle?: string;
  index: number;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  img,
  title,
  children,
  listStyle = '',
  index,
}) => (
  <div
    className={`${
      index % 2 === 0 ? 'self-start md:self-auto' : 'self-end md:self-auto'
    } bg-white rounded-md p-4 flex items-center space-x-6 w-60 md:w-auto shadow-lg`}
  >
    <Image src={img} height={48} width={48} alt={title} />
    <div className="text-black space-y-2">
      <p>{title}</p>
      <ul className="text-xs" style={{ listStyle }}>
        {children}
      </ul>
    </div>
  </div>
);

interface TextContentProps {
  title: string;
  paragraph: string;
  btnColor: string;
  id: string;
}

const TextContent: React.FC<TextContentProps> = ({
  title,
  paragraph,
  btnColor,
  id,
}) => (
  <div className={`${id === 'azure' ? 'order-last md:order-first' : ''}`}>
    <p style={{ color: btnColor }}>About</p>
    <p className="text-black mt-3 text-[28px] font-semibold">{title}</p>
    <p className="text-[20px] text-justify leading-10 text-black mb-6">
      {paragraph}
    </p>
    <a
      href="https://paystack.com/pay/khdevops"
      target="_blank"
      className="flex justify-start"
      rel="noopener noreferrer"
    >
      <button
        className="text-white px-5 py-2 rounded"
        style={{ backgroundColor: btnColor }}
      >
        Apply now
      </button>
    </a>
  </div>
);
