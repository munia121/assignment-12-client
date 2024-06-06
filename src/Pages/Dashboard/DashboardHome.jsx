import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: usersData = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data
        }
    })
    console.log(usersData)
    const url = 'https://i.ibb.co/HrRt34V/Blog-Banner-Navigating-the-healthcare-system-in-Canada.webp'
    return (
        <div>
            {
                usersData.role === "admin" ?
                    <div>
                        admin
                    </div>
                    :
                    <div>
                        <div>
                            <div className="hero lg:h-[600px] " style={{ backgroundImage: `url(${url})` }}>

                                <div className="hero-overlay bg-opacity-70"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="">
                                        <div >
                                            <img className="h-24 border border-blue-700 border-4 w-24 rounded-full mx-auto" src={user?.photoURL} alt="" />
                                        </div>
                                        <h3 className="text-4xl">WelCome Your Dashboard</h3>
                                        <p className="mb-5 mt-5 lg:w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default DashboardHome;