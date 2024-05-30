import React from "react";
import Link from 'next/link'
import Image from "next/image";

const ServiceCard = ({ img, title, sdescription, slug }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="service-item">
            <div className="icon">
                <Image src={img} alt="img" />
            </div>
            <div className="text">
                <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${slug}`}>{title}</Link></h2>
                <p>{sdescription}</p>
            </div>
        </div>
    )
}


export default ServiceCard;



