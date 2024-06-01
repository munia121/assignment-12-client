import axios from "axios";

export const UploadImage =async (image) => {
    const formData = new FormData()
    formData.append('image', image)

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`, formData)

    // console.log(data.data. display_url)

    return data.data.display_url
};

export default UploadImage;