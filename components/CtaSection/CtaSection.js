import React from "react";
import Link from "next/link";
import Cta1 from "/public/images/cta/shape-1.png"
import Cta2 from "/public/images/cta/top-icon.png"
import Cta3 from "/public/images/cta/shape-2.png"
import Image from "next/image";
const CtaSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return(
        <section className="wpo-cta-section" > 
            <div className="shape-1">
                <Image src={Cta1} alt="" />
            </div>
            <div className="bg-overlay">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta-wrap">
                                <div className="icon">
                                    <Image src={Cta2} alt="" />
                                </div>
                                <span>Help us raise them up.</span>
                                <h2>Your donation means a lot to them.
                                    Donate what you can.</h2>
                                <Link href="/donate" className="theme-btn-cta" onClick={ClickHandler} >Start Donating Them</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <Image src={Cta3} alt="" />
            </div>
        </section>
    )
}

export default CtaSection;



