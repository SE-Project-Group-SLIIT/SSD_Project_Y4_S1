import { axiosInstance } from "../../api";
const BASE_PATH = "/employee";

//signIn API Call
export let viewEmployees = async () => {
	try {
		let value = await axiosInstance.get(BASE_PATH + "/view-all");
		return value;
	} catch (error) {
		return error;
	}
};

export let viewAllInactiveEmployees = async () => {
	try {
		let value = await axiosInstance.get(
			BASE_PATH + "/get-inactive-employees",
		);
		return value;
	} catch (error) {
		return error;
	}
};

export let inactiveEmployee = async (data) => {
	try {
		let value = await axiosInstance.put(
			BASE_PATH + `/inactive_employee`,
			{
				data: data,
			},
		);
		return value;
	} catch (error) {
		return error;
	}
};

export let activeEmployee = async (data) => {
	try {
		let value = await axiosInstance.put(
			BASE_PATH + `/active_employee`,
			{
				data: data,
			},
		);
		return value;
	} catch (error) {
		return error;
	}
};

export let addEmployees = async (employeeData) => {
	try {
		const response = await axiosInstance.post(
			BASE_PATH + "/save_employee_details",
			employeeData,
		);
		return response.data; // Return the response data from the server
	} catch (error) {
		throw error;
	}
};

export let viewAllActiveEmployees = async () => {
	try {
		let value = await axiosInstance.get(
			BASE_PATH + "/get-active-employees",
		);
		return value;
	} catch (error) {
		return error;
	}
};

export let updateEmployees = async (data) => {
	try {
		let value = await axiosInstance.put(
			BASE_PATH + `/update_employee/`,
			data,
		);
		return value.data;
	} catch (error) {
		return error;
	}
};