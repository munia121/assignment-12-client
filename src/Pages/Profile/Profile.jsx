
import { useMutation, useQuery } from '@tanstack/react-query'
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


const Profile = () => {
    // const { userData, loading } = useAuth() || {}
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [userData, setUserData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
            })
    }, [user?.email])
    console.log(userData)
    // const { data: userData = [], refetch, isLoading } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/user/${user?.email}`)
    //         return res.data
    //     }
    // })
    // console.log(userData.name)








    // const { mutateAsync } = useMutation({
    //     mutationFn: async (profileData) => {
    //         const { data } = await axiosSecure.put(`/users/:${userData?._id}`, profileData)
    //         console.log(data)
    //         return data
    //     },
    //     onSuccess: () => {
    //         console.log('data saved successfully')
    //         toast.success('Test data added successfully')
    //         navigate('/dashboard/profile')

    //     }

    // })


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     console.log('event')
    //     const form = e.target
    //     const name = form.name.value
    //     // const image = form.image.value
    //     const profileData = { name }
    //     console.log('profile data', profileData)
    //     const { data } = await axiosSecure.put(`/users/${userData?.email}`, profileData)
    //     console.log(data)



    // }



    return (
        <div className='flex justify-center items-center h-screen'>

            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src={userData.image}
                    className='w-full mb-4 rounded-t-lg h-44'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={userData?.image}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-sky-600 '
                        />
                    </a>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        Status: {userData?.status}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name :
                                <span className='font-bold text-black '>
                                    {userData?.name}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email :
                                <span className='font-bold text-black '>{userData?.email}</span>
                            </p>
                            <Link to={`/dashboard/updateProfile/${userData?.email}`}>
                                <button className='font-bold bg-sky-600  text-white px-4 py-2 rounded-lg'>Update Your Profile</button>
                            </Link>

                            {/* update modal */}
                            {/* <div>

                                <button className='bg-sky-600 px-10 font-bold  py-2 rounded-lg text-white cursor-pointer hover:bg-sky-300 block mb-1' onClick={() => document.getElementById('my_modal_1').showModal()}>Update Your Profile</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <div className='text-center'>
                                            <h3 className="font-bold text-lg">Hello User!</h3>
                                            <p className="py-2 font-bold">Please update your profile</p>
                                        </div>
                                        <form onSubmit={handleSubmit} className='mt-4'>
                                            <div className='flex justify-center gap-5'>
                                                <label className="form-control ">
                                                    <div className="label">
                                                        <span className="label-text">Name</span>
                                                    </div>
                                                    <input type="text" name="name" defaultValue={userData.name} className="input border-[#f29c94] input-bordered " />
                                                </label>

                                                <label className="form-control ">
                                                    <div className="label">
                                                        <span className="label-text">Photo URL</span>
                                                    </div>
                                                    <input type="text" name="image" defaultValue={userData.image} className="input border-[#f29c94] input-bordered " />
                                                </label>
                                            </div>
                                            <input type="submit" value="submit" />

                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                               
                                                <button type='submit' className="px-5 py-2 rounded bg-sky-600 text-white">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile