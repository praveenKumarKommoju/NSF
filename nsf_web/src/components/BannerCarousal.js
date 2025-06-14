// BannerCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const slides = [
  {
    title: "Empower the Future",
    subtitle: "Join hands to support underprivileged communities.",
    cta1: "Donate Now",
    cta2: "Learn More",
  },
  {
    title: "Be the Change",
    subtitle: "Volunteer to make a real impact in people’s lives.",
    cta1: "Donate Now",
    cta2: "Learn More",
  },
];

export default function BannerCarousel() {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/image-illustration/banner-black-color-solid-background-260nw-1977577964.jpg)",
      }} // Replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex justify-center items-center px-4 text-center">
        <div className="max-w-2xl w-full text-white">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4000 }}
            loop
            className="w-full max-w-3xl"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold">{slide.title}</h1>
                  <p className="text-lg mt-2">{slide.subtitle}</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <PrimaryButton name={slide.cta1}/>
                    <SecondaryButton name={slide.cta2}/>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
