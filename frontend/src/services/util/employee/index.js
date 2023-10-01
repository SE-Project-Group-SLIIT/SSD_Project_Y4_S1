import { axiosInstance } from '../../api';
const BASE_PATH = '/employee';


//signIn API Call
export let viewEmployees = async (email, password) => {
    try {
        let value = await axiosInstance.get(BASE_PATH+ '/view-all');
        return value;
    } catch (error) {
        return error
    }
}