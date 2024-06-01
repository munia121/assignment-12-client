import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn:async () =>{
            if(!user?.email ){
                return Promise.resolve(false)
            }
            const res = await axiosSecure.get(`/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;