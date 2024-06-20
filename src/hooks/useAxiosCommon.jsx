import axios from "axios";

const axiosCommon = axios.create({
    baseURL: 'https://assignment-12-server-phi-nine.vercel.app/'
})
const useAxiosCommon = () => {
    return axiosCommon
};

export default useAxiosCommon;

