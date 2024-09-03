import Button from '@/components/Button';
import Title from '@/components/Title';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div className="pt-20 md:pt-12 ">
      <div className="grid grid-cols-2 gap-5 items-center h-[90vh] w-[90%] mx-auto">
        <div className="space-y-6">
          <div className="font-semibold text-[48px] text-black">
            <p className="">Master Cloud DevOps</p>
            <p className="">
              With{' '}
              <span
                className="text-[#335CA6]
"
              >
                Azure
              </span>{' '}
              and <span className="text-[#8FA60C]">AWS</span>
            </p>
            <p className="">Expertise</p>
          </div>
          <p className="text-[24px]">
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
        <div className="">
          <Image
            src={'/images/training-hero.png'}
            height={740}
            width={740}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
