import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const UpdatePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());

    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const { data: testData = [], isLoading, refetch } = useQuery({
        queryKey: ['all-tests', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-tests/${id}`)
            // console.log(data)
            return data
        }
    })
    const { name, details, price, slots, date, image } = testData
    console.log(testData)


    const { mutateAsync } = useMutation({
        mutationFn: async ( allTest) => {
            const { data } = await axiosSecure.put(`/allTests/${id}`, allTest)
            return data
        },
        onSuccess: async (data) => {
            console.log(data)
            refetch()
            toast.success('Update Successfully')
            navigate('/dashboard/all-test')
        }
    })


    const handlerSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const details = form.details.value;
        const price = parseInt(form.price.value);
        const slots = parseInt(form.slots.value);
        const date = (startDate).toLocaleDateString();
        const image = form.image.value;


        const testData = { name, details, price, slots, date, image }
        console.log(testData)

        try {
            mutateAsync(testData)

        }
        catch (err) {
            console.log(err)
        }


    }



    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <div className="mx-auto">
                <div className=" p-2  rounded-lg" style={{
                    backgroundImage: `url()`,

                }}>
                    <h2 className="text-3xl font-extrabold text-center"> Update A test</h2>

                    <form onSubmit={handlerSubmit} className=" p-5 lg:w-[800px] mx-auto border-[#f29c94] ">
                        {/* form name and quanity row */}
                        <div className="  ">
                            <div className="">
                                <label className=" form-control ">
                                    <div className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </div>
                                    <input defaultValue={name} type="text" name="name" placeholder="Test name" className="input border-blue-400 input-bordered w-full " />
                                </label>
                            </div>
                            <div className=" ">
                                <div>
                                    <label className=" form-control ">
                                        <div className="label">
                                            <span className="label-text font-bold">Details </span>
                                        </div>
                                        <input defaultValue={details} type="text" name="details" placeholder="Details here" className="input border-blue-400 input-bordered w-full " />
                                    </label>

                                </div>
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="">
                            <div className="">
                                <label className=" form-control">
                                    <div className="label">
                                        <span className="label-text font-bold">Price</span>
                                    </div>
                                    <input defaultValue={price} type="text" name="price" placeholder="Price" className="input border-blue-400 input-bordered w-full " />
                                </label>
                            </div>
                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Slots</span>
                                    </div>
                                    <input defaultValue={slots} type="text" name="slots" placeholder="slots here" className="input border-blue-400 input-bordered w-full " />
                                </label>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className=" ">
                            <div className="">
                                <label className=" form-control ">
                                    <div className="label">
                                        <span className="label-text font-bold"> Date</span>
                                    </div>
                                    <DatePicker className="border w-full border-blue-400 p-3 rounded-lg" selected={startDate} defaultValue={date} minDate={new Date()} endDate={new Date()} onChange={(date) => setStartDate(date)} />

                                </label>
                            </div>
                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Image URL</span>
                                    </div>
                                    <input defaultValue={image} type="text" name="image" placeholder="Image URL" className="input border-blue-400 input-bordered w-full " />
                                </label>
                            </div>
                        </div>
                        {/* **************** */}

                        {/* ******************* */}

                        {/* ***** form photo url */}

                        <input type="submit" value="Add A Test" className="btn btn-block mt-8 bg-sky-600 text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;