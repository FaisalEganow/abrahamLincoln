'use client'

import React, { useState, useEffect, Suspense } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { MdCancel } from "react-icons/md";
import { Router, useRouter } from 'next/router';

const customStyles = {
    content: {
        top: "52%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        padding: "0", // Remove padding
        backgroundColor: "transparent", // Make background transparent
        border: "none", // Remove border
        overflow: "hidden", // Ensure no overflow
        zIndex: 999999,
        width: "100%", // Adjust as necessary
        height: "90%", // Adjust as necessary
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent background
        zIndex: 999999, // Higher zIndex value for overlay
    },
};

const DonateSection = () => {


    const router = useRouter()
    const BASE_URL = 'https://eganow-mc-checkout.vercel.app/api/credentials'
    const [loading, setLoading] = useState(false)


    // new modal


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }



    // new modal

    const [ip, setIP] = useState("");
    const [checkoutUrl, setCheckoutUrl] = useState('');
    const [currency, setCurrency] = useState('GHS');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        amount: ""

    });

    // function to setCurrency
    function changeCurrency(curr) {
        setCurrency(curr)

    }

    const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData();
    }, [])

    useEffect(() => {
        const handlePaymentMessage = (event) => {
          if (event.data === "successful") {
            router.push("/payment_status?status=success");
          } else if (event.data === "failed") {
            router.push("/payment_status?status=failed");
          }
        };
        window.addEventListener("message", handlePaymentMessage);
    
        return () => {
          window.removeEventListener("message", handlePaymentMessage);
        };
    }, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const postData = {
            payer: {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                mobile_number: formData.phone,
            },
            customer_id: "59B4F9195EC84D99",
            callback_url: "http://localhost:3000/payment_status",
            amount: formData.amount,
            ip_address: ip,
            currency
        }
        try {
            const sendRequest = await axios.post(`${BASE_URL}`, postData)
            if (sendRequest?.data?.public_key) {
                const url = `https://eganow-mc-checkout.vercel.app/${sendRequest.data.public_key}`;
                setCheckoutUrl(url);
                openModal()
                setLoading(false)
            } else {
                toast.warning('Something went wrong , Retry')
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };

    return (
        <Suspense fallback={<p>...loading</p>}>
            <div className="Donations section-padding">
                <div className="container mw-80">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <h2 className='text-center pb-4'>Make a Donation</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="wpo-donations-amount">

                                    <div className='d-flex p-2 gap-2 bg-white mb-4 justify-content-end'>
                                        <button type='button' className={`px-4 py-1 rounded border-0 outline-0 text-secondary  ${currency == 'USD' ? 'bg-success text-white shadow' : ''}`} onClick={() => changeCurrency('USD')}>USD</button>
                                        <button type='button' className={`px-4 py-1 rounded border-0 outline-0 text-secondary ${currency == 'GHS' ? 'bg-success text-white  shadow' : ''}`} onClick={() => changeCurrency('GHS')}>GHS</button>
                                    </div>

                                    <h2>Your Donation</h2>
                                    <input className="form-control" type="text" required name="amount" id="text"
                                        placeholder="Enter Donation Amount" value={formData.amount} onChange={handleInputChange} />
                                </div>
                                <div className="wpo-donations-details">
                                    <h2>Details</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input className="form-control" required type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input className="form-control" required type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                            <input className="form-control" required type="text" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input className="form-control" type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="submit-area">
                                    <button type="submit" disabled={loading} className="theme-btn submit-btn">
                                        {
                                            loading ? 'Processing...' : 'Donate now'
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div>
                    <Modal
                        className=""
                        onClick={() => alert("sdf")}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className=" text-center pb-md-4">
                            <MdCancel
                                onClick={closeModal}
                                color='red'
                                size={24}
                                className=" text-center shadow-lg  modal-close "
                            />
                        </div>
                        <iframe
                            src={checkoutUrl}
                            style={{
                                width: "100%",
                                height: "100%",
                                margin: "0",
                                backgroundColor: "transparent", // Semi-transparent background
                            }}
                        ></iframe>
                    </Modal>
                </div>

            </div>
        </Suspense>
    )
}

export default DonateSection;