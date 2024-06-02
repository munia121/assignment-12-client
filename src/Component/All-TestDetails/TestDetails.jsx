import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const TestDetails = () => {

    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const { data: data = {}, isLoading } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/details/${id}`)
            // console.log(data)
            return data
        }
    })
    console.log(data)

    if (isLoading) return <p>Loading....</p>

    return (
        <div>
            details page
        </div>
    );
};

export default TestDetails;