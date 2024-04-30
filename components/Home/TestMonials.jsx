"use client";
import { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const comments = [
    {
      comment:
        "Grâce à Move Daba, mon déménagement a été très simple ! Leur équipe a été ponctuelle, organisée et a travaillé rapidement pour m'installer dans mon nouveau logement. Je ferais certainement à nouveau appel à leurs services.",
      username: "Oualid Add",
    },
    {
      comment:
        "Si vous recherchez une entreprise de déménagement fiable, ne cherchez pas plus loin que Move Daba. J'ai été impressionné par leur souci du détail et le dévouement dont ils ont fait preuve pour assurer le bon déroulement de mon déménagement. Je le recommande vivement!",
      username: "Fouad Elmasry",
    },
    {
      comment:
        "Choisir Move Daba pour mon déménagement a été la meilleure décision que j'ai prise. Leur équipe était efficace, respectueuse et s'est assurée que tout était pris en charge. Je les recommanderai à tous mes amis et à ma famille.",
      username: "Issa Sm",
    },
  ];

  const images = [
    { src: "/person1.png", position: "right-0" },
    { src: "/person2.png", position: "right-0" },
    { src: "/person3.png", position: "left-0" },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div>
      <h1 className="text-center text-3xl leading-normal mb-16 font-bold">
        Témoignages
      </h1>

      <div
        className="bg-cover bg-center  bg-no-repeat container mx-auto py-8 px-4  rounded-3xl  "
        style={{ backgroundImage: `url('/bg-test.png')` }}
      >
        <div className="md:w-4/5 mx-auto">
          <div className="text-center relative w-fit mx-auto h-60 re flex  justify-center items-center">
            {images.map((img, i) => (
              <div
                key={i}
                className={`absolute w-40 h-40 md:w-52 md:h-52 transition-transform duration-300 transform-gpu ${
                  currentSlide === i
                    ? "scale-100 z-10 "
                    : `scale-50 z-0 ${img.position}`
                } flex justify-center items-center mx-0`}
              >
                <Image
                  src={img.src}
                  alt=""
                  className="border rounded-full object-cover"
                  fill
                />
              </div>
            ))}
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            // loop={true}
            navigation
            onSlideChange={handleSlideChange}
          >
            {comments.map((item, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center "
              >
                <div className="md:p-10  ">
                  <p className=" text-white text-lg font-semibold text-center w-7/12   mx-auto  ">
                    {item.comment}
                  </p>
                  <h2 className="text-white mt-9  ">{item.username}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
