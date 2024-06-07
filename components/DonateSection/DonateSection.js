'use client'

import React, { useState,useEffect } from 'react';

import Visa1 from "/public/images/checkout/img-1.png"
import Visa2 from "/public/images/checkout/img-2.png"
import Visa3 from "/public/images/checkout/img-3.png"
import Visa4 from "/public/images/checkout/img-4.png"
import Image from 'next/image';
import axios from "axios";

const DonateSection = () => {

    const BASE_URL = 'https://eganow-mc-checkout.vercel.app/api/credentials'
    const [loading,setLoading] = useState(false)

    const [ip, setIP] = useState("");
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        amount: ""

    });

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, [])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        const postData = {
            payer : {
                first_name : formData.firstName,
                last_name : formData.lastName,
                email : formData.email,
                mobile_number : formData.phone,
            },
            customer_id : "4BDFB5479C224EE9",
            callback_url : "https://localhost:3000",
            amount : formData.amount,
            ip_address : ip
        }
        try {
            const sendRequest = await axios.post(`${BASE_URL}` ,postData)
            if(sendRequest.data.public_key){
                window.location.href = `https://eganow-mc-checkout.vercel.app/${sendRequest.data.public_key}`
                setLoading(false)

            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        // console.log(postData)
        // setFormData({})
    };

    return (
        <div className="Donations section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <h2 className='text-center pb-4'>Make a Donation</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="wpo-donations-amount">
                                <h2>Your Donation</h2>
                                <input className="form-control" type="text" name="amount" id="text"
                                    placeholder="Enter Donation Amount" value={formData.amount} onChange={handleInputChange} />
                            </div>
                            <div className="wpo-donations-details">
                                <h2>Details</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input className="form-control" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input className="form-control" type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                        <input className="form-control" type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input className="form-control" type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="submit-area">
                                <button type="submit" disabled={loading} className="theme-btn submit-btn">
                                    {
                                        loading ? 'Processing' : 'Donate now'
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateSection;