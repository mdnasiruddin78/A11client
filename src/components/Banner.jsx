import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider1 from '../assets/carousel1.jpg';
import slider2 from '../assets/carousel2.jpg';
import slider3 from '../assets/carousel3.jpg';
import Slider from './Slider';


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-xl"
            >
                <SwiperSlide>
                    <Slider
                        image={slider1}
                        text='Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider
                        image={slider2}
                        text='Game development is the process of creating a programming
                        , art,
                         audio, user interface, and writing'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slider
                        image={slider3}
                        text='Improve visibility for your brand and products available to businesses Launch a campaign in as little as 5 minutes'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;