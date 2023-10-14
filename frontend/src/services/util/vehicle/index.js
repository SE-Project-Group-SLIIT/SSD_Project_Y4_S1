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

export let viewVehicle = async () => {
    try {
        const response = await axiosInstance.get(BASE_PATH + "/view-all");
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error;
    }
};

export let updateVehicle = async (vehicleID, vehicleData) => {
    try {
        const response = await axiosInstance.put(
            BASE_PATH + "/updateVehicle",
            {
                _id: vehicleID,
                ...vehicleData
            }
        );
        return response.data; // Return the response data from the server
    } catch (error) {
        throw error;
    }
};
