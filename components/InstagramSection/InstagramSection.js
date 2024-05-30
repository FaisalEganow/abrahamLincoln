import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Instagram from "../../api/Instagram";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import instImg1 from "/public/images/instragram/1.jpg"
import instImg2 from "/public/images/instragram/2.jpg"
import instImg3 from "/public/images/instragram/3.jpg"
import instImg4 from "/public/images/instragram/4.jpg"
import instImg5 from "/public/images/instragram/5.jpg"
import instImg6 from "/public/images/instragram/1.jpg"

const images = [
    instImg1,
    instImg2,
    instImg3,
    instImg4,
    instImg5,
    instImg6,
]

const InstagramSection = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    const [open, setOpen] = React.useState(false);

    return (
        <section className={props.hclass}>
            <div className="container-fluid">
                <div className="instagram-wrap">
                    <div className="instagram-slider">
                        <Slider {...settings}>
                            {Instagram.map((item) => (
                                <div className="instagram-card" key={item.id}>
                                    <div className="image">
                                        <Image
                                            src={item.imag}
                                            alt={`Instagram ${item.id}`}
                                            className="img img-responsive"
                                        />
                                        <div className="popup-icon" onClick={() => setOpen(true)}>
                                            <i className="ti-plus"></i>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <span>{item.title}</span>
                                        <h2>{item.subtitle}</h2>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
            />
        </section>
    );
};

export default InstagramSection;
