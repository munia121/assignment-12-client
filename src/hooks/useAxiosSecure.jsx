import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://assignment-12-server-phi-nine.vercel.app/'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;
