import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FiDownload } from "react-icons/fi";

const TestResult = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    // eslint-disable-next-line no-unused-vars
    const { data: testResult = [], isLoading, refetch } = useQuery({
        queryKey: ['test-result', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/test-result/${user.email}`)
            // console.log(data)
            return data
        }
    })
    console.log(testResult)
    const url = 'https://i.ibb.co/Y0m6qj2/images-2.jpg'

    return (
        <div>
            <div className="hero lg:h-[400px] " style={{ backgroundImage: `url(${url})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h3 className="text-4xl">All Your Test Reports are stored here</h3>
                        <p className="mb-5 mt-5 lg:w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
            <div className="lg:w-[700px] mx-auto">
                <div className="w-full mx-auto border border-sky-600 mt-10">
                    <div className="flex justify-evenly">
                        <h2 className="text-3xl"></h2>
                    </div>
                    <div className="overflow-x-auto mt-2 ">
                        <table className="table ">
                            {/* head */}
                            <thead className="font-bold text-sky-600 bg-sky-300 text-lg">
                                <tr className="text-xl">
                                    <th className="">No</th>
                                    <th> Test Name</th>
                                    <th>Email</th>
                                    <th>Download</th>
                                   
                                </tr>
                            </thead>
                            <tbody className="text-xl">
                                {/* row 1 */}
                                {
                                    testResult?.map((test, idx) => <tr key={test._id}>
                                        <th>{idx + 1}</th>
                                        <td >{test.testName}</td>

                                        <td>
                                            {test.email}
                                        </td>
                                        <td className="">
                                            <button className="ml-10">
                                                <FiDownload />
                                            </button>
                                        </td>


                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestResult;