import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import {  useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const Reservation = () => {

    const axiosCommon = useAxiosCommon()
    const [search, setSearch] = useState('')
    const [update, setUpdate] = useState(true)


    const { data: reservationData = [], refetch } = useQuery({
        queryKey: ['reservation', search],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/reservation?search=${search}`)
            return data
        }
    })

    console.log(reservationData)

    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosCommon.patch(`/update-status/${id}`)
            if(data.modifiedCount){
                setUpdate(!update)
            }
            return data
        },
        onSuccess: async (data) => {
            console.log(data)
            refetch()
        }
    })




    const handleUpdateStatus = async (id) => {
        mutateAsync(id)
        refetch()
    }



    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        console.log(searchValue)
        setSearch(searchValue)

    }

    const handleDeleteUser = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosCommon.delete(`/reservation/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }




    // console.log(reservationData)

    return (
        <div>
            <div className="w-full mx-auto border py-10">
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Reservation</h2>
                </div>
                <form onSubmit={handleSearch} className="flex justify-center mt-5">
                    <input type="text" name="search" placeholder="search by email" className="input input-bordered input-info w-full max-w-xs" />
                    <input type="submit" value="Search" className="btn" />

                </form>
                <div className="overflow-x-auto mt-20">
                    <table className="table ">
                        {/* head */}
                        <thead className="font-bold text-sky-600 ">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Report</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                reservationData?.map((data, idx) => <tr key={data._id}>
                                    <th>{idx + 1}</th>
                                    <td >{data.testName}</td>

                                    <td>
                                        {data.email}
                                    </td>
                                    <td >
                                        <button className="btn" style={{ color: data.report === 'Pending' ? 'red' : 'green' }} onClick={() => handleUpdateStatus(data._id)}>
                                            {data.report}
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(data)}>
                                            <RiDeleteBinLine className="text-2xl text-blue-500" />
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

export default Reservation;