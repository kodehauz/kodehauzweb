import React from 'react';
import { Navigation, A11y } from 'swiper/modules';

import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface SwiperCardProps {
  children: React.ReactNode;
  spaceBetween: number;
  slidesPerView: number;
}

function SwiperCard({
  children,
  spaceBetween,
  slidesPerView,
}: SwiperCardProps) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper: string) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {children}
    </Swiper>
  );
}

export default SwiperCard;
