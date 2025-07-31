import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { EffectFade, Autoplay } from 'swiper/modules';

import triathlonImg from './assets/MTS2025.jpg';
import halfMarathonImg from './assets/HOAGhalf.jpeg';
import fishingImg from './assets/costaRicaFishing.png';

const slideImages = [
  triathlonImg,
  halfMarathonImg,
  fishingImg
];

export default function HeroSlideshow() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      className="hero-slideshow"
    >
      {slideImages.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}