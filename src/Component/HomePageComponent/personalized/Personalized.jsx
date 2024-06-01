import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import PersionalizeCard from "./PersionalizeCard";

const Personalized = () => {
    const axiosCommon = useAxiosCommon()

    const { data: personalizeData = [], refetch } = useQuery({
        queryKey: ['personalizedData'],
        queryFn: async () => {
            const res = await axiosCommon.get('/personalized')
            return res.data
        }
    })

    console.log(personalizeData)

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-10 mt-44">
                {
                    personalizeData.slice(0, 3).map(data => <PersionalizeCard key={data._id} data={data}></PersionalizeCard>)
                }
            </div>
                <div className="text-center mt-8">
                    <button className="border border-sky-600 px-6 p-3 rounded-lg">See More</button>
                </div>
        </div>
    );
};

export default Personalized;