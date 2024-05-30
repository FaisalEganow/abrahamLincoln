import React from "react";
import Link from "next/link";
import Image from "next/image";



const TeamCard = ({ Timg, Ttitle, Tsubtitle }) => {


    return (
        <div className="volunteer-single" >
            <div className="image">
                <Image src={Timg} alt="" />
            </div>
            <div className="content">
                <h2>{Ttitle}</h2>
                <span>{Tsubtitle}</span>
                <ul>
                    <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                    <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                    <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                </ul>
            </div>
        </div>
    )
}



export default TeamCard


