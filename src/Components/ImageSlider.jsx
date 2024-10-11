import React from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import slide1 from '../assets/slider/slider1.jpg'
import slide2 from '../assets/slider/slider2.jpg'
import slide3 from '../assets/slider/slider3.jpg'
import slide4 from '../assets/slider/slider4.jpg'
import slide5 from '../assets/slider/slider5.jpg'
import slide6 from '../assets/slider/slider6.jpg'
import slide7 from '../assets/slider/slider7.jpg'
import slide8 from '../assets/slider/slider8.jpg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ImageSlider = () => {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide1} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide7} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide8} alt="slide" />
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
            </Swiper>
        </div>
    )
}

export default ImageSlider