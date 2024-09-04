import Button from '@/components/Button';
import Title from '@/components/Title';
import { max_width } from '@/constant/width';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div className="pt-20 md:pt-12 ">
      <div
        className={`md:grid md:grid-cols-2 gap-5 py-6 md:py-0 items-center md:h-[90vh] px-6 md:px-0 md:w-[90%] ${max_width} `}
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
          <Image
            src="/images/training-hero.png"
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
