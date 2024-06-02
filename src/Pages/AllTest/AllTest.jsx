import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const AllTest = () => {
    const axiosCommon = useAxiosCommon()

    // eslint-disable-next-line no-unused-vars
    const { data:testData, isLoading, refetch } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/all-test`)
            // console.log(data)
            return data
        }
    })
    console.log(testData)


    return (
        <div className="pt-44">
            all test here
        </div>
    );
};

export default AllTest;