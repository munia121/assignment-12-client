import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";


const UpcomingAppoint = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    


    // eslint-disable-next-line no-unused-vars
    const { data: upcomingData = {}, isLoading, refetch } = useQuery({
        queryKey: ['appoint', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/appoint/${user.email}`)
            // console.log(data)
            return data
        }
    })
    console.log(upcomingData.name)


    const handleDelete = (data) => {
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

                axiosSecure.delete(`/appoints/${data._id}`)
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




    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <div>
                <div className="flex justify-evenly">
                    <h2 className="text-3xl">Upcoming Appointments :</h2>

                </div>
                <div className="overflow-x-auto mt-20">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="font-bold text-sky-600 ">
                            <tr>
                                <th>No</th>
                                <th>Test Name</th>
                                <th>Appointment date</th>
                                <th>Appointment Time</th>
                                <th>Report</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                upcomingData?.map((data, idx) => <tr key={data._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        {data.testName}
                                    </td>

                                    <td>
                                        {data.appointmentDate}
                                        
                                    </td>
                                   
                                   
                                    <td>
                                        {data.time} 
                                    </td>
                                    <td>
                                        {data.report}
                                    </td>
                                    
                                    <td>
                                        <button onClick={() =>handleDelete(data)}>
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

export default UpcomingAppoint;