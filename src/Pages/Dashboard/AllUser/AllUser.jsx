import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {  FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    console.log(users)


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
                                        <button onClick={()=>handleStatus(user)} className="btn">
                                            {user.status}
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-ghost font-bold btn-xs">
                                            See Info
                                        </button>
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