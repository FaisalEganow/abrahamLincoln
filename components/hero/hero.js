import React, { useState } from "react";
import VideoModal from "../ModalVideo/VideoModal";
import SupportersSlider from "./SupportersSlider";

import Image1 from '/public/images/slider/kid6.jpg';
import Image2 from '/public/images/slider/kid8.jpg';
import Videobg from '/public/images/slider/video.png';
import ShapeBg from '/public/images/slider/stick-man.svg';
import Image from "next/image";
import Link from "next/link";


const Hero = () => {

    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-content">
                            <div className="slide-title-sub">
                                <span>Give them a chance.</span>
                            </div>
                            <div className="slide-title">
                                <h2>Believe in The Better Future of Others.</h2>
                            </div>
                            <div className="slide-text">
                                <p>By supporting their dreams and aspirations. Together, we can create opportunities, provide resources, and inspire hope, paving the way for brighter, more fulfilling lives for everyone.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div data-swiper-parallax="500" className="slide-video-content">
                                {/* <div className="slide-video-img">
                                    <Image src={Videobg} alt="img"  />
                                    <VideoModal />
                                </div> */}
                                <div className="slide-video-text">
                                    <h4 style={{color:"#7bc676"}}>Join Our Upcoming Campaign</h4>
                                    <p>Make an impact one piece of clothing at a time to need of others.</p>
                                    <Link href="/donate" className="theme-btn my-3">Donate Now</Link>
                                </div>
                            </div>
                            <div className="charius-pic">
                                <div className="charius-pic-main">
                                    <Image src={Image1} alt="img" />
                                </div>
                                <div className="charius-inner">
                                    <Image src={Image2} alt="img" />
                                </div>

                                <div className="wpo-supporter">
                                    <div className="wpo-supporter-text">
                                        <div className="icon"><i>
                                            <Image src={ShapeBg} alt="img" /></i>
                                        </div>
                                        <div className="content">
                                            <h3>120+</h3>
                                            <p>Happy Volunteer</p>
                                        </div>
                                    </div>
                                    {/* <SupportersSlider /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;