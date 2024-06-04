import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit, } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";



import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AllTestTable = () => {

    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const { data: testData = [], isLoading, refetch } = useQuery({
        queryKey: ['all-test'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-tests`)
            // console.log(data)
            return data
        }
    })
    console.log(testData)






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

                axiosSecure.delete(`/all-test/${data._id}`)
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



if(isLoading) return <p>Loading.....</p>




    return (
        <div>
            <div className="border">
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Test</h2>

                </div>
                <div className="overflow-x-auto mt-20">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="font-bold text-sky-600 border">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Slots</th>
                                <th>Date</th>
                                <th>Edit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                testData?.map((data, idx) => <tr key={data._id}>
                                    <th>{idx + 1}</th>
                                    <td >{data.name}</td>

                                    <td>
                                        ${data.price}
                                    </td>
                                    <td>
                                        {data.slots}
                                    </td>
                                    <td>
                                        {data.date}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateTest/${data._id}`}>
                                            <FaEdit className="text-2xl text-blue-500" ></FaEdit>
                                        </Link>
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

export default AllTestTable;