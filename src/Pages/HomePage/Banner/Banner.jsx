import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";

const Banner = () => {

    const axiosCommon = useAxiosCommon()
    const { data: bannerData, isLoading, refetch } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/bannerDisplay`)
            // console.log(data)
            const filter = data.filter(banner => banner.isActive)
            return filter[0]
        }
    })

    console.log(bannerData)

    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <div className="hero lg:h-[700px]" style={{ backgroundImage:`url(${bannerData.photo})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">{bannerData.title}</h1>
                        <h1 className="mb-5 text-3xl font-bold">{bannerData.name}</h1>
                        <div className="flex justify-center gap-20">
                            <p className="font-bold">Coupon Code : <span className="text-sky-600">{bannerData.couponName}</span></p>
                            <p className="font-bold">Discount Rate : <span className="text-sky-600">{bannerData.couponRate} %</span></p>
                        </div>
                        <p className="mb-5 mt-5 lg:w-[800px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                       
                        <button className="btn btn-primary font-bold text-lg">All Test</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;