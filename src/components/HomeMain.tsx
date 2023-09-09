import React from 'react';
import Image from '../../node_modules/next/image';
import Button from './Button';
import CardWidget from './CardWidget';
import Paragraph from './Paragraph';
import Title from './Title';
import { FaHeadSideVirus, FaSearchengin } from 'react-icons/fa';
import Card from './Card';
import SwiperCard from './SwiperCard';
import Link from '../../node_modules/next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Contact from './Contact';

function HomeMain() {
  return (
    <div className=''>
      <SwiperCard slidesPerView={1} spaceBetween={1}>
        {heros.map((hero, idx) => (
          <SwiperSlide key={idx}>
            <div className='w-[90%] ml-auto md:h-[85vh] relative overflow-hidden flex flex-col md:flex-row justify-between items-center'>
              <div className='text flex flex-col gap-y-4 w-full md:w-[50%] flex flex-col'>
                <div className='content space-y-5 w-[93%]'>
                  <h1 className='text-[40px] font-bold text-black'>
                    {hero.title}
                  </h1>
                  <div className='flex flex-col gap-y-4'>
                    <Paragraph paragraph={hero.textArr[0]} />
                  </div>
                  {
                    <Link href={hero.link} className='flex items-start'>
                      <Button
                        buttonText={'Learn More'}
                        buttonColor={'bg-pri'}
                        textColor={'text-white'}
                      />
                    </Link>
                  }
                </div>
              </div>
              <div
                className={`hidden md:block img w-[60%] ${
                  idx === 2 && 'flex justify-end'
                }`}
              >
                <div
                  className={`relative ${
                    idx === 0
                      ? 'h-[60rem] w-[60rem]'
                      : idx === 1
                      ? 'h-[35rem] w-[40rem]'
                      : 'h-[500px] w-[400px] mr-[20%]'
                  }`}
                >
                  <Image src={hero.imageSrc} fill alt='image' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperCard>

      <div className='bg-[#f7f8fb]'>
        <div className='py-10 w-full px-5 md:px-0 md:w-[80%] mx-auto'>
          <div className='text-center'>
            <Title title='What we do' color='' />
            <div className='grid md:grid-cols-3 gap-10 py-10'>
              {whatWeDo?.map((e, idx) => {
                const { icon, title, subtitle, paragraph } = e;
                return (
                  <Card
                    key={idx}
                    cardIcon={icon}
                    cardTitle={title}
                    subtitle={subtitle}
                    cardParagraph={paragraph}
                  />
                );
              })}
            </div>
          </div>
          <div className='py-10 md:py-20'>
            <Title title='Some companies we have worked with' color='' />
            <div className='py-10 relative'>
              <SwiperCard slidesPerView={5} spaceBetween={50}>
                {companies.map((company, idx) => (
                  <SwiperSlide key={idx}>
                    <Link href={company.link}>
                      <Image
                        src={company.img}
                        width={80}
                        height={80}
                        alt={company.link}
                        className='mx-auto'
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </SwiperCard>
            </div>
          </div>
        </div>
        <div
          id='companies'
          className='flex flex-col space-y-20 w-full px-5 md:px-0 md:w-[80%] mx-auto'
        >
          {hero?.map((e, idx) => {
            const {
              title,
              titleColor,
              textArr,
              buttonText,
              buttonColor,
              buttonTextColor,
              button,
              imageSrc,
              order,
              link,
            } = e;
            return (
              <CardWidget
                key={idx}
                title={title}
                titleColor={titleColor}
                textArr={textArr}
                buttonText={buttonText}
                buttonColor={buttonColor}
                buttonTextColor={buttonTextColor}
                button={button}
                imageSrc={imageSrc}
                order={order}
                link={link}
              />
            );
          })}
        </div>
        <div className='contact mt-10'>
          <Contact
            img='/images/contact-one.png'
            order={false}
            height={'h-[100vh]'}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;

const hero = [
  {
    title: 'Experience the Future with KodeHauz solution Planet',
    titleColor: 'text-pri',
    textArr: [
      'This exclusive training is thoughtfully designed to KodeHauz Solutions Planet is excited to announce a comprehensive training program aimed at helping businesses to enhance their DevOps proficiency in 2024. The program is led by our experienced team of DevOps experts, who have several years of hands-on experience in implementing and managing DevOps solutions for our clients.',
      'Our specialized training program covers all aspects of DevOps, including process automation, continuous integration and delivery, cloud platforms, and containerization. Participants will gain in-depth knowledge, practical skills, and best practices to transform their DevOps capabilities, increase efficiency, and improve quality.',
      'Contact us today to enroll in the program and secure your spot in the next generation of DevOps excellence.',
    ],
    buttonText: 'Join the Waitlist',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/devops.png',
    order: true,
    link: 'https://forms.gle/8HssMcsT2MmTEYJBA',
  },
  {
    title: 'Research and Development',
    titleColor: 'text-pri',
    textArr: [
      'At KodeHauz Solutions Planet, we are dedicated to research and development to drive innovation in our solutions. Our research covers areas in Machine Learning, AI, and more. We believe that staying ahead of the curve requires continuous learning, experimentation, and evolution.',
      'Our team of experts is committed to exploring emerging technologies, testing unconventional approaches, and discovering new possibilities for our clients. We use advanced analytics, design thinking, and agile development methodologies to deliver cutting-edge solutions that transform your business.',
      'Choose KodeHauz Solutions Planet for innovative research and development, and take your business to the next level of success.',
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/research.png',
    order: false,
    link: 'https://kode.camp',
  },
  {
    title: 'KodeCamp',
    titleColor: 'text-pri',
    textArr: [
      "Unlock your potential with KodeCamp, your gateway to mastering coding skills. Dive deep into programming languages, frameworks, and cutting-edge technologies, all from the comfort of your home. Best of all, it's completely free!",
      'KodeCamp offers a comprehensive curriculum designed by industry experts, covering a wide range of topics including web development, mobile app development,  product design, data science, and more. Learn at your own pace and gain hands-on experience through practical projects and coding challenges.',
      "Join our vibrant community of learners, interact with fellow students, and receive guidance from our experienced instructors. Whether you're a beginner looking to build a solid foundation or an experienced coder aiming to level up, KodeCamp has something for everyone.",
      "Don't miss out on this opportunity to elevate your coding skills and boost your career. Enroll in KodeCamp today and embark on an exciting journey towards becoming a coding pro. It's free. It's convenient. It's KodeCamp. Start coding now!",
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/kodecamp-2.png',
    order: true,
    link: 'https://kode.camp',
  },
];

const whatWeDo = [
  {
    icon: [<FaHeadSideVirus />],
    title: 'Talent Pipeline',
    subtitle: '(DevOps)',
    paragraph:
      ' Specialized DevOps and DevSecOps training for advanced tech indiviiduals',
  },
  {
    icon: [<FaSearchengin />],
    title: 'Research and Development',
    subtitle: '',
    paragraph:
      'At KodeHauz Solutions Planet, we are dedicated to research and development to drive innovation in our solutions.',
  },
  {
    icon: [<FaHeadSideVirus />],
    title: 'KodeCamp',
    subtitle: '(Building the Skill Economy)',
    paragraph:
      'We are part of those developing the Tech Talent Pipeline - led by Mr. Aniebiet Udoh.',
  },
];

const companies = [
  {
    img: '/images/blackforce.png',
    link: '/page',
  },
  {
    img: '/images/hotels.png',
    link: '/page',
  },
  {
    img: '/images/gear.png',
    link: '/page',
  },
  {
    img: '/images/gear.png',
    link: '/page',
  },
  {
    img: '/images/gear.png',
    link: '/page',
  },
  {
    img: '/images/gear.png',
    link: '/page',
  },
  {
    img: '/images/gear.png',
    link: '/page',
  },
];

const heros = [
  {
    title: 'Experience the Future with KodeHauz solution Planet',
    titleColor: 'text-pri',
    textArr: [
      'This exclusive training is thoughtfully designed to KodeHauz Solutions Planet is excited to announce a comprehensive training program aimed at helping businesses to enhance their DevOps proficiency in 2024. The program is led by our experienced team of DevOps experts, who have several years of hands-on experience in implementing and managing DevOps solutions for our clients.',
      'Our specialized training program covers all aspects of DevOps, including process automation, continuous integration and delivery, cloud platforms, and containerization. Participants will gain in-depth knowledge, practical skills, and best practices to transform their DevOps capabilities, increase efficiency, and improve quality.',
      'Contact us today to enroll in the program and secure your spot in the next generation of DevOps excellence.',
    ],
    buttonText: 'Join the Waitlist',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/hero.png',
    order: true,
    link: '#companies',
  },
  {
    title: 'DEVOPS TRAINING',
    titleColor: 'text-pri',
    textArr: [
      'Join our DevOps training in January 2024 and kick start your career as a DevOps Engineer. Our specialized training program covers all aspects of DevOps, including process automation, continuous integration and delivery, cloud platforms, and containerization.',
      'Our team of experts is committed to exploring emerging technologies, testing unconventional approaches, and discovering new possibilities for our clients. We use advanced analytics, design thinking, and agile development methodologies to deliver cutting-edge solutions that transform your business.',
      'Choose KodeHauz Solutions Planet for innovative research and development, and take your business to the next level of success.',
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/devops-hero.png',
    order: false,
    link: 'https://forms.gle/8HssMcsT2MmTEYJBA',
  },
  {
    title: 'SALESFOLRCE DEVOPS ENGINEERING',
    titleColor: 'text-pri',
    textArr: [
      'An exclusive 12-week DevOps training program in collaboration with BlackForce, a dedicated Salesforce Training & Recruitment platform for the development and empowerment of the Black, Ethnic Minority Community within Canada and North America at large.',
      'KodeCamp offers a comprehensive curriculum designed by industry experts, covering a wide range of topics including web development, mobile app development,  product design, data science, and more. Learn at your own pace and gain hands-on experience through practical projects and coding challenges.',
      "Join our vibrant community of learners, interact with fellow students, and receive guidance from our experienced instructors. Whether you're a beginner looking to build a solid foundation or an experienced coder aiming to level up, KodeCamp has something for everyone.",
      "Don't miss out on this opportunity to elevate your coding skills and boost your career. Enroll in KodeCamp today and embark on an exciting journey towards becoming a coding pro. It's free. It's convenient. It's KodeCamp. Start coding now!",
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/salesforce.png',
    order: true,
    link: 'https://forms.gle/8HssMcsT2MmTEYJBA',
  },
];
