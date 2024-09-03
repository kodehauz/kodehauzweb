import Image from 'next/image';
import React from 'react';

const trainingData = [
  {
    id: 'aws',
    title: 'AWS Cloud Services',
    paragraph: `Amazon Web Services provides a comprehensive suite of services for building, deploying, and managing applications. The AWS training is targeted at a demographic consisting mostly of newcomers who want to immediately acquire useful knowledge that will give them entry-level jobs as AWS cloud practitioners. The goal is for participants to acquire the AWS CCP (Certified Cloud Practitioner) certification after completing the course.`,
    btnColor: '#8FA60C',
    imageSrc: '/images/aws.svg',
    details: [
      {
        img: '/images/duration-aws.svg',
        title: 'Duration',
        items: ['4 weeks'],
      },
      {
        img: '/images/weekly-aws.svg',
        title: 'Weekly sessions',
        items: ['2 hours per day', '3 days per week'],
        listStyle: 'disc',
      },
      { img: '/images/mode-aws.svg', title: 'Mode', items: ['Online/webinar'] },
      {
        img: '/images/cost-aws.svg',
        title: 'Cost',
        items: ['$250 per participant'],
      },
    ],
  },
  {
    id: 'azure',
    title: 'Azure Training',
    paragraph: `Azure, Microsoft's cloud computing platform, provides a comprehensive suite of services for building, deploying, and managing applications. The Azure training is targeted at a demographic consisting mostly of newcomers to the Cloud DevOps space who want to immediately acquire useful knowledge that places them in a position to get entry-level jobs in DevOps. Ultimately, the goal is for participants to acquire the AZ900 certification after completing the course.`,
    btnColor: '#335CA6',
    imageSrc: '/images/azure.svg',
    details: [
      {
        img: '/images/duration-azure.svg',
        title: 'Duration',
        items: ['4 weeks'],
      },
      {
        img: '/images/weekly-azure.svg',
        title: 'Weekly sessions',
        items: ['2 hours per day', '3 days per week'],
        listStyle: 'disc',
      },
      {
        img: '/images/mode-azure.svg',
        title: 'Mode',
        items: ['Online/webinar'],
      },
      {
        img: '/images/cost-azure.svg',
        title: 'Cost',
        items: ['$250 per participant'],
      },
    ],
  },
];

function Page() {
  return (
    <div className="pt-20 md:pt-12">
      <div className="grid grid-cols-2 gap-5 items-center h-[90vh] w-[90%] mx-auto">
        <div className="space-y-6">
          <div className="font-semibold text-[48px] text-black">
            <p>Master Cloud DevOps</p>
            <p>
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
        <div>
          <Image
            src="/images/training-hero.png"
            height={740}
            width={740}
            alt="hero"
          />
        </div>
      </div>

      {trainingData.map((training) => (
        <section
          key={training.id}
          id={training.id}
          className={`h-[100vh] flex flex-col justify-center items-center ${
            training.id === 'aws' ? 'bg-[#f9fbf3]' : 'bg-[#f5f7fb]'
          }`}
        >
          <div className="grid grid-cols-2 gap-20 items-center w-[90%] mx-auto">
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
                />
              </>
            ) : (
              <>
                <TextContent
                  title={training.title}
                  paragraph={training.paragraph}
                  btnColor={training.btnColor}
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
          <div className="flex justify-between w-[90%] mt-12">
            {training.details.map((detail, index) => (
              <SimpleCard
                key={index}
                img={detail.img}
                title={detail.title}
                listStyle={detail.listStyle}
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

const SimpleCard = ({ img, title, children, listStyle = '' }) => (
  <div className="bg-white rounded-md p-6 flex items-center space-x-6 min-w-[271px] shadow-lg">
    <Image src={img} height={48} width={48} alt={title} />
    <div className="text-black space-y-2">
      <p>{title}</p>
      <ul className="text-xs" style={{ listStyle }}>
        {children}
      </ul>
    </div>
  </div>
);

const TextContent = ({ title, paragraph, btnColor }) => (
  <div>
    <p style={{ color: btnColor }}>About</p>
    <p className="text-black mt-3 text-[28px] font-semibold">{title}</p>
    <p className="text-[20px] text-justify leading-10 text-black mb-6">
      {paragraph}
    </p>
    <a
      href="https://paystack.com/pay/khdevops"
      target="_blank"
      className="flex justify-start"
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
