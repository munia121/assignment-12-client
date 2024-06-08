import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProfile = () => {
    const axiosSecure = useAxiosSecure()
    const { email } = useParams()
    const navigate = useNavigate()

    // eslint-disable-next-line no-unused-vars
    const { data: userData = [], refetch, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data
        }
    })
    console.log(userData)


    // const { mutateAsync } = useMutation({
    //     mutationFn: async (profileData) => {
    //         const { data } = await axiosSecure.put(`/users/:${userData?.email}`, profileData)
    //         console.log(data)
    //         return data
    //     },
    //     onSuccess: () => {
    //         console.log('data saved successfully')
    //         toast.success('Test data added successfully')
    //         // navigate('/dashboard/profile')

    //     }

    // })


    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const district = form.district.value
        const upazila = form.upazila.value
        const bloodGroup = form.bloodGroup.value
        const image = form.image.value

        console.table({ name, district, upazila, bloodGroup, image })
        const profileData = ({ name, district, upazila, bloodGroup, image })

        const { data } = await axiosSecure.put(`/users/${userData?.email}`, profileData)
        console.log(data)
        if (data.modifiedCount > 0) {
            toast.success('Your profile updated')
            navigate('/dashboard/profile')
        }



    }



    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-4">Update Your Profile </h2>
            <div className="lg:w-[800px] py-10 rounded-xl shadow-2xl  mx-auto lg:flex justify-center mt-20">
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 border border-sky-600 p-5'
                >
                    <div className='space-y-4 w-full'>
                        <div className='flex gap-5'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-bold'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    defaultValue={userData?.name}
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-600 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-bold'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    defaultValue={userData?.email}
                                    readOnly
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-600 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                        </div>

                        {/* ******************************** */}
                        <div className='flex gap-5'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-bold'>
                                    District
                                </label>
                                <input
                                    type='text'
                                    name='district'
                                    defaultValue={userData?.district}
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-600 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm font-bold'>
                                    upazila
                                </label>
                                <input
                                    type='text'
                                    name='upazila'
                                    defaultValue={userData?.upazila}
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-600 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                        </div>



                        {/* ************************************* */}



                        <div className='flex gap-5'>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2 font-bold'>
                                        Blood Group
                                    </label>
                                </div>
                                <input

                                    type='text'
                                    name='bloodGroup'
                                    defaultValue={userData?.bloodGroup}
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-600 bg-gray-200 text-gray-900'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='confirmPass' className='text-sm font-bold mb-2 '>
                                        Image URL
                                    </label>
                                </div>
                                <input
                                    type='text'
                                    name='image'
                                    defaultValue={userData?.image}
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-600 bg-gray-200 text-gray-900'
                                />
                                {/* <p>{passError}</p> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-sky-600 w-full rounded-md font-bold py-3 text-white'
                        >
                            Update Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;