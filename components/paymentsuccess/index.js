import Link from 'next/link'
import React from 'react'

function PaymentSuccess({ status }) {
    return (
        <div className="Donations section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        status == 'success' ?
                            <div className="col-lg-8 col-12">
                                <h2 className='text-center pb-4 text-success'>Your Donation was successful</h2>
                                <p className='text-center'>Thank your for donating to the Abraham Lincoln Foundation, We appreciate your generosity</p>
                            </div> :
                            <div className="col-lg-8 col-12">
                                <h2 className='text-center pb-4 text-danger'>Sorry your payment Failed</h2>
                                <p className='text-center'>Unfortunately, your payment could not be processed. Please check your details or try again later.
                                </p>
                                <div className='text-center'>
                                <Link href="/donate" className="theme-btn my-3">Donate Now</Link>

                                </div>


                            </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess