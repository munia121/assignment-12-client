import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AddBanner = () => {
    const handlerBanner = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const title = form.title.value;
        const couponName = form.couponName.value
        const couponRate = parseInt(form.couponRate.value);
        const description = form.description.value;
        const photo = form.photo.value;

        const addBanner = { name, title, couponName, couponRate, description,  photo }
        console.log(addBanner)


        
       
    }


    return (
        <div>
            <div>
                <div className=" p-2  rounded-lg" style={{
                    backgroundImage: `url()`,

                }}>
                    <h2 className="text-3xl font-extrabold text-center"> Add A Banner</h2>

                    <form onSubmit={handlerBanner} className=" p-5  border-[#f29c94] ">
                        {/* form name and quanity row */}
                        <div className="md:flex items-center justify-center mt-10 gap-16">
                            <div className="md:w-1/2">
                                <label className=" form-control ">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input type="text" name="name" placeholder="item name" className="input border-[#f29c94] input-bordered w-full " />
                                </label>
                            </div>
                            <div className="md:w-1/2 ">
                                <div>
                                    <label className=" form-control ">
                                        <div className="label">
                                            <span className="label-text">Title</span>
                                        </div>
                                        <input type="text" name="title" placeholder="Title here" className="input border-[#f29c94] input-bordered w-full " />
                                    </label>
                                    {/* Display selected option */}
                                    {/* <p>You selected: {selectedOption}</p> */}
                                </div>
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mt-10 gap-16">
                            <div className="md:w-1/2">
                                <label className=" form-control">
                                    <div className="label">
                                        <span className="label-text">Coupon Code Name</span>
                                    </div>
                                    <input type="text" name="couponName" placeholder="Coupon Name" className="input border-[#f29c94] input-bordered w-full " />
                                </label>
                            </div>
                            <div className="md:w-1/2">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Coupon Rate</span>
                                    </div>
                                    <input type="text" name="couponRate" placeholder="couponRate" className="input border-[#f29c94] input-bordered w-full " />
                                </label>
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mt-10 gap-16">
                            <div className="md:w-1/2">
                                <label className=" form-control ">
                                    <div className="label">
                                        <span className="label-text"> Description</span>
                                    </div>
                                    <input type="text" name="description" placeholder="description" className="input border-[#f29c94] input-bordered w-full " />
                                </label>
                            </div>
                            <div className="md:w-1/2">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Photo URL</span>
                                    </div>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input border-[#f29c94] input-bordered w-full " />
                                </label>
                            </div>
                        </div>
                        {/* **************** */}

                        {/* ******************* */}

                        {/* ***** form photo url */}

                        <input type="submit" value="Add A Banner" className="btn btn-block mt-8 bg-[#f29c94] text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBanner;