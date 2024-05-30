import React from 'react'
import Link from 'next/link'
import abImg1 from '/public/images/about/1.jpg'
import abImg2 from '/public/images/about/1.jpg'

import Image from 'next/image'



const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <div className="wpo-about-left">
                                    <Image src={abImg2} alt="img" />
                                </div>
                                <div className="wpo-about-right">
                                    <Image src={abImg1} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>Welcome to ABRAHAM LINCOLN GARVY FOUNDATION</span>
                                    <h2>You’re the Hope of Others.</h2>
                                </div>
                                <p>
                                Serving as a beacon of strength and resilience in challenging times. Your compassion and dedication inspire those around you, offering comfort and motivation. By leading with kindness and integrity, you create positive change, uplift spirits, and empower others to believe in a brighter future. Your influence and actions truly make a meaningful difference.</p>

                                <div className="about-info-wrap">
                                    <div className="about-info-item">
                                        <div className="about-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-target"></i>
                                            </div>
                                        </div>
                                        <div className="about-info-text">
                                            <h4>Our Mission</h4>
                                            <p>We believe charity is a lifetime investment, transforming lives and building brighter futures.</p>
                                        </div>
                                    </div>
                                    <div className="about-info-item">
                                        <div className="about-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-mountain"></i>
                                            </div>
                                        </div>
                                        <div className="about-info-text">
                                            <h4>Our Vision</h4>
                                            <p>To create a world where compassion and generosity uplift every community.</p>
                                        </div>
                                    </div>
                                </div>

                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Discover More</Link>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

