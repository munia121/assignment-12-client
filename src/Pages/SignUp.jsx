
import { FcGoogle } from 'react-icons/fc'
import { useMutation, useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../hooks/useAxiosCommon'
import { Link, useNavigate } from 'react-router-dom'
import UploadImage from '../Component/UploadImage/UploadImage'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useAxiosSecure from '../hooks/useAxiosSecure'

const SignUp = () => {
    const axiosCommon = useAxiosCommon()
    const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth()
    const [passError, setPassError] = useState('')
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const { data: districtData = [] } = useQuery({
        queryKey: ['district'],
        queryFn: async () => {
            const { data } = await axiosCommon('/district')
            return data
        }
    })

    const { data: upazilatData = [] } = useQuery({
        queryKey: ['upazila'],
        queryFn: async () => {
            const { data } = await axiosCommon('/upazila')
            return data
        }
    })

    const { mutateAsync } = useMutation({
        mutationFn: async (userData) => {
            const { data } = await axiosSecure.post(`/users`, userData)
            return data
        },

    })



    // console.log(districtData)
    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirmPass = form.confirmPass.value
        const district = form.district.value
        const upazila = form.upazila.value
        const bloodGroup = form.bloodGroup.value
        const image = form.image.files[0]
        const status = 'Active'

        if (password !== confirmPass) {
            return setPassError('password not match!!')
        }
        else {
            setPassError('')
        }
        const formData = new FormData()
        formData.append('image', image)

        // console.table({ name, email, password, confirmPass, district, upazila, bloodGroup, image, isActive })
        
        
        
        
        try {
            const image_url = await UploadImage(image)
            console.log(image_url)
            
            const user = await createUser(email, password)
            console.log(user)
            
            await updateUserProfile(name, image_url)
            const userData = { name, email, district, upazila, bloodGroup, image:image_url, status }

            mutateAsync(userData)

            navigate('/')
            toast.success('Sign Up successfully')
        }
        catch (error) {
            console.log(error.message)
        }

    }





    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='flex flex-col  p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to Diagnostic Center</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div className='flex gap-5'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex-1'>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>
                            <div className='w-full '>
                                <label htmlFor='bloodGroup' className='block text-gray-600'>
                                    Blood Group
                                </label>
                                <select
                                    required
                                    className=' border w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                    name='bloodGroup'
                                >
                                    <option value='A+'>A+</option>
                                    <option value='A-'>A-</option>
                                    <option value='B+'>B+</option>
                                    <option value='B-'>B-</option>
                                    <option value='AB+'>AB+</option>
                                    <option value='AB-'>AB-</option>
                                    <option value='O+'>O+</option>
                                    <option value='O-'>O-</option>

                                </select>
                            </div>
                        </div>
                        {/* ******************** */}
                        <div className='flex gap-5'>
                            <div className='w-full '>
                                <label htmlFor='district' className='block text-gray-600'>
                                    District
                                </label>
                                <select
                                    required
                                    className=' border w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                    name='district'
                                >
                                    <option value="select">select</option>
                                    {districtData.map(data => (
                                        <option value={data.name} key={data._id}>
                                            {data.name}
                                        </option>
                                    ))}

                                </select>
                            </div>
                            <div className='w-full '>
                                <label htmlFor='upazila' className='block text-gray-600'>
                                    Upazila
                                </label>
                                <select
                                    required
                                    className=' border w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                                    name='upazila'
                                >   <option value="select">select</option>
                                    {upazilatData.map(data => (
                                        <option value={data.name} key={data._id}>
                                            {data.name}
                                        </option>
                                    ))}

                                </select>
                            </div>
                        </div>


                        {/* ************************************* */}



                        <div className='flex gap-5'>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input

                                    type='password'
                                    name='password'
                                    required
                                    placeholder='must be 6 character'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='confirmPass' className='text-sm mb-2'>
                                        Confirm Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='confirmPass'
                                    // autoComplete='new-password'

                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                />
                                <p>{passError}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            Continue
                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </div>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    )
}

export default SignUp