import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderSearchForm from '../HeaderSearchForm/HeaderSearchForm';
import HeaderProfileForm from '../HeaderProfileForm/HeaderProfileForm';
import Image from 'next/image';

const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header">
            <div className={"wpo-site-header " + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-3 col-md-5 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} 
                                    className="navbar-brand" href="/" >
                                        <Image src={props.Logo}
                                        style={{width:'100px'}}
                                        alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/">Main Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Home Style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Home Style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-4">Home Style 4</Link></li>
                                            </ul> */}
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/about">About</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                                <li><Link onClick={ClickHandler} href="/testimonial">Testimonial</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Causes</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/causes">Causes Style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/causes-s2">Causes Style 2</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/causes-s3">Causes Style 3</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/causes-single/The-Thirsty-are-Waiting-For-Your-Help">Causes Single</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Volunteer</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/volunteer">Volunteer</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/volunteer-single">Volunteer Single</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/service">Services</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/Kids-Education">Services Single</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul> */}
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/donate">Donate</Link></li>
                                       
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Your-clothes-give-them-a-warm-hug.">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Your-clothes-give-them-a-warm-hug.">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Your-clothes-give-them-a-warm-hug.">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li> */}
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-2">
                                <div className="header-right">
                                    {/* <HeaderSearchForm />
                                    <HeaderProfileForm /> */}
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/donate">
                                            <span className="mobile">
                                                <i className="fi fa fa-heart"></i>
                                            </span>
                                            <span className="text">Donate Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;


