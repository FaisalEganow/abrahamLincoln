import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper";

/* team imags */
import team1 from "/public/images/slider/client1.png"
import team2 from "/public/images/slider/client2.png"
import team3 from "/public/images/slider/client3.png"
import team4 from "/public/images/slider/client4.png"
import team5 from "/public/images/slider/client5.png"
import Image from "next/image";


const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    }
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div className="slide-title-sub">
                                <h6>Give them a chance.</h6>
                            </div>
                            <div className="slide-title">
                                <h2>Give The Child The Gift
                                    Of Education.</h2>
                            </div>
                            <div className="slide-text">
                                <p>Quisque bestg quisque cursus tellus dui gravida.</p>
                            </div>
                            <div className="hero-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Join Our Team</Link>
                                <div className="wpo-supporter-img">
                                    <ul className="wpo-supporter-slide">
                                        <Slider {...settings}>
                                            <li data-bs-toggle="tooltip" data-bs-html="true" title="Aliza Anny">
                                                <Image src={team1} alt="" />
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-html="true" title="David Miller">
                                                <Image src={team2} alt="" />
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-html="true" title="Maria Silva">
                                                <Image src={team3} alt="" />
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-html="true" title="Takila Mas">
                                                <Image src={team4} alt="" />
                                            </li>
                                            <li data-bs-toggle="tooltip" data-bs-html="true" title="Jenny Lawba">
                                                <Image src={team5} alt="" />
                                            </li>
                                        </Slider>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                modules={[Autoplay,Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                parallax={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 1800,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-4.jpg'})` }}></div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>

    )
}

export default Hero3;



