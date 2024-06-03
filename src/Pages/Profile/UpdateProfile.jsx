import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const UpdateProfile = () => {
    const axiosSecure = useAxiosSecure()
    const { email } = useParams()

    const { data: userData = [], refetch, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${email}`)
            return res.data
        }
    })
    console.log(userData)


    const { mutateAsync } = useMutation({
        mutationFn: async (profileData) => {
            const { data } = await axiosSecure.put(`/users/:${userData?.email}`, profileData)
            console.log(data)
            return data
        },
        onSuccess: () => {
            console.log('data saved successfully')
            toast.success('Test data added successfully')
            // navigate('/dashboard/profile')

        }

    })



    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('event')
        const form = e.target
        const name = form.name.value
        // const image = form.image.value
        const profileData = name
        console.log('profile data', profileData)
        // const { data } = await axiosSecure.put(`/users/${userData?.email}`, profileData)
        // console.log(data)


    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <button  type="submit">
                    update
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;