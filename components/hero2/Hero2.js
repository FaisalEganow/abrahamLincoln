import React from "react";
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import hero1 from '/public/images/slider/3.png'
import hero2 from '/public/images/slider/4.png'
import hero3 from '/public/images/slider/5.png'
import HeroShape1 from '/public/images/slider/shape/1.png'
import HeroShape2 from '/public/images/slider/shape/2.png'
import HeroShape3 from '/public/images/slider/shape/3.png'
import HeroShape4 from '/public/images/slider/shape/4.png'
import HeroShape5 from '/public/images/slider/shape/5.png'
import HeroShape6 from '/public/images/slider/shape/6.png'
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";

const Hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    }
    return (
        <section className="static-hero-s2">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div className="slide-title-sub">
                                <h6>Give them a chance.</h6>
                            </div>
                            <div className="slide-title">
                                <h2>Your Donation Gives
                                    Them a Future.</h2>
                            </div>
                            <div className="slide-text">
                                <p>Lorem ipsum dolor sit amet consectetur. Quisque quisque cursus tellus dui gravida.
                                    Sed at a massa nunc at.</p>
                            </div>
                            <div className="hero-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Discover More</Link>
                                <div className="slide-video-btn">
                                    <VideoModal />
                                    <p>Watch Videos</p>
                                </div>
                            </div>
                            <div className="hero-slider-img">
                                <Image className="bg-img" src={hero1} alt="" />
                                <div className="feda-slider hero-slider-fade">
                                    <Slider {...settings}>
                                        <div className="image-item">
                                            <Image src={hero2} alt="" />
                                        </div>
                                        <div className="image-item">
                                            <Image src={hero3} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-icon-1"><Image src={HeroShape1} alt="" /></div>
            <div className="shape-icon-2"><Image src={HeroShape2} alt="" /></div>
            <div className="shape-icon-3"><Image src={HeroShape3} alt="" /></div>
            <div className="shape-icon-4"><Image src={HeroShape3} alt="" /></div>
            <div className="shape-icon-5"><Image src={HeroShape4} alt="" /></div>
            <div className="shape-icon-6"><Image src={HeroShape1} alt="" /></div>
            <div className="shape-icon-7"><Image src={HeroShape4} alt="" /></div>
            <div className="shape-icon-8"><Image src={HeroShape3} alt="" /></div>
            <div className="shape-icon-9"><Image src={HeroShape5} alt="" /></div>
            <div className="shape-icon-10"><Image src={HeroShape6} alt="" /></div>
            <div className="shape-icon-11"><Image src={HeroShape4} alt="" /></div>
        </section>
    )
}

export default Hero;


