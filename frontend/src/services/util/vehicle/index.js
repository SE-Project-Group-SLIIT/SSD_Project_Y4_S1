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
				...vehicleData,
			},
		);
		return response.data; // Return the response data from the server
	} catch (error) {
		throw error;
	}
};

export const deleteVehicleService = async (vehicleId) => {
	try {
		const response = await fetch("/deleteVehicle", {
			method: "PUT",
			body: JSON.stringify({ _id: vehicleId }),
		});

		if (response.ok) {
			const data = await response.json();

			return data;
		} else {
			throw new Error("Failed to delete the vehicle");
		}
	} catch (error) {
		throw error;
	}
};
