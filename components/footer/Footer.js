import Link from 'next/link'
import Logo from "/public/images/logo1.png"
import Services from '../../api/Services';
import Image from 'next/image';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {


    return (
        <footer className="wpo-site-footer">
            <div className="wpo-top-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="widget">
                                <div className="logo">
                                    <Link className="navbar-brand" href="/home">
                                        <Image src={Logo} alt="" className='w-25' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="widget">
                                <div className="social">
                                    <ul>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-facebook-app-symbol"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href="/">
                                                <i className="fi flaticon-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="widget-title">
                                    <h3>About Abraham Lincoln</h3>
                                </div>
                                <p>Dedicated to promoting education, equality, and social justice. Inspired by Lincoln's legacy, we strive to empower communities through initiatives that foster learning, inclusivity, and support for underserved populations. Join us in making a lasting impact and creating a brighter future for all.</p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/bout">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Donate</Link></li>
                                    <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Mission & Vision</h3>
                                </div>
                                <ul>
                                    {Services.map((service, sky) => (
                                        <li key={sky}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                        <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <p>Contact us on for any enquiries</p>
                                <ul className="info">
                                    <li className='d-flex'><i className="flaticon-email"></i> abrahamyeswecan@ymail.com</li>
                                    <li><i className="flaticon-telephone"></i>+233 243 050 630</li>
                                    <li><i className="flaticon-location"></i> 19 Thordge Shiloh,Hawai 863</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>&copy; 2024 <Link onClick={ClickHandler} href="/">Abraham Lincoln</Link>. All rights reserved.</li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="link">
                                <ul>
                                    {/* <li><Link onClick={ClickHandler} href="/">Privace & Policy</Link></li> */}
                                    {/* <li><Link onClick={ClickHandler} href="/">Terms</Link></li> */}
                                    {/* <li><Link onClick={ClickHandler} href="/about">About us</Link></li> */}
                                    {/* <li><Link onClick={ClickHandler} href="/contact">FAQ</Link></li> */}
                                    {/* <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;




