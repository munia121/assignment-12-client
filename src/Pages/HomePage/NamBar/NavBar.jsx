import Container from '../../../Component/Sheard/Container'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { AiOutlineMenu } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../../hooks/useAxiosCommon'
import toast from 'react-hot-toast'
import logo from '../../../assets/logo-white.png'


const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    const axiosCommon = useAxiosCommon()
    // const isAdmin = true


    const { data: userData = [], } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await axiosCommon.get(`/user/${user?.email}`)
            return res.data
        }
    })
    console.log(userData)

    const handleStatus = () =>{
        if(userData.status === 'Blocked'){
            toast.error('Sorry You are Blocked !!!')
        }
    }


    return (
        <div className='fixed w-full bg-white z-10  shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <Link to='/'>
                            <h3 className='text-3xl'>Diagnostic Center</h3>
                            {/* <img src={logo} alt="" /> */}

                        </Link>
                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Become A Host btn */}
                                <div className='hidden md:block'>
                                    {!user && (
                                        <button
                                            disabled={!user}
                                            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                                        >
                                        </button>
                                    )}
                                </div>

                                <div>
                                    <NavLink
                                        to='/alltest'

                                        className={({ isActive }) =>
                                            `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-blue-500  text-white rounded-lg' : 'text-blue-500 border border-blue-500 rounded-lg'
                                            }`
                                        }
                                    >

                                        <span className='mx-4 font-medium'>All Test</span>
                                    </NavLink>
                                </div>
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            src={user && user.photoURL ? user.photoURL : ''}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />
                                    </div>
                                </div>
                            </div>
                            {isOpen && (
                                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>

                                        {user ? (
                                            <>
                                                <div
                                                    onClick={logOut}
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                                >
                                                    Logout
                                                </div>
                                                <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>

                                                    {
                                                        userData.status === 'Active' ? <Link to={'/dashboard'}>Dashboard</Link> : <button onClick={handleStatus}>Dashboard</button>
                                                    }
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <Link
                                                    to='/login'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    to='/signup'
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Sign Up
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar