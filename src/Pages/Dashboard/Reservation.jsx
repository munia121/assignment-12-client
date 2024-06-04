import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const Reservation = () => {

    const axiosCommon = useAxiosCommon()

    const { data: reservationData = [], refetch } = useQuery({
        queryKey: ['reservation'],
        queryFn: async () => {
            const { data } = await axiosCommon('/reservation')
            return data
        }
    })

    console.log(reservationData)

    const handleUpdateStatus = async (id) => {
        const { res } = await axiosCommon.patch(`/update-status/${id}`)
        refetch()
        console.log(res)
    }



    console.log(reservationData)

    return (
        <div>
            <div className="lg:w-[600px] mx-auto border">
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Reservation</h2>

                </div>
                <form  className="flex justify-center mt-5">
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
                                <th>Status</th>

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
                                        <button style={{ color: data.report === 'Pending' ? 'red' : 'green' }} onClick={() => handleUpdateStatus(data._id)}>
                                            {data.report}
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