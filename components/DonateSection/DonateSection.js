'use client'

import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from "axios";
import { toast } from 'react-toastify';

const DonateSection = () => {

    const BASE_URL = 'https://eganow-mc-checkout.vercel.app/api/credentials'
    const [loading, setLoading] = useState(false)

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

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
    function changeCurrency(curr){
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
            customer_id: "4BDFB5479C224EE9",
            callback_url: "http://localhost:3002/payment_status",
            amount: formData.amount,
            ip_address: ip,
            currency
        }
        try {
            const sendRequest = await axios.post(`${BASE_URL}`, postData)
            if (sendRequest?.data?.public_key) {
                const url = `https://eganow-mc-checkout.vercel.app/${sendRequest.data.public_key}`;
                setCheckoutUrl(url);
                onOpenModal()
                setLoading(false)
            }else{
                toast.warning('Something went wrong , Retry')
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        setFormData({})
    };

    return (
        <div className="Donations section-padding">
            <div className="container mw-80">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <h2 className='text-center pb-4'>Make a Donation</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="wpo-donations-amount">

                                <div className='d-flex p-2 gap-2 bg-white mb-4 justify-content-end'>
                                    <button type='button' className={`px-4 py-1 rounded border-0 outline-0 text-secondary  ${currency=='USD'? 'bg-success text-white shadow':''}`} onClick={()=>changeCurrency('USD')}>USD</button>
                                    <button type='button' className={`px-4 py-1 rounded border-0 outline-0 text-secondary ${currency=='GHS'? 'bg-success text-white  shadow':''}`} onClick={()=>changeCurrency('GHS')}>GHS</button>
                                </div>

                                <h2>Your Donation</h2>
                                <input className="form-control" type="text" name="amount" id="text"
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
                                        loading ? 'Processing' : 'Donate now'
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <Modal open={open} 
            onClose={onCloseModal}
             center={true}
             styles={{
                modal:{
                    background: 'none', 
                        padding: 0, 
                        width:'95%',   
                        maxWidth: '100%',
                        height: '90vh',
                        zIndex: '999',
                        boxShadow:'none',
                        overflow:'hidden',
                }
             }}
             >
            
               {checkoutUrl && <iframe src={checkoutUrl} width="100%" height="90%" frameBorder="0"  />}
            </Modal>
           
        </div>
    )
}

export default DonateSection;