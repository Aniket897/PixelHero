import axios from 'axios';


const axiosInstance = axios.create({
    baseURL : "https://pixabay.com/api"
});


export default axiosInstance;