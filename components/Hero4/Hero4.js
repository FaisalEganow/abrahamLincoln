import React, { useEffect } from "react";
import Link from 'next/link'

import hero1 from '/public/images/slider/slide-5.png'
import hero2 from '/public/images/slider/slide-6.png'
import hero3 from '/public/images/slider/slide-7.png'
import HeroShape1 from '/public/images/slider/shape/1.png'
import HeroShape2 from '/public/images/slider/shape/2.png'
import HeroShape3 from '/public/images/slider/shape/3.png'
import HeroShape4 from '/public/images/slider/shape/4.png'
import HeroShape5 from '/public/images/slider/shape/5.png'
import HeroShape6 from '/public/images/slider/shape/6.png'
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";

const Hero4 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    useEffect(() => {
        const rotate = () => {
            const lastChild = document.querySelector('.manroted div:last-child').cloneNode(true);
            document.querySelectorAll('.manroted div').forEach((div) => div.classList.remove('firstSlide'));
            document.querySelector('.manroted div:last-child').remove();
            document.querySelector('.manroted').prepend(lastChild);
        };

        const intervalId = setInterval(rotate, 4000);

        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <section className="static-hero-s4">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div  className="slide-title">
                                <h2>Give them a fresh Outlook on life.</h2>
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
                                <div className="hero-slider-wrap">
                                    <div className="manroted">
                                        <div className="box1">
                                            <Image src={hero1} alt="" />
                                        </div>
                                        <div className="box2">
                                            <Image src={hero2} alt="" />
                                        </div>
                                        <div className="box3 ">
                                            <Image src={hero3} alt="" />
                                        </div>
                                    </div>
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

export default Hero4;


