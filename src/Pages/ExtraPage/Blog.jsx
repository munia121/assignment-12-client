/* eslint-disable react/no-unescaped-entities */

import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import { TiSocialFacebook } from 'react-icons/ti';
import { FaSearch, FaTwitter } from 'react-icons/fa';
import { GrFormView } from 'react-icons/gr';
import { FiCalendar } from 'react-icons/fi';

const Blog = () => {
    return (
        <div>
            <section className="">
                <div className="container mx-auto mb-20 rounded-xl">
                    <div className="lg:flex  gap-20 justify-center">
                        <div className=" lg:w-1/2 shadow-2xl  rounded-xl bg-white p-10">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <div className="news-head"><img className='w-full' src={blog1} alt="website template image" /></div>
                                        <h1 className="news-title text-3xl font-bold my-5"> More than 80 clinical trials launch to test of the coronavirus</h1>
                                        <hr />
                                        <div className="news-text py-5">
                                            <p className='my-5'>At our Diagnostic Center, we are dedicated to providing comprehensive and state-of-the-art diagnostic services to ensure accurate and timely medical assessments for our patients. Our commitment to excellence and patient care is reflected in everything we do, from the advanced technology we use to the compassionate care provided by our experienced staff.</p>
                                            <p>We pride ourselves on being equipped with the latest diagnostic technology. Our center features advanced imaging equipment, including MRI, CT scans, and digital X-rays, allowing for precise and detailed insights into your health. Additionally, our laboratory is stocked with the latest tools and technology to perform a wide array of tests, ensuring that we can diagnose conditions quickly and accurately.</p>
                                            <div className="my-5">
                                                <div className="flex gap-10">
                                                    <div className="">
                                                        <div className=""><img src={blog2} alt="website template image" /></div>
                                                    </div>
                                                    <div className="">
                                                        <div className=""><img src={blog3} alt="website template image" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Our team of board-certified radiologists, pathologists, and technologists are among the best in their fields. With years of experience and specialized training, our experts are adept at interpreting diagnostic results and providing clear, actionable information to your healthcare provider. We work closely with your doctors to ensure that you receive the most accurate diagnosis and the best possible care.</p>
                                            <div className="bg-blue-500 p-7 text-white my-8">
                                                <p>At our Diagnostic Center, patient comfort and convenience are our top priorities. We understand that undergoing diagnostic tests can be stressful, which is why we strive to create a welcoming and reassuring environment. Our friendly staff is always available to answer any questions and guide you through each step of the process.</p>
                                            </div>
                                            <p>Choosing our Diagnostic Center means choosing a facility that is dedicated to excellence in patient care. Our commitment to utilizing the latest technology, our team of highly skilled professionals, and our focus on patient-centered care make us a trusted partner in your health journey. We are here to provide the answers you need and the care you deserve.</p>
                                            <p className='mt-5'>At our Diagnostic Center, patient comfort and convenience are our top priorities. We understand that undergoing diagnostic tests can be stressful, which is why we strive to create a welcoming and reassuring environment. Our friendly staff is always available to answer any questions and guide you through each step of the process.</p>
                                        </div>
                                        <div className="my-10">
                                            <ul className="social-share flex gap-">
                                                <div className='flex items-center bg-cyan-700 p-3'>
                                                    <TiSocialFacebook className='text-white text-xl' />
                                                    <li className=" text-white"><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i><span>Facebook</span></a></li>
                                                </div>
                                                <div className='flex items-center bg-sky-400 p-4'>

                                                    <FaTwitter className='text-white text-xl' />
                                                    <li className=" text-white"><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i><span>Twiter</span></a></li>
                                                </div>
                                                <div className='flex items-center bg-orange-700'>
                                                    <li className=" text-white font-extrabold px-4 "><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i><span>G+</span></a></li>
                                                </div>
                                                <div className='flex items-center bg-cyan-700'>
                                                    <li className=" text-white font-extrabold px-6"><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-facebook"></i><span>in</span></a></li>
                                                </div>

                                            </ul>
                                            <ul className="prev-next">
                                                <li className="prev"><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-angle-double-left"></i></a></li>
                                                <li className="next"><a href="https://www.free-css.com/free-css-templates"><i className="fa fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-4 col-12 lg:w-1/4">
                            <div className="main-sidebar">
                                <div className="shadow-2xl rounded ">
                                    <div className=" bg-white rounded-lg p-16 flex items-center">
                                        <input type="email" className='border p-2 rounded-l-lg' placeholder="Search Here..." />
                                        <div className='bg-blue-600 py-3 px-4 rounded-r-lg'>
                                            <FaSearch className='text-xl text-white'></FaSearch>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-widget category p-16 shadow-2xl rounded-xl mt-5">
                                    <h3 className="title text-2xl font-bold  border-l-4 border-blue-600 px-3">Blog Categories</h3>
                                    <ul className="categor-list space-y-4 mt-3">
                                        <li>Men's Apparel</li>
                                        <li>Women's Apparel</li>
                                        <li>Bags Collection</li>
                                        <li>Accessories</li>
                                        <li>Sun Glasses</li>
                                    </ul>
                                </div>
                                <div className=" p-10 mt-10 rounded-lg shadow-2xl">
                                    <h3 className="title text-xl font-bold">Recent post</h3>
                                    <div className="flex gap-5 my-5">
                                        <div className="image"><img className='w-24 h-20' src={blog1} alt="website template image" /></div>
                                        <div className="content">
                                            <h5 className='font-bold text-gray-500'>We have annnocuced our new product</h5>
                                            <ul className="comment flex gap-4">
                                                <div className='flex items-center'>
                                                    <FiCalendar></FiCalendar>
                                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2024</li>
                                                </div>
                                                <div className='flex items-center'>
                                                    <GrFormView className='text-xl'></GrFormView>
                                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>35</li>
                                                </div>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex gap-5 my-5">
                                        <div className="image"><img className='w-24 h-20' src={blog2} alt="website template image" /></div>
                                        <div className="content">
                                            <h5 className='font-bold text-gray-500'>Top five way for solving teeth problems</h5>
                                            <ul className="comment flex gap-4">
                                                <div className='flex items-center'>
                                                    <FiCalendar></FiCalendar>
                                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 26, 2024</li>
                                                </div>
                                                <div className='flex items-center'>
                                                    <GrFormView className='text-xl'></GrFormView>
                                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>90</li>
                                                </div>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex gap-5 my-5">
                                        <div className="image"><img className='w-24 h-20' src={blog3} alt="website template image" /></div>
                                        <div className="content">
                                            <h5 className='font-bold text-gray-500'>We provide highly bussnis solution</h5>
                                            <ul className="comment flex gap-4">
                                                <div className='flex items-center'>
                                                    <FiCalendar></FiCalendar>
                                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2024</li>
                                                </div>
                                                <div className='flex items-center'>
                                                    <GrFormView className='text-xl'></GrFormView>
                                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>60</li>
                                                </div>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;