import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const AllBanner = () => {

    const axiosSecure = useAxiosSecure()
    const [banners, setBanners] = useState([]);


    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/banner`)
            // console.log(data)
            setBanners(data)
            return data
        }
    })
    console.log(banners)

   

    const toggleBannerStatus = async (banner) => {
        try {
         
          const newStatus = !banner.isActive;
          console.log(newStatus)
          const response = await axiosSecure.patch(`/banners/${banner._id}`, {
            isActive: newStatus,
          });
      
          console.log(response.data);
          if (response.data.modifiedCount > 0) {
            setBanners(banners.map(b =>
              b._id === banner._id ? { ...b, isActive: newStatus } : b
            ));
          }
        } catch (error) {
          console.error('Error updating banner status:', error);
        }
      };
      




    return (
        <div>
            <div>
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Users</h2>

                </div>
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Coupon Name</th>
                                <th>Coupon rate</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                banners.map((banner, idx) => <tr key={banner._id}>
                                    <th>{idx + 1}</th>
                                    <td>{banner.name}</td>

                                    <td>
                                        {banner.title}
                                    </td>
                                    <td>
                                        {banner.couponName}
                                    </td>
                                    <td>
                                        {banner.couponRate}
                                    </td>
                                    <td>
                                        <button className="btn" 
                                         style={{ color: banner.isActive ? 'green' : 'red' }}
                                        onClick={()=>toggleBannerStatus(banner)}>
                                            {banner.isActive ? 'Active' : 'Inactive'}
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBanner;