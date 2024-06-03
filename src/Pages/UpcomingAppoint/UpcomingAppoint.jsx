import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const UpcomingAppoint = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()


    // eslint-disable-next-line no-unused-vars
    const { data:upcomingData = [], isLoading, refetch } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/appoint/${user.email}`)
            // console.log(data)
            return data
        }
    })
    console.log(upcomingData)

    if(isLoading) return <p>Loading...</p>

    return (
        <div>
            upcoming
        </div>
    );
};

export default UpcomingAppoint;