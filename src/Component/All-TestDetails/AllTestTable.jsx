import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit,  } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


const AllTestTable = () => {

    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const { data: testData= [], isLoading, refetch } = useQuery({
        queryKey: ['testData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-tests`)
            // console.log(data)
            return data
        }
    })
    console.log(testData)





    return (
        <div>
            <div>
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Users</h2>

                </div>
                <div className="overflow-x-auto mt-20">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="font-bold text-sky-600 ">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Slots</th>
                                <th>Date</th>
                                <th>Update</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                testData.map((data, idx) => <tr key={data._id}>
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
                                        <button>
                                            <FaEdit className="text-2xl text-blue-500" ></FaEdit>
                                        </button>
                                    </td>
                                    <td>
                                        <button>
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