import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51Jw25IDatKV8LDzS8WaLq4L20SUwVNKxaJngQ5LEVMgMDF8O2NqbIEmepD5bpw7UNIap46m6YXb2oPOisZG0Sbx00032YE4tae');

const Payment = () => {
    const { id } = useParams()
    const [bookedPackage, setBookedPackage] = useState({})

    useEffect(() => {
        fetch(`https://hero-rider.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setBookedPackage(data))
    }, [id])
    return (
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 shadow-lg p-5">
                    <h4>Package: {bookedPackage?.title}</h4>
                    <h5>ID: {id}</h5>
                    <h3>Amount: $ {bookedPackage?.price}</h3>
                    {bookedPackage.price && <Elements stripe={stripePromise}>
                        <CheckoutForm
                            bookedPackage={bookedPackage}
                        />
                    </Elements>}
                </div>
                <div className="col-md-2"></div>
            </div>
            <Link to='/packages'>
                <button className="btn btn-outline-dark mt-3 me-2">
                    Back to Packages
                </button>
            </Link>
            <Link to='/home'>
                <button className="btn btn-outline-dark mt-3 ms-2">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Payment;