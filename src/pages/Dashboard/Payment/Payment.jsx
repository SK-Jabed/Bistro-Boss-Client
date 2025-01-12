import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
      <div>
        <SectionTitle
          heading="Payment"
          subHeading="At a Glance!"
        ></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
      </div>
    );
};

export default Payment;