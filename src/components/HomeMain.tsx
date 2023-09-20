import React, { useEffect, useState } from 'react';
import Image from '../../node_modules/next/image';
import Button from './Button';
import CardWidget from './CardWidget';
import Paragraph from './Paragraph';
import Title from './Title';
import { FaHeadSideVirus, FaSearchengin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Card from './Card';
import SwiperCard from './SwiperCard';
import Link from '../../node_modules/next/link';
import Contact from './Contact';
import { xtraLarge } from './constant';
import { useSwipeable } from '../../node_modules/react-swipeable/es/index';

function HomeMain() {
  const [swipe, setSwipe] = useState(0);
  const [companySwipe, setCompanySwipe] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwipe((prevSwipe) => {
        if (prevSwipe === heros.length - 1) {
          return 0;
        } else {
          return prevSwipe + 1;
        }
      });
    }, 15000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCompanySwipe((prevSwipe) => {
      if (prevSwipe[prevSwipe.length - 1] === 4) {
        return prevSwipe;
      }
      const newSwipe = [...prevSwipe];

      newSwipe.shift();

      newSwipe.push(newSwipe[newSwipe.length - 1] + 1);
      return newSwipe;
    });
  };

  const handlePrev = () => {
    setCompanySwipe((prevSwipe) => {
      if (prevSwipe[0] === 0) {
        return prevSwipe;
      }

      const newSwipe = [...prevSwipe];

      newSwipe.pop();

      newSwipe.unshift(newSwipe[0] - 1);
      return newSwipe;
    });
  };

  const xl = xtraLarge();

  const config = {
    delta: 10, // Minimum distance to trigger a swipe in pixels
    preventDefaultTouchmoveEvent: true, // Prevents default touchmove events during swipe
    trackTouch: true, // Track touch events
    trackMouse: false, // Track mouse events
    rotationAngle: 0, // Set to 0 for horizontal swipes
  };

  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
    ...config,
  });

  return (
    <div className='z-40 2xl:bg-black'>
      {/* Hero */}

      <div
        {...handlers}
        className='grid grid-cols-1 h-[85vh] relative 2xl:w-[70%] 2xl:mx-auto 2xl:bg-white'
      >
        {heros.map((hero, idx) => (
          <div
            key={idx}
            className={`${
              idx !== swipe ? 'hidden' : 'flex'
            } w-[90%] ml-auto md:h-[100%] relative overflow-hidden flex-col md:flex-row justify-between items-center transition-all ease-in-out duration-500`}
          >
            <div className='text flex flex-col justify-center md:items-start gap-y-4 w-full md:h-auto md:w-[50%] py-5 md:py-0 min-h-[65vh]'>
              <div className='content space-y-5 w-[93%] text-center md:text-left'>
                <h1 className='text-[25px] md:text-left md:text-[40px] font-bold text-black'>
                  {hero.title}
                </h1>
                <div className='flex flex-col gap-y-4'>
                  <p className='text-sm lg:text-[20px] leading-6 lg:leading-8 text-gray-600 text-center md:text-justify'>
                    {hero.textArr[0]}
                  </p>
                </div>
                {
                  <Link
                    href={hero.link}
                    target={idx !== 0 ? '_blank' : undefined}
                    className='flex justify-center md:justify-start'
                  >
                    <Button
                      buttonText={hero.buttonText}
                      buttonColor={'bg-pri'}
                      textColor={'text-white'}
                    />
                  </Link>
                }
              </div>
            </div>
            <div
              className={`hidden md:block img w-[60%] ${
                idx === 2 && 'md:flex justify-end'
              } `}
            >
              {idx === 2 ? (
                <Image
                  src={hero.imageSrc}
                  width={500}
                  height={1000}
                  objectFit='center'
                  alt='image'
                  className='object-center'
                />
              ) : (
                <div
                  className={`relative ${
                    idx === 0
                      ? 'h-[65rem] w-[65rem] 2xl:h-[75rem] 2xl:w-[75rem] -right-[10%]'
                      : 'h-[35rem] w-[40rem]'
                    // : 'h- w-[100%]'
                  }`}
                >
                  <Image src={hero.imageSrc} fill alt='image' />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className='absolute bottom-2 w-full flex items-center justify-center space-x-3'>
          {Array(3)
            .fill('')
            .map((_, idx) => (
              <div
                key={idx}
                onClick={() => setSwipe(idx)}
                className={`${
                  swipe === idx
                    ? 'bg-pri w-[10px] h-[10px]'
                    : 'border-pri w-[8px] h-[8px] border'
                } rounded-full cursor-pointer`}
              ></div>
            ))}
        </div>
      </div>
      {/* <div className='grid grid-cols-1 h-[85vh] relative 2xl:w-[70%] 2xl:mx-auto 2xl:bg-white'>
        {heros.map((hero, idx) => (
          <div
            key={idx}
            className={`${
              idx !== swipe ? 'hidden' : 'flex'
            } w-[90%] ml-auto md:h-[100%] relative overflow-hidden flex-col md:flex-row justify-between items-center transition-all ease-in-out duration-500`}
          >
            <div className='text flex flex-col justify-center md:items-start gap-y-4 w-full md:h-auto md:w-[50%] py-5 md:py-0 min-h-[65vh]'>
              <div className='content space-y-5 w-[93%] text-center md:text-left'>
                <h1 className='text-[25px] md:text-left md:text-[40px] font-bold text-black'>
                  {hero.title}
                </h1>
                <div className='flex flex-col gap-y-4'>
                  <p className='text-sm lg:text-[20px] leading-6 lg:leading-8 text-gray-600 text-center md:text-justify'>
                    {hero.textArr[0]}
                  </p>
                </div>
                {
                  <Link
                    href={hero.link}
                    target={idx !== 0 ? '_blank' : undefined}
                    className='flex justify-center md:justify-start'
                  >
                    <Button
                      buttonText={hero.buttonText}
                      buttonColor={'bg-pri'}
                      textColor={'text-white'}
                    />
                  </Link>
                }
              </div>
            </div>
            <div
              className={`hidden md:block img w-[60%] ${
                idx === 2 && 'md:flex justify-end'
              } `}
            >
              {idx === 2 ? (
                <Image
                  src={hero.imageSrc}
                  width={500}
                  height={1000}
                  objectFit='center'
                  alt='image'
                  className='object-center'
                />
              ) : (
                <div
                  className={`relative ${
                    idx === 0
                      ? 'h-[65rem] w-[65rem] 2xl:h-[75rem] 2xl:w-[75rem] -right-[10%]'
                      : 'h-[35rem] w-[40rem]'
                    // : 'h- w-[100%]'
                  }`}
                >
                  <Image src={hero.imageSrc} fill alt='image' />
                </div>
              )}
            </div>
          </div>
        ))}
        <div className='absolute bottom-2 w-full flex items-center justify-center space-x-3'>
          {Array(3)
            .fill('')
            .map((_, idx) => (
              <div
                key={idx}
                onClick={() => setSwipe(idx)}
                className={`${
                  swipe === idx
                    ? 'bg-pri w-[10px] h-[10px]'
                    : 'border-pri w-[8px] h-[8px] border'
                } rounded-full cursor-pointer`}
              ></div>
            ))}
        </div>
      </div> */}
      <div className='bg-[#f7f8fb] 2xl:bg-black' id='what-we-do'>
        <div className={`py-10 w-full px-5 md:px-0 md:w-[80%] ${xl} mx-auto`}>
          {/* What we do */}
          <div className='text-center'>
            <Title title='What we do' color='' align='' />
            <div className='grid md:grid-cols-3 gap-10 py-10'>
              {whatWeDo?.map((e, idx) => {
                const { icon, title, subtitle, paragraph } = e;
                return (
                  <div key={idx} className=''>
                    <Card
                      cardIcon={icon}
                      cardTitle={title}
                      subtitle={subtitle}
                      cardParagraph={paragraph}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* some organization we worked with */}
          {/* <div className='py-10 md:py-20'>
            <Title
              title='Some organizations we have worked with'
              color=''
              align=''
            />
            <div className='py-10 relative'>
              <div className='grid grid-cols-2 md:grid-cols-5 gap-5 items-center min-h-[100px] relative'>
                <div
                  className='prev absolute top-[40%] text-xl left-0'
                  onClick={handlePrev}
                >
                  <GrPrevious />
                </div>
                {companies.map((company, idx) => (
                  <div
                    key={idx}
                    className={`${
                      companySwipe.includes(idx) ? '' : 'hidden md:flex'
                    } transition-all ease-in-out duration-500`}
                  >
                    <Image
                      src={company.img}
                      width={100}
                      height={100}
                      alt={company.link}
                      className='mx-auto transition-all ease-in-out duration-500 mix-blend-multiply'
                    />
                  </div>
                ))}
                <div
                  className='next absolute top-[40%] text-xl right-0'
                  onClick={handleNext}
                >
                  <GrNext />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* what we do details */}
        <div
          id='companies'
          className={`flex flex-col space-y-20 w-full px-5 md:px-0 md:w-[80%] ${xl} mx-auto`}
        >
          {whatWeDoDetails?.map((e, idx) => {
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
              <div key={idx} className=''>
                <CardWidget
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
              </div>
            );
          })}
        </div>
        {/* contact us */}
        <div className='contact'>
          <Contact
            img='/images/contact1.svg'
            order={false}
            height={'h-[100vh]'}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;

const whatWeDoDetails = [
  {
    title: 'KodeHauz DevOps Training',
    titleColor: 'text-pri',
    textArr: [
      'This exclusive training program has been meticulously crafted to cater for the development of Expert DevOps Engineers. It is spearheaded by our team of seasoned DevOps experts, who boast extensive hands-on experience in implementing and managing DevOps solutions for our esteemed clients.',
      'Our specialized training program encompasses all facets of DevOps, ranging from process automation and continuous integration to delivery, cloud platforms, and containerization. Participants will acquire comprehensive knowledge, practical skills, and industry best practices to revolutionize their DevOps capabilities, enhance efficiency, and elevate the overall quality of their work.',
      'Do not hesitate, join the wait-list  to reach out to us to enroll in this program and secure your place in the next generation of DevOps excellence.',
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
      'At KodeHauz Solutions Planet, our primary focus is on research and development to promote innovation within our solutions. Our research encompasses areas such as Machine Learning, AI, and beyond. We firmly believe that staying ahead of the competition necessitates ongoing learning, experimentation, and evolution.',
      'Our team of experts is dedicated to exploring emerging technologies, testing unconventional approaches, and discovering new opportunities for our clients. We utilize advanced analytics, design thinking, and agile development methodologies to provide cutting-edge solutions that can help transform your business.',
      'Choose KodeHauz Solutions Planet for innovative research and development, and take your business to the next level of success.',
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: false,
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
    icon: <img src='/images/Devops.svg' alt='devops' />,
    title: 'KodeHauz Devops Training',
    subtitle: '',
    paragraph:
      'Providing advanced technical individuals with specialized training in DevOps and DevSecOps, tailored to their expertise.',
  },
  {
    icon: <img src='/images/hrprogram.svg' alt='research' />,
    title: 'Research and Development',
    subtitle: '',
    paragraph:
      'At KodeHauz Solutions Planet, we are dedicated to research and development to drive innovation in our solutions.',
  },
  {
    icon: <img src='/images/DevelopmentSkill.svg' alt='dev-skill' />,
    title: 'KodeCamp',
    subtitle: '',
    paragraph:
      'We are actively building a Tech Talent Pipeline, developing and implementing a framework for sustainability',
  },
];

const companies = [
  {
    img: '/images/blackforce.png',
    link: '',
  },
  {
    img: '/images/hotels.png',
    link: '',
  },
  {
    img: '/images/estd.png',
    link: '',
  },
  {
    img: '/images/bonitas.png',
    link: '',
  },
  {
    img: '/images/kompletecare.png',
    link: '',
  },
];

const heros = [
  {
    title: 'Experience the Future with KodeHauz Solutions Planet',
    titleColor: 'text-pri',
    textArr: [
      "Discover how KodeHauz Solutions Planet can revolutionize your business with forward-thinking technology solutions. Contact us today for a professional consultation and let's embark on a journey towards digital transformation and success together.",
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/hero1.svg',
    order: true,
    link: '#companies',
  },
  {
    title: 'KODEHAUZ ELITE DEVOPS TRAINING',
    titleColor: 'text-pri',
    textArr: [
      'Join our DevOps training in January 2024 and kick start your career as a DevOps Engineer. Our specialized training program covers all aspects of DevOps, including process automation, continuous integration and delivery, cloud platforms, and containerization.',
    ],
    buttonText: 'Join the Waitlist',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/hero2.svg',
    order: false,
    link: 'https://forms.gle/8HssMcsT2MmTEYJBA',
  },
  {
    title: 'SALESFORCE DEVOPS ENGINEERING',
    titleColor: 'text-pri',
    textArr: [
      'An exclusive 12-week DevOps training program in collaboration with BlackForce, a dedicated Salesforce Training & Recruitment platform for the development and empowerment of the Black, Ethnic Minority Community within Canada and North America at large.',
    ],
    buttonText: 'Learn More',
    buttonColor: 'bg-transparent',
    buttonTextColor: 'text-pri',
    button: true,
    imageSrc: '/images/hero3.svg',
    order: true,
    link: 'https://blackforce.ca/program',
  },
];
