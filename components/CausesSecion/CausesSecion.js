import React from "react";
import LeftImg from "/public/images/causes/kid4.jpg"
import causesData from "../../api/causes"
import Link from "next/link";
import Image from "next/image";


const CausesSecion = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



    return (
        <section className={"" + props.hclass}>
            <div className="causes-top">
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col-lg-6 col-12">
                            <div className="image">
                                <Image src={LeftImg} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="campaign-card">
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} href="/causes-single/The-Thirsty-are-Waiting-For-Your-Help">Promoting The Safety and Rights of Children</Link></h2>
                                    <p>Promoting the safety and rights of children ensures protection from harm, access to education and healthcare, and empowerment to express themselves, fostering a future where every child can thrive and reach their full potential.</p>
                                </div>
                                <div className="progress-item"> 
                                    <div className="progress">
                                        <div className="bar" style={{ width: '90%' }}>
                                        </div>
                                    </div>
                                    <span className="cssProgress-label">90%</span>
                                    <div className="progres-label">
                                        <div className="label-on">
                                            <p>Raised:<span>$24,808.00</span></p>
                                        </div>
                                        <div className="label-two">
                                            <p>Goal:<span>$26,000.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="causes-wrap">
                <div className="container-fluid">
                    <div className="row">
                        {causesData.slice(0, 3).map((causes, index) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={index}>
                                <div className="causes-item">
                                    <div className="image">
                                        <Image src={causes.image} alt="img" />
                                    </div>
                                    <div className="content">
                                        <h2><Link onClick={ClickHandler} href={'/causes-single/[slug]'} as={`/causes-single/${causes.slug}`}>{causes.title}</Link></h2>
                                        <p>{causes.description}</p>
                                        <div className="progress-item">
                                            <div className="progress">
                                                <div className="bar" style={{ width: `${(causes.raisedAmount / causes.goalAmount) * 100}%` }}>
                                                </div>
                                            </div>
                                                <span className="cssProgress-label">{Math.round((causes.raisedAmount / causes.goalAmount) * 100)}%</span>
                                            <div className="progres-label">
                                                <div className="label-on">
                                                    <p>Raised:<span>{causes.raisedAmount}</span></p>
                                                </div>
                                                <div className="label-two">
                                                    <p>Goal:<span>{causes.goalAmount}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default CausesSecion;
