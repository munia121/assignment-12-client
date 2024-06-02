import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllTestTable = () => {

    const axiosSecure = useAxiosSecure()
    // eslint-disable-next-line no-unused-vars
    const { data: testData, isLoading, refetch } = useQuery({
        queryKey: ['testData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-test`)
            // console.log(data)
            return data
        }
    })
    console.log(testData)


    return (
        <div>

        </div>
    );
};

export default AllTestTable;