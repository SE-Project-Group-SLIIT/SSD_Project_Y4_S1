import { axiosInstance } from "../../api";
const BASE_PATH = "/vehicle";


export let addVehicle = async (vehicleData) => {
	try {
		const response = await axiosInstance.post(
			BASE_PATH + "/addVehicle",
			vehicleData,
		);
		return response.data; // Return the response data from the server
	} catch (error) {
		throw error;
	}
};