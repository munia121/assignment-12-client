import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import TestFeaturedCard from "./TestFeaturedCard";

const TestFeatured = () => {
    const axiosCommon = useAxiosCommon()

    const { data: featureData = [] } = useQuery({
        queryKey: ['test-features'],
        queryFn: async () => {
            const { data } = await axiosCommon('/test-features')
            return data
        }
    })

    console.log(featureData)

    return (
        <div className="container mx-auto ">
            <div className="text-center mt-44 mb-32">
                <h2 className="text-4xl font-bold">Latest from our blog</h2>
                <p className="lg:w-[1000px] mx-auto mt-3">In today’s fast-paced healthcare environment, efficiency and accuracy are paramount. Discover how innovative management systems are transforming diagnostic centers, improving patient care, and enhancing operational efficiency. Read more to explore the latest trends and technologies that are setting new standards in the industry.</p>
            </div>

            <div className="  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {
                    featureData.map(data => <TestFeaturedCard key={data._id} data={data}></TestFeaturedCard>)
                }
            </div>
        </div>
    );
};

export default TestFeatured;