'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Testimonial.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type TestimonialArray = {
  image: string;
  reference: string;
  author: string;
};

const Testimonial = () => {
  const sliderRef = useRef<SwiperRef>(null);

  const testimonialArray: TestimonialArray[] = [
    {
      image: 'chase&status.jpg',
      reference:
        "“Chordprinter help us make Badadan. It's extemely powerfull tool.You got ideas in seconds!!!”",
      author: 'Chase and Status',
    },
    {
      image: 'balron.jpg',
      reference:
        "“I've always liked neurofunk, but Chordprinter opened my eyes and I started producing liquidfunk.”",
      author: 'Balron',
    },
    {
      image: 'morebeat.jpg',
      reference:
        '“With Chordprinter, I finish tracks half a year earlier. This is absolutely amazing!!!”',
      author: 'Morebeat',
    },
    {
      image: 'subfocus.jpeg',
      reference:
        "“Since I released Solar System, I've been having trouble finding a good idea. Chordprinter solved this problem for me.”",
      author: 'Sub Focus',
    },
    {
      image: 'skrillex.jpeg',
      reference: "“I've always missed a plugin like Chordprinter in Ableton.”",
      author: 'Skrillex',
    },
  ];

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.navigationButton}
        onClick={handlePrev}
        type="button"
      >
        <Image
          alt="Arrow"
          className={styles.prevIcongImage}
          height={40}
          priority
          quality={10}
          src="./arrow.svg"
          width={40}
        />
      </button>

      <Swiper
        ref={sliderRef}
        autoplay={{ delay: 10_000, pauseOnMouseEnter: true }}
        className={styles.slider}
        loop
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={100}
        speed={1400}
      >
        {testimonialArray.map((slide) => (
          <SwiperSlide key={slide.author}>
            <div className={styles.slideBox}>
              <div className={styles.slideImageBox}>
                <Image
                  alt="Artist Image"
                  className={styles.slideImage}
                  height={450}
                  priority
                  quality={100}
                  src={`/images/testimonial/${slide.image}`}
                  width={450}
                />
              </div>
              <div className={styles.referenceTextBox}>
                <p className={styles.referenceText}>{slide.reference}</p>
              </div>
              <div className={styles.authorBox}>
                <span className={styles.line} />
                <p className={styles.authorText}>{slide.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="next">
        <button
          className={styles.navigationButton}
          onClick={handleNext}
          type="button"
        >
          <Image
            alt="Arrow"
            className={styles.nextIcongImage}
            height={40}
            priority
            quality={10}
            src="./arrow.svg"
            width={40}
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
