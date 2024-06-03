/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ paymentData, refetch , closeModal}) => {

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { user } = useAuth()
    const now = new Date()

    // useEffect(() => {
    //     if (totalPrice > 0) {
    //         axiosSecure.post('create-payment-intent', { price: totalPrice })
    //             .then(res => {
    //                 console.log(res.data.clientSecret)
    //                 setClientSecret(res.data.clientSecret)
    //             })
    //     }
    // }, [totalPrice])
    useEffect(() => {
        if (paymentData.price > 0) {
            axiosSecure.post('/create-payment-intent', { price: paymentData.price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [paymentData.price])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // ********
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)


                // now save the payment in the database
                const payment = {
                    transactionId: paymentIntent.id,
                    email: user.email,
                    price: paymentData.price,
                    testName: paymentData.name,
                    appointmentDate: new Date(),
                    time:now.getMinutes()
                    
                }

                // const res = await axiosSecure.post('/payments', payment)
                // console.log('payment save ', res.data)
                // refetch();
                // if (res.data?.paymentResult?.insertedId) {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "Thank You ",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                //     navigate('/dashboard/paymentHistory')
                // }
            }
        }



    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="mt-16">
                    {
                        transactionId && < p className="text-green-600 "> Your Transaction id: {transactionId}</p>
                    }
                    <button className="border font-bold px-6 py-3 rounded-lg bg-blue-500 text-white flex justify-center w-full mt-4" type="submit" disabled={!stripe ||     !clientSecret}>
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;