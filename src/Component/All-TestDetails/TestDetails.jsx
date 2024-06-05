import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import BookingModal from "../Modal/BookingModal";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const TestDetails = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
    const {user} = useAuth()

    const { data: userData = [],  } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosCommon.get(`/user/${user?.email}`)
            return res.data
        }
    })
    console.log(userData)

    const closeModal = () => {
        setIsOpen(false)        
    }

    const handleStatus = () =>{
        if(userData.status === 'Blocked'){
            setIsOpen(false)
            toast.error('You are Blocked')
        }
        else{
            setIsOpen(true)
        }
    }


    const { data: data = {}, isLoading, refetch } = useQuery({
        queryKey: ['details', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/details/${id}`)
            // console.log(data)
            return data
        }
    })
    console.log(data)

    // ***************
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Pk)

    // const Payment = () => {
    //     const {id} = useParams()

    //     const axiosSecure = useAxiosSecure()
    //     // eslint-disable-next-line no-unused-vars
    //     const { data: paymentData = [], isLoading, refetch } = useQuery({
    //         queryKey: ['payment'],
    //         queryFn: async () => {
    //             const { data } = await axiosSecure.get(`/payment/${id}`)
    //             // console.log(data)
    //             return data
    //         }
    //     })

    // }
    // console.log(paymentData)




    if (isLoading) return <p>Loading....</p>

    return (
        <div className="pt-20 mb-20">
            <div className="lg:w-[1200px]  mx-auto p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                    </div>
                    <a rel="noopener noreferrer" href="#">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={data.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>Date: {data.date}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-semibold dark:text-violet-600">{data.name}</h3>
                        </a>
                        <p className="leading-snug ">{data.details}</p>
                        <p className="leading-snug font-bold">Price:  ${data.price}</p>
                        <div className="flex justify-between items-center">
                            <p className="leading-snug font-bold">Slots: {data.slots}</p>
                            <Link >
                                <button disabled={data.slots === 0} onClick={handleStatus} className="btn bg-blue-500 text-white">Book Now</button>
                            </Link>
                        </div>
                        <BookingModal isOpen={isOpen} closeModal={closeModal} stripePromise={stripePromise} paymentData={data} refetch={refetch}></BookingModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;