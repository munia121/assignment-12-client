// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const AddTest = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const { mutateAsync } = useMutation({
        mutationFn: async (testData) => {
            const { data } = await axiosSecure.post(`/allTest`, testData)
            return data
        },
        onSuccess: () => {
            console.log('data saved successfully')
            toast.success('Test data added successfully')
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
        const report = 'Pending'
        

        const testData = { name, details,price, slots, date, image,report }
        console.log(testData)

        try {
            mutateAsync(testData)

        }
        catch (err) {
            console.log(err)
        }


    }





    return (
        <div>
            <div className="mx-auto ">
                <div className=" p-2  rounded-lg" style={{
                    backgroundImage: `url()`,

                }}>
                    <h2 className="text-3xl font-extrabold text-center"> Add A test</h2>

                    <form onSubmit={handlerSubmit} className=" p-10 mt-10 lg:w-[800px] mx-auto border rounded-xl  border-sky-600 shadow-xl ">
                        {/* form name and quanity row */}
                        <div className="  ">
                            <div className="">
                                <label className=" form-control ">
                                    <div className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </div>
                                    <input type="text" name="name" placeholder="Test name" className="input border-sky-600 shadow-xl input-bordered w-full " />
                                </label>
                            </div>
                            <div className=" ">
                                <div>
                                    <label className=" form-control ">
                                        <div className="label">
                                            <span className="label-text font-bold">Details </span>
                                        </div>
                                        <input type="text" name="details" placeholder="Details here" className="input border-sky-600 shadow-xl input-bordered w-full " />
                                    </label>
                                    {/* Display selected option */}
                                    {/* <p>You selected: {selectedOption}</p> */}
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
                                    <input type="text" name="price" placeholder="Price" className="input border-sky-600 shadow-xl input-bordered w-full " />
                                </label>
                            </div>
                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Slots</span>
                                    </div>
                                    <input type="text" name="slots" placeholder="slots here" className="input border-sky-600 shadow-xl input-bordered w-full " />
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
                                    <DatePicker className="border w-full border-sky-600 shadow-xl p-3 rounded-lg" selected={startDate} minDate={new Date()} endDate={new Date()} onChange={(date) => setStartDate(date)} />
                                    {/* <input type="text" name="date" placeholder="date" className="input border-[#f29c94] input-bordered w-full " /> */}
                                </label>
                            </div>
                            <div className="">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text font-bold">Image URL</span>
                                    </div>
                                    <input type="text" name="image" placeholder="Image URL" className="input border-sky-600 shadow-xl input-bordered w-full " />
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

export default AddTest;