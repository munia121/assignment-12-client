import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import '@smastrom/react-rating/style.css'


const Personalized = () => {
    const axiosCommon = useAxiosCommon()

    // eslint-disable-next-line no-unused-vars
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
            <section className="my-20">
                <div>
                    <Swiper 
                     autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">

                        {
                            personalizeData.map(data => <SwiperSlide
                                key={data._d}
                            >
                                <div className="hero lg:h-[500px]" style={{ backgroundImage: `url(${data.image})` }}>
                                    <div className="hero-overlay bg-opacity-70"></div>
                                    <div className="hero-content text-center text-neutral-content">
                                        <div className="">
                                            <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
                                            <h1 className="mb-5 text-3xl font-bold">{data.type}</h1>
                                            <p className="mb-5 mt-5 lg:w-[800px]">{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Personalized;