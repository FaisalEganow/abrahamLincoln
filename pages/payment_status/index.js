'use client'

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo1.png'
import DonateSection from '../../components/DonateSection/DonateSection';
import PaymentSuccess from '../../components/paymentsuccess';
import { useSearchParams } from 'next/navigation'






const PaymentStatus = () => {
    const searchParams = useSearchParams()
 
    const status = searchParams.get('status')

    console.log(status);



    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'Donate'} pagesub={'Status'} />
            <PaymentSuccess status={status}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}

export default PaymentStatus;