import image from '../../assets/img-2 (1).png'
const AboutUs = () => {
    return (
        <div>
            <div className="">
                <div className=" container mx-auto mt-32 mb-32">
                    <div className="lg:flex  gap-20">
                        <div className="col-md-6 ">
                            <div className="">
                                <h4 className="text-2xl text-sky-500">About</h4>
                                <h1 className="text-4xl font-bold mt-3">The Highest provide health care</h1>
                                <p className=" lg:w-[800px] mx-auto mt-10 text-xl">Welcome to Diagnostic Center, your trusted partner in health and wellness. we are committed to providing the highest quality diagnostic services to ensure accurate and timely diagnosis for our patients. Our state-of-the-art facility is equipped with the latest technology and staffed by a team of highly skilled and compassionate professionals. our mission is to enhance the health and well-being of our community by delivering exceptional diagnostic services. We strive to provide accurate, timely, and affordable diagnostic testing to support patients and healthcare providers in making informed medical decisions.</p>
                                <div className="rounded text-white bg-sky-600 w-28 mt-5 text-center p-3">Read More</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_2" >
                                <img className='lg:h-[400px]' src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;