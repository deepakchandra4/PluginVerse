import React, { useEffect, useState } from 'react';
import {
    Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from './CheckoutPage';
const stripePromise = loadStripe("pk_test_51N5i2kSE8ALNlcfUtgUUY9EuKBo2R5jT2xc1SmEreUZA03N6EJC4ReRHCClCD6XNR75gBTQ5SwC6az8iE18w1OaQ00UeK2oh7O");

const Payment = () => {

    const [clientSecret, setClientSecret] = useState("");

    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

  return (
    <div>
        {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutPage />
                </Elements>
            )}
    </div>
  )
}

export default Payment