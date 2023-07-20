import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);
// console.log(stripePromise)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;

    if (navigation.state === "loading") {
        return <p>Loading ... </p>
    }
    return (
        <div className='m-20'>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 mt-12 '>
                <Elements stripe={stripePromise}>
                    <CheckOut booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;