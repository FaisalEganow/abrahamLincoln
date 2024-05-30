import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import CausesSectionS2 from '../../components/CausesSecionS2/CausesSecionS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from "/public/images/logo.svg"

const CausePagetwo = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'wpo-site-header-s5'} />
            <PageTitle pageTitle={'Causes'} pagesub={'Causes'} />
            <CausesSectionS2 />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CausePagetwo;

