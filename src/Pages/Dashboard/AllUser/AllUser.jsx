import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AllUser = () => {
    const [modalData, setModalData] = useState(null);
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const { data: usersData = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data
        }
    })

    console.log(usersData)


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleStatus = (user) => {
        axiosSecure.patch(`/user-status/${user._id}`)
            .then(res => {
                console.log(res.data)
                refetch()

            })
    }


    const handleShowModal = (user) => {
        setModalData(user);
        document.getElementById('my_modal_3').showModal();
    };



    return (
        <div>
            <div>
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Users</h2>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table w-full border mt-10">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-sm  ">
                                                <FaUsers className=" text-2xl "></FaUsers>
                                            </button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleStatus(user)} className="btn">
                                            {user.status}
                                        </button>
                                    </td>
                                    <td>
                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="bg-sky-600 px-3 py-1 text-white rounded-md" onClick={() => handleShowModal(user)}>See Info</button>
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                {modalData && (

                                                    <div className="space-y-3 text-lg">
                                                        <div>
                                                            <h3 className="font-bold text-3g">Name: {modalData.name}</h3>
                                                            <p className=""><samp className="font-bold">Email:</samp> {modalData.email}</p>
                                                        </div>
                                                       
                                                            <p><samp className="font-bold">District:</samp> {modalData.district}</p>
                                                            <p><samp className="font-bold">Upazila:</samp> {modalData.upazila}</p>
                                                       
                                                        
                                                            <p><samp className="font-bold">Blood Group:</samp> {modalData.bloodGroup}</p>
                                                            <p className=""><samp className="font-bold">Status:</samp> : <span className={`${modalData.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}> {modalData.status}</span></p>
                                                        
                                                    </div>

                                                )}
                                            </div>
                                        </dialog>

                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;