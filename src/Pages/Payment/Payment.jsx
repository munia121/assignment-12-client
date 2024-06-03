import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Pk)

const Payment = () => {
    const {id} = useParams()

    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const { data: paymentData = [], isLoading, refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payment/${id}`)
            // console.log(data)
            return data
        }
    })
    // console.log(paymentData)


    return (
        <div className="lg:w-[500px] lg:h-[250px] border mx-auto mt-10 mb-20 p-10 rounded-lg">
            <Elements stripe={stripePromise}>
                <CheckoutForm paymentData={paymentData} refetch={refetch}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;