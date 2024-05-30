import React from 'react'
import Services from '../../api/Services';
import Link from 'next/link'

import ins1 from '/public/images/instragram/img-1.jpg'
import ins2 from '/public/images/instragram/img-2.jpg'
import ins3 from '/public/images/instragram/img-3.jpg'
import ins4 from '/public/images/instragram/img-4.jpg'
import ins5 from '/public/images/instragram/img-4.jpg'
import ins6 from '/public/images/instragram/img-6.jpg'
import Image from 'next/image';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-single-sidebar">

            <div className="widget wpo-service-widget">
                <h2>All Services</h2>
                <ul>
                    {Services.slice(0, 6).map((service, Sitem) => (
                        <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="wpo-newsletter-widget widget">
                <h2>Newsletter</h2>
                <p>Join 20,000 Sabscribers!</p>
                <form className="form" onSubmit={SubmitHandler}>
                    <input type="text" placeholder="Email Address" />
                    <button type="submit">Sign Up</button>
                </form>
                <span>By signing up you agree to our <Link href="/contact">Privecy Policy</Link></span>
            </div>
            <div className="widget wpo-instagram-widget">
                <div className="widget-title">
                    <h2>Instagram Shot</h2>
                </div>
                <ul className="d-flex">
                    <li><Image src={ins1} alt="instragram" /></li>
                    <li><Image src={ins2} alt="instragram" /></li>
                    <li><Image src={ins3} alt="instragram" /></li>
                    <li><Image src={ins4} alt="instragram" /></li>
                    <li><Image src={ins5} alt="instragram" /></li>
                    <li><Image src={ins6} alt="instragram" /></li>
                </ul>
            </div>
            
        </div>

    )
}

export default ServiceSidebar;

