import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/* images */
import img1 from '/public/images/slider/client1.png'
import img2 from '/public/images/slider/client2.png'
import img3 from '/public/images/slider/client3.png'
import img4 from '/public/images/slider/client4.png'
import img5 from '/public/images/slider/client2.png'
import Image from "next/image";



const SupportersSlider = () => {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,

    };

    return (
        <div className="wpo-supporter-img">
            <ul className="wpo-supporter-slide">
                <Slider {...settings}>
                    <li>
                        <Image src={img1} alt="Aliza Anny" />
                    </li>
                    <li>
                        <Image src={img2} alt="David Miller" />
                    </li>
                    <div >
                        <Image src={img3} alt="Maria Silva" />
                    </div>
                    <li>
                        <Image src={img4} alt="Takila Mas" />
                    </li>
                    <li>
                        <Image src={img5} alt="Jenny Lawba" />
                    </li>
                </Slider>
            </ul>
        </div>
    );
};

export default SupportersSlider;
