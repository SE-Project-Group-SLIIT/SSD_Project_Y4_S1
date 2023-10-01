import axios from 'axios';
// import { successHandler } from '../interceptors';
// import { errorHandler } from '../interceptors';
import {getAccessToken} from '../util/auth';
const BASE_URL = 'http://localhost:8070/api';


// Init Axios
export const axiosInstance = axios.create({ baseURL: BASE_URL })

// Add interceptors
axiosInstance.interceptors.request.use(

    async request => {
        const token = await getAccessToken();
        request.headers = {
            'Authorization': `${token}`
        }
        return request;
    }
);


//Axios response interceptor
axiosInstance.interceptors.response.use(
    response => response.data,
    error => error.response,
)
